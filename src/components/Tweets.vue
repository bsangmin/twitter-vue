<template>
    <div class="tweets">
        <TweetMain v-for="tweet in getTweets" :tweet="tweet" :key="tweet.id"/>
    </div>
</template>

<script>
import "@/assets/css/tweets.css";
import TweetMain from './tweet/TweetMain.vue'
import { mapGetters } from 'vuex';

export default {
    components: {
        TweetMain,
    },

    computed: {
        ...mapGetters([
            'getTweets'
        ])
    },

};
</script>

<style lang="scss" scoped></style>
