<script setup>
import { onMounted, ref } from 'vue'

import UserImage from '../components/UserImage.vue'
import ProfileHeader from '../components/ProfileHeader.vue'
import UserInfo from '../components/UserInfo.vue'
import AccountInfo from '../components/AccountInfo.vue'
import AvatarLoader from '../components/loader/AvatarLoader.vue'
import HomeLoader from '../components/loader/HomeLoader.vue'

const profile = ref([])
const isLoading = ref(true)

onMounted(async () => {
  let result
  try {
    const res = await fetch('https://api.github.com/users/alvinokafor')
    result = await res.json()
    profile.value = result
    isLoading.value = false
  } catch (err) {
    throw new Error('Error:' + err)
  }
})
</script>

<template>
  <main>
    <section v-if="!isLoading" class="homeContainer flex">
      <div>
        <UserImage :img="profile.avatar_url" />
      </div>

      <div class="content">
        <ProfileHeader :bio="profile.bio" :name="profile.name" :username="profile.login" />
        <AccountInfo
          :followers="profile.followers"
          :following="profile.following"
          :repos="profile.public_repos"
        />
        <UserInfo
          :location="profile.location"
          :url="profile.html_url"
          :twitter="profile.twitter_username"
        />
      </div>
    </section>

    <section v-if="isLoading" class="homeContainer flex">
      <div>
        <AvatarLoader />
      </div>

      <div class="content">
        <HomeLoader />
        <HomeLoader />
        <HomeLoader />
      </div>
    </section>
  </main>
</template>

<style scoped>
.homeContainer {
  background-color: var(--secondary);
  max-width: 1024px;
  margin-inline: auto;
  margin-block: 20px;
  padding-inline: 40px;
  padding-block: 60px;
  border-radius: 8px;
}

.content {
  width: 100%;
}

@media (max-width: 420px) {
  .homeContainer {
    max-width: 90%;
    flex-direction: column;
    padding-inline: 20px;
  }
}
</style>
