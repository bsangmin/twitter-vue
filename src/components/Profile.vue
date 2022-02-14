<template>
    <div class="profile-top">
        <div class="banner" :style="{ backgroundImage: 'url(' + bannerUrl + ')' }"></div>
        <div class="profile-img-area">
            <img class="profile-img" :src="profileUrl" />
        </div>
        <div class="profile-info">
            <div class="prof prof-name">{{ name }}</div>
            <div class="prof prof-screename">@{{ screename }}</div>
            <div class="prof prof-desc">
                <pre>{{ desc }}</pre>
            </div>
            <div class="prof prof-sub">
                <div class="sub-svg" v-if="loc !== ''">
                    <div class="svg-img svg-location"></div>
                    <div>{{ loc }}</div>
                </div>
                <div class="sub-svg" v-if="link !== ''">
                    <div class="svg-img svg-link"></div>
                    <div>{{ link }}</div>
                </div>
                <div class="sub-svg">
                    <div class="svg-img svg-cal"></div>
                    <div>가입일: {{ date }}</div>
                </div>
            </div>
            <div class="prof prof-flw">
                <div class="flw-info">
                    <span class="flw-num">{{ flwi }}</span>
                    <span>팔로우 중</span>
                </div>
                <div class="flw-info">
                    <span class="flw-num">{{ flwr }}</span>
                    <span>팔로워</span>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import "@/assets/css/profile.css";
import { convDate } from "@/common/tweet.js";

export default {
    created () {
        const user = this.$store.getters.getUser
        // console.log(user)
        // try {
        //     this.bannerUrl = user.profile_banner_url
        // } catch (error) {
        //     this.bannerUrl = ""
        // }
        this.bannerUrl = user.banner
        this.profileUrl = user.avatar.replace('normal', '400x400')

        this.name = user.name
        this.screename = user.username
        this.desc = user.biography
        this.date = convDate(user.joined)

        this.flwi = user.friendscount
        this.flwr = user.followerscount

        if(user.location !== ""){
            this.loc = user.location
        }
        else{
            this.loc = ""
        }

        if(user.website !== "") {
            this.link = user.website
        }
        else{
            this.link = ""
        }
    },
};
</script>

<style lang="scss" scoped></style>
