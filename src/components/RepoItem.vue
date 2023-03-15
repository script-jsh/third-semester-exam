<template>
  <RouterLink :to="`/repositories/${repo.name}`">
    <div className="repo-card flex">
      <h5>{{ (currentPage - 1) * 5 + index + 1 }}</h5>
      <p id="repoTitle">{{ repo?.name }}</p>
      <div className="repo-link flex" id="repoURL">
        <i className="fa-solid fa-link"></i>
        <p>{{ repo?.html_url }}</p>
      </div>
    </div>
  </RouterLink>
</template>

<script setup>
import { toRefs } from 'vue'
import { RouterLink } from 'vue-router'

const props = defineProps({
  repo: Object,
  index: Number,
  currentPage: Number
})

const { repo, index, currentPage } = toRefs(props)
</script>

<style scoped>
.repo-card {
  align-items: center;
  background-color: var(--secondary);
  padding: 20px;
  border-radius: 8px;
  margin-bottom: 18px;
}

/* .repo-card:last-of-type {
    margin-bottom: 0;
} */

.repo-card h5 {
  margin-right: 20px;
  font-size: 1.125rem;
  flex: 0;
}

.repo-card p {
  margin-right: 30px;
}

#repoTitle {
  flex: 2;
}

#repoURL {
  flex: 5;
}

.repo-link i {
  margin-right: 10px;
}

@media (max-width: 420px) {
  .repo-card h5,
  .repo-card p {
    font-size: 0.825rem;
    margin-bottom: 12px;
  }

  #repoURL p {
    word-break: break-all;
  }

  .repo-card {
    flex-direction: column;
    align-items: flex-start;
  }
}
</style>
