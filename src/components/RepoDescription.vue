<script setup>
import { toRefs } from 'vue'
const props = defineProps({
  description: String
})

const { description } = toRefs(props)
</script>

<template>
  <div className="repo-desc">
    <h2>Description</h2>
    <p v-if="description">{{ description }}</p>
    <p v-else>No Description for this repository</p>
  </div>
</template>

<style scoped>
.repo-desc h2 {
  font-size: 1.5rem;
  margin-bottom: 12px;
}

.repo-desc p {
  color: var(--grey);
}

.repo-desc {
  margin-bottom: 50px;
}
</style>
