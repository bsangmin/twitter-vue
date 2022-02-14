<template>
    <div class="app">
        <div class="main" v-if="loaded">
            <profile></profile>
            <tweets></tweets>
        </div>

        <div class="viewer" v-if="showViewer" @click="closeViewer">
            <div class="draw-img" v-if="!isVideo" :style="{ backgroundImage: 'url(' + viewData.url + ')' }"></div>
            <video class="draw-vid" playsinline controls v-if="viewData.vid" @click="prevent($event)">
                <source :src="viewData.url" type="video/mp4" />
            </video>
        </div>

        <div class="loading" v-if="!loaded">
            <span class="loading-span a">
                <span class="loading-span b">
                    <span class="loading-span c"></span>
                </span>
            </span>
        </div>
    </div>
</template>

<script>
import "@/assets/css/viewer.css";
import "@/assets/css/loading.css";

import Profile from "@/components/Profile.vue";
import Tweets from "@/components/Tweets.vue";
import { mapGetters } from "vuex";

export default {
    components: {
        Profile,
        Tweets,
    },

    data() {
        return {
            isVideo: false,
            viewUrl: "",
        };
    },

    methods: {
        prevent(e) {
            e.stopImmediatePropagation();
            return false;
        },

        closeViewer() {
            this.$store.commit("setViewer", false);
        },
    },

    computed: {
        ...mapGetters(["loaded", "showViewer", "viewData"]),
        // activation() {
        //     return this.$store.getters.getLoaded;
        // }
    },

    beforeCreate() {
        this.$store.dispatch("setUserData", this.$route.params.id);
    },
};
</script>

<style lang="stylus" scoped></style>
