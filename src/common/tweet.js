// import punycode from "punycode";
// import setting from "../setting/setting";

const Tweet = class {
    constructor(user, tweet) {
        // const fullText = tweet.full_text;
        // const uniArray = punycode.ucs2.decode(fullText).slice(0, tweet.display_text_range[1]);
        // this.text = punycode.ucs2.encode(uniArray);
        this.text = tweet.text
        // this.oriDate = tweet.created_at;
        // this.date = this.convertDate(tweet.created_at);
        this.date = convDate(tweet.time);

        this.username = tweet.username;
        this.name = tweet.name;
        this.avatar = tweet.avatar;

        this.replyC = tweet.replies;
        this.retweetC = tweet.retweets;
        this.favoriteC = tweet.likes;

        this.media = tweet.media;
        this.mediaC = this.media.length;

        this.displayCol = false;
        this.displayRow = false;
        this.displayRow3 = false;

        if (this.mediaC === 2) {
            this.displayCol = true;
        } else if (this.mediaC === 3) {
            this.displayCol = true;
            this.displayRow3 = true;
        } else if (this.mediaC === 4) {
            this.displayCol = true;
            this.displayRow = true;
        }

        const mediaClass = [
            ["m-full"],
            ["m-half", "m-half"],
            ["m-half", "m-fullhalf", "m-fullhalf"],
            ["m-fullhalf", "m-fullhalf", "m-fullhalf", "m-fullhalf"],
        ];

        for (let i in this.media) {
            this.media[i]["class"] = mediaClass[this.mediaC - 1][i];

            const type = this.media[i].type;
            this.media[i]["type"] = type === "animated_gif" ? "video" : type;

            this.media[i]["local_url"] =
                `${process.env.VUE_APP_API}/tw/${tweet.username}/t/${tweet.id}_p${i}`;
        }
    }

    baseName(str) {
        var base = new String(str).substring(str.lastIndexOf("/") + 1);
        if (base.lastIndexOf(".") != -1) base = base.substring(0, base.lastIndexOf("."));
        return base;
    }
};

export default Tweet;

export const convDate = (date) => {
    const nDate = new Date(date);
    const appendZero = function(num) {
        return num > 9 ? num : "0" + num;
    };
    const getDay = function(day) {
        return ["일", "월", "화", "수", "목", "금", "토"][day];
    };

    return (
        nDate.getFullYear() +
        "년 " +
        (nDate.getMonth() + 1) +
        "월 " +
        nDate.getDate() +
        "일(" +
        getDay(nDate.getDay()) +
        ") " +
        appendZero(nDate.getHours()) +
        ":" +
        appendZero(nDate.getMinutes())
    );
};