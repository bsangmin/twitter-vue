import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";
import Tweet from "@/common/tweet";
// import setting from "../setting/setting";

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        userData: {},
        showViewer: false,
        viewData: {url: "", vid: false}
    },
    getters: {
        getUserData: (state) => {
            return state.userData;
        },
        getUser: (state) => {
            return state.userData["user"];
        },
        getTweets: (state) => {
            return state.userData["tweets"];
        },
        
        loaded: (state) => {
            return state.userData["isLoaded"];
        },
        showViewer: (state) => {
            return state.showViewer;
        },
        viewData: (state) => {
            return state.viewData
        }
    },
    mutations: {
        setUserData: (state, payload) => {
            state.userData = payload;
        },
        setViewer: (state, payload)  => {
            state.showViewer = payload;
        },
        setViewerData: (state, payload) => {
            state.viewData = payload
        }
    },
    actions: {
        setUserData: (context, user) => {
            axios
                .get(`${process.env.VUE_APP_API}/tw/${user}`)
                .then((res) => {
                    const tweetsData = [];
                    const u = res.data;
                    const tweets = u.tweets;

                    for (const i in tweets) {
                        let tw = null;
                        try {
                            tw = new Tweet(u, tweets[i]);
                        } catch (error) {
                            console.error(error)
                            continue;
                        }
                        const tweet = {
                            // name: u.name,
                            twId: tweets[i].id,
                            // screenName: u.username,
                            // profileUrl: u.avatar.replace("_normal", "_bigger"),
                            tw: tw,
                        };

                        tweetsData.push(tweet);
                    }

                    context.commit("setUserData", {
                        user: u,
                        tweets: tweetsData,
                        isLoaded: true,
                    });
                })
                .catch((err) => {
                    // console.error(process.env);
                    alert(err);
                });
        },
    },

    modules: {},
});
