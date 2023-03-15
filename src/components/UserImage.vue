<template>
  <div className="user-img">
    <img :src="img" alt="user profile" />
  </div>
</template>

<script setup>
import { toRefs } from 'vue'

const props = defineProps({
  img: String
})

const { img } = toRefs(props)
</script>

<style scoped>
.user-img img {
  width: 100%;
  border-radius: 50%;
}

.user-img {
  width: 146px;
  height: 146px;
  margin-right: 30px;
}

@media (max-width: 420px) {
  .user-img {
    width: 100px;
    height: 100px;
  }
}
</style>
