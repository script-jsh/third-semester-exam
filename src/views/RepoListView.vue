<script setup>
import { onMounted, ref, computed } from 'vue'
import { RouterLink } from 'vue-router'

import RepoItem from '../components/RepoItem.vue'
import RepoPagination from '../components/RepoPagination.vue'
import RepoLoader from '../components/loader/RepoLoader.vue'

const repositories = ref([])
const currentPage = ref(1)
const reposPerPage = ref(5)
const pageNumbers = ref([])
const buttonLimit = ref(0)
const isLoading = ref(true)

//gets the index of the last page
const indexOfLastPage = computed(() => {
  return currentPage.value * reposPerPage.value
})
//gets the index of the second page
const indexOfFirstPage = computed(() => {
  return indexOfLastPage.value - reposPerPage.value
})

const currentSlice = computed(() => {
  return repositories.value.slice(indexOfFirstPage.value, indexOfLastPage.value)
})

onMounted(async () => {
  try {
    const res = await fetch('https://api.github.com/users/alvinokafor/repos')
    const result = await res.json()
    repositories.value = result
    buttonLimit.value = Math.ceil(repositories.value.length / reposPerPage.value)

    for (let i = 1; i <= buttonLimit.value; i++) {
      pageNumbers.value.push(i)
    }
    isLoading.value = false
  } catch (err) {
    throw new Error('Error:' + err)
  }
})

function nextPage() {
  currentPage.value++
}

function prevPage() {
  currentPage.value--
}

const goToPage = (btnNum) => {
  currentPage.value = btnNum
}
</script>

<template>
  <section class="repo-list">
    <div class="repo-header">
      <RouterLink to="/">
        <div class="back-btn flex">
          <i class="fa-solid fa-arrow-left"></i>
          <p>Back</p>
        </div>
      </RouterLink>
      <h3>Repositories</h3>
    </div>

    <div v-if="!isLoading">
      <RepoItem
        v-for="(repo, index) in currentSlice"
        :key="repo.id"
        :repo="repo"
        :index="index"
        :currentPage="currentPage"
      />
    </div>

    <div v-if="isLoading">
      <RepoLoader v-for="n in reposPerPage" :key="n" />
    </div>

    <RepoPagination
      @page-jump="goToPage"
      @next-page="nextPage()"
      @prev-page="prevPage()"
      :pageNumbers="pageNumbers"
      :currentPage="currentPage"
    />
  </section>
</template>

<style scoped>
.repo-list {
  max-width: 1024px;
  margin-inline: auto;
  margin-top: 40px;
}

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

.repo-header {
  margin-bottom: 30px;
}

.repo-header h3 {
  font-size: 2rem;
}

@media (max-width: 420px) {
  .repo-list {
    width: 90%;
  }
}
</style>
