<template>
  <section className="repo-metrics">
    <div className="open-issues">
      <p>Open Issues</p>
      <p>{{ open_issues }}</p>
    </div>

    <div className="forks">
      <p>Forks</p>
      <p>{{ forks }}</p>
    </div>

    <div className="watchers">
      <p>Watchers</p>
      <p>{{ watchers }}</p>
    </div>
  </section>
</template>

<script setup>
import { toRefs } from 'vue'
const props = defineProps({
  forks: Number,
  watchers: Number,
  open_issues: Number
})

const { forks, watchers, open_issues } = toRefs(props)
</script>

<style scoped>
.repo-metrics {
  margin-top: 80px;
  display: flex;
  justify-content: space-between;
  background-color: var(--primary);
  padding-inline: 18px;
  padding-block: 12px;
  border-radius: 8px;
}

.open-issues p:first-of-type,
.forks p:first-of-type,
.watchers p:first-of-type {
  font-size: 1.25rem;
  font-weight: 400;
  color: var(--grey);
  margin-bottom: 12px;
}

.open-issues p:nth-of-type(2),
.forks p:nth-of-type(2),
.watchers p:nth-of-type(2) {
  font-size: 1.5rem;
  font-weight: 400;
}

@media (max-width: 420px) {
  .repo-metrics {
    margin-top: 50px;
  }

  .open-issues p:first-of-type,
  .forks p:first-of-type,
  .watchers p:first-of-type {
    font-size: 0.825rem;
  }

  .open-issues p:nth-of-type(2),
  .forks p:nth-of-type(2),
  .watchers p:nth-of-type(2) {
    font-size: 1rem;
  }
}
</style>
