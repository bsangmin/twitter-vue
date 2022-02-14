<template>
    <div class="tw-profile">
        <div class="tw-profile-img" :style="{backgroundImage: 'url(' + tweet.tw.avatar + ')'}"></div>
        <div class="tw-profile-text">
            <div class="info">
                <span style="font-weight: bold; margin-right: 5px;">{{ tweet.tw.name }}</span>
                <span style="color: rgb(91, 112, 131);"><span>@</span>{{ tweet.tw.username }}</span>
            </div>
            <div class="date">{{ tweet.tw.date }}</div>
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
};
</script>

<style lang="scss" scoped></style>
