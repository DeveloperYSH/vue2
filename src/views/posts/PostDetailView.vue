<template lang="">
  <div>
    <h2>{{ form.title }}</h2>
    <p>{{ form.content }}</p>
    <p class="text-muted">2026-02-12</p>
    <hr class="my-4" />
    <div class="row g-2">
      <div class="col-auto">
        <button class="btn btn-outline-dark">이전글</button>
      </div>
      <div class="col-auto">
        <button class="btn btn-outline-dark">이전글</button>
      </div>
      <div class="col-auto me-auto"></div>
      <div class="col-auto">
        <button class="btn btn-outline-dark" @click="goListPage">목록</button>
      </div>
      <div class="col-auto">
        <button class="btn btn-outline-primary" @click="goEditPage">
          수정
        </button>
      </div>
      <div class="col-auto">
        <button class="btn btn-outline-danger">삭제</button>
      </div>
    </div>
  </div>
</template>
<script setup>
import { ref, onMounted } from "vue";
import { getPostById } from "@/api/posts";
import { useRoute, useRouter } from "vue-router";
const route = useRoute();
const router = useRouter();
const form = ref({});

const props = defineProps({
  id: Number,
});
const goListPage = () => {
  router.push({
    name: "PostList",
  });
};
const goEditPage = () => {
  router.push({
    name: "PostEdit",
    params: { id: props.id },
  });
};
const fetchPost = () => {
  const data = getPostById(props.id);
  form.value = { ...data };
};
fetchPost();
</script>
<style lang="scss" scoped></style>
