<template>
  <section class="single-repo">
    <div class="repo-header">
      <RouterLink to="/repositories">
        <div class="back-btn flex">
          <i class="fa-solid fa-arrow-left"></i>
          <p>Back</p>
        </div>
      </RouterLink>
      <h3>{{ repo?.name }}</h3>
    </div>

    <div v-if="!isLoading" class="single-repo-info">
      <RepoDescription :description="repo?.description" />
      <RepoMetrics
        :forks="repo?.forks"
        :watchers="repo?.watchers"
        :open_issues="repo?.open_issues"
      />
      <RepoInfo
        :owner="repo?.owner?.login"
        :owner_url="repo?.owner?.html_url"
        :language="repo?.language"
        :license="repo?.license?.name"
        :repo_url="repo?.html_url"
      />
    </div>

    <div v-else class="single-repo-info">
      <HomeLoader v-for="n in 3" :key="n" />
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { useRoute, RouterLink } from 'vue-router'

import RepoDescription from '../components/RepoDescription.vue'
import RepoMetrics from '../components/RepoMetrics.vue'
import RepoInfo from '../components/RepoInfo.vue'
import HomeLoader from '../components/loader/HomeLoader.vue'

const repo = ref([])
const isLoading = ref(true)
const route = useRoute()

onMounted(async () => {
  try {
    const res = await fetch(`https://api.github.com/repos/josh-alhassan/${route.params.id}`)
    const result = await res.json()
    repo.value = result
    isLoading.value = false
  } catch (err) {
    throw new Error('Error:' + err)
  }
})
</script>

<style scoped>
.back-btn {
  align-items: center;
  margin-bottom: 12px;
}

.back-btn i {
  margin-right: 10px;
}

.back-btn p {
  font-size: 1.125rem;
}
.single-repo {
  max-width: 1024px;
  margin-inline: auto;
  margin-top: 40px;
}

.single-repo-info {
  background-color: var(--secondary);
  padding-inline: 40px;
  padding-block: 35px;
  border-radius: 8px;
}

.repo-header h3 {
  margin-block: 10px;
}

@media (max-width: 420px) {
  .single-repo {
    width: 90%;
  }

  .single-repo-info {
    background-color: var(--secondary);
    padding-inline: 20px;
    padding-block: 35px;
    border-radius: 8px;
  }
}
</style>
