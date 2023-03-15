
<template>
  <section class="not-found">
    <div class="error-content">
      <h1 id="error-title">404</h1>
      <div class="error-info">
        <h2>Page not found</h2>
        <p>This Page doesn`t exist or was removed! We suggest you go back to the home page.</p>
        <RouterLink to="/">
          <button>Home</button>
        </RouterLink>
      </div>
    </div>
  </section>
</template>

<script setup>
import { RouterLink } from 'vue-router'
</script>

<style scoped>
.not-found {
  display: grid;
  place-items: center;
  text-align: center;
}

.not-found h1 {
  font-size: 20rem;
  color: rgba(255, 255, 255, 0.048);
}

.error-content {
  position: relative;
  margin-top: 100px;
}

.error-info {
  text-align: center;
  position: absolute;
  top: 35%;
}

.error-info h2 {
  margin-bottom: 12px;
}

.error-info p {
  width: 70%;
  margin-inline: auto;
  margin-bottom: 12px;
  line-height: 130%;
}

.error-info button {
  padding-inline: 32px;
  padding-block: 11px;
  color: var(--primary);
  background-color: var(--white);
  font-family: inherit;
  font-weight: 600;
  border-radius: 6px;
  outline: none;
  border: none;
  cursor: pointer;
}

@media (max-width: 420px) {
  #error-title {
    font-size: 12rem;
  }
  .error-content {
    margin-top: 150px;
  }
  .error-info p {
    width: 80%;
  }
  .error-info {
    text-align: center;
    position: absolute;
    top: 20%;
  }
}
</style>
