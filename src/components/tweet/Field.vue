<template>
    <div class="field">
        <div class="text">
            <pre>{{ tweet.tw.text }}</pre>
        </div>
        <div class="media">
            <div
                class="media-img"
                v-for="m in tweet.tw.media"
                :key="m.id"
                :style="{ backgroundImage: 'url(' + m.local_url + ')' }"
                :class="m.class"
                @click="loadImg(m)"
            >
                <div class="player" v-if="m.type === 'video'">
                    <div class="svg-btn"></div>
                </div>
            </div>
            <div class="col" v-if="tweet.tw.displayCol"></div>
            <div class="row" v-if="tweet.tw.displayRow"></div>
            <div class="row r3" v-if="tweet.tw.displayRow3"></div>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        tweet: {
            type: Object,
            default: () => {},
        },
    },

    methods: {
        loadImg(m) {
            this.$store.commit("setViewerData", {
                url: m.local_url.replace('/t/', `/o/`)+`.${m.ext}`,
                vid: m.type === "video",
            });
            this.$store.commit("setViewer", true);
        },
    },
};
</script>

<style lang="sass" scoped></style>
