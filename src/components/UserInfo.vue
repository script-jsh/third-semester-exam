<template>
  <section class="user-info flex">
    <div class="info-div">
      <div class="location">
        <i class="fa-solid fa-location-dot location-icon"></i>
        <span>{{ location }}</span>
      </div>

      <div class="github">
        <i class="fa-solid fa-link"></i>
        <span>
          <a :href="url">Github profile</a>
        </span>
      </div>
    </div>

    <div class="info-div">
      <div class="twitter">
        <i class="fa-brands fa-twitter"></i>
        <a :href="`https://twitter.com/${twitter}`"
          ><span>@{{ twitter }}</span></a
        >
      </div>

      <!-- <div class="company">
        <i class="fa-solid fa-building"></i>
        <span>Not available</span>
      </div> -->
    </div>
  </section>
</template>

<script setup>
import { toRefs } from 'vue'

const props = defineProps({
  location: String,
  url: String,
  twitter: String
})

const { location, url, twitter } = toRefs(props)
</script>

<style scoped>
.user-info {
  margin-top: 80px;
  justify-content: space-between;
}

.user-info span {
  font-size: 1.25rem;
  margin-left: 20px;
}

i {
  font-size: 20px;
}

.twitter,
.location {
  margin-bottom: 50px;
}

@media (max-width: 420px) {
  .user-info {
    flex-direction: column;
  }

  .user-info span {
    margin-top: 50px;
    font-size: 0.725rem;
    margin-left: o;
  }

  i {
    font-size: 16px;
  }

  .twitter,
  .location,
  .github,
  .company {
    margin-bottom: 16px;
  }
}
</style>
