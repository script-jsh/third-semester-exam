<template>
  <section class="avatar-loader">
    <div class="shimmer-wrapper">
      <div class="shimmer"></div>
    </div>
  </section>
</template>

<style scoped>
.avatar-loader {
  width: 146px;
  height: 146px;
  border-radius: 50%;
  margin-right: 30px;
  background-color: #141c2f63;
  position: relative;
  overflow: hidden;
}

@media (max-width: 420px) {
  .avatar-loader {
    width: 100px;
    height: 100px;
  }
}
</style>
