<template>
  <div>
    <h2>About View</h2>
    <button class="btn btn-primary" @click="go">Home으로 이동</button>
  </div>
</template>
<script setup>
import { useRouter } from 'vue-router';
const router = useRouter();

const go = () => {
  router.push('/');
};
</script>
<style></style>
