<template>
    <div class="bottom">
        <div class="bot_menu reply">
            <div class="svg-img svg-reply"></div>
            <div>
                <span>{{ tw.replyC }}</span>
            </div>
        </div>
        <div class="bot_menu retweet">
            <div class="svg-img svg-retweet"></div>
            <div>
                <span>{{ tw.retweetC }}</span>
            </div>
        </div>
        <div class="bot_menu favorite">
            <div class="svg-img svg-fav"></div>
            <div>
                <span>{{ tw.favoriteC }}</span>
            </div>
        </div>
        <div class="bot_menu share">
            <div class="svg-img svg-share"></div>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        tw: {
            type: Object,
            default: () => {}
        },
    },
};
</script>

<style lang="sass" scoped></style>
