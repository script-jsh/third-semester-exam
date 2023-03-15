<template>
  <section class="repo-info">
    <p>
      <a :href="owner_url"> <span>Owner: </span>@{{ owner }}</a>
    </p>
    <p><span>Language: </span>{{ language }}</p>
    <p v-if="license"><span>Licence: </span> {{ license }}</p>
    <p v-else class="not-available">No licence available for this repository</p>
    <div class="repo-link flex repo-info-div">
      <i class="fa-solid fa-link"></i>
      <a id="infoURL" href="#">{{ repo_url }}</a>
    </div>
  </section>
</template>

<script setup>
import { toRefs } from 'vue'
const props = defineProps({
  owner: String,
  owner_url: String,
  language: String,
  license: String,
  repo_url: String
})

const { owner, owner_url, language, license, repo_url } = toRefs(props)
</script>

<style scoped>
.repo-info {
  margin-top: 50px;
}

.repo-info p {
  margin-bottom: 20px;
}

.repo-info p:nth-of-type(4) {
  margin-bottom: 0;
}

.repo-info span {
  font-weight: 500;
}

.not-available {
  color: var(--grey);
}

@media (max-width: 420px) {
  .repo-info p {
    font-size: 0.825rem;
  }

  #infoURL {
    word-break: break-all;
  }
}
</style>
