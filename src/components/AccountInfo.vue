<template>
  <section class="account-info">
    <RouterLink to="/repositories">
      <div class="repo">
        <p>Repositories</p>
        <p>{{ repos }}</p>
      </div>
    </RouterLink>

    <div class="followers">
      <p>Followers</p>
      <p>{{ followers }}</p>
    </div>

    <div class="following">
      <p>Following</p>
      <p>{{ following }}</p>
    </div>
  </section>
</template>

<script setup>
import { toRefs } from 'vue'
import { RouterLink } from 'vue-router'

const props = defineProps({
  followers: Number,
  following: Number,
  repos: Number
})

const { followers, following, repos } = toRefs(props)
</script>

<style scoped>
.account-info {
  margin-top: 80px;
  display: flex;
  justify-content: space-between;
  background-color: var(--primary);
  padding-inline: 18px;
  padding-block: 12px;
  border-radius: 8px;
}

.repo p:first-of-type,
.followers p:first-of-type,
.following p:first-of-type {
  font-size: 1.25rem;
  font-weight: 400;
  color: var(--grey);
  margin-bottom: 12px;
}

.repo p:nth-of-type(2),
.followers p:nth-of-type(2),
.following p:nth-of-type(2) {
  font-size: 1.5rem;
  font-weight: 400;
}

.repo,
.repo p,
.followers,
.followers p,
.following,
.following p {
  cursor: pointer;
  transition: all 200ms ease-in;
}

.repo p:first-of-type:hover,
.followers p:first-of-type:hover,
.following p:first-of-type:hover {
  color: var(--white);
}

@media (max-width: 420px) {
  .account-info {
    margin-top: 50px;
  }

  .repo p:first-of-type,
  .followers p:first-of-type,
  .following p:first-of-type {
    font-size: 0.725rem;
  }

  .repo p:nth-of-type(2),
  .followers p:nth-of-type(2),
  .following p:nth-of-type(2) {
    font-size: 1rem;
  }
}
</style>
