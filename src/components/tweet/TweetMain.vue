<template>
    <div class="tweet">
        <top :tweet="tweet"></top>
        <field :tweet="tweet"></field>
        <bottom :tw="tweet.tw"></bottom>
    </div>
</template>

<script>

import Top from './Top'
import Field from './Field'
import Bottom from './Bottom'

export default {
    props: {
        tweet: {
            type: Object,
            default: () => {},
        },
    },

    components: {
        Top, Field, Bottom
    },

    data() {
        return {
            mTweet: {},
        };
    },
};
</script>

<style lang="scss" scoped></style>
