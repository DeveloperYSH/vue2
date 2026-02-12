<template lang="">
  <div>
    <h2>게시글 목록</h2>
    <hr class="my-4" />
    <div class="row g-3">
      <div v-for="post in posts" :key="post.id" class="col-4">
        <PostItem
          :title="post.title"
          :content="post.content"
          :createdAt="post.createdAt"
          @click="goPage(post.id)"
        />
      </div>
    </div>
    <hr class="my-4" />
    <AppCard>
      <PostDetailView :id="3" />
    </AppCard>
  </div>
</template>
<script setup>
import AppCard from "@/components/AppCard.vue";
import PostItem from "@/components/posts/PostItem.vue";
import PostDetailView from "@/views/posts/PostDetailView.vue";
import { ref, onMounted } from "vue";
import { getPosts } from "@/api/posts";
import { useRouter } from "vue-router";
const posts = ref([]);
const router = useRouter();
const fetchPosts = () => {
  posts.value = getPosts();
};
fetchPosts();

const goPage = (id) => {
  // router.push(`/posts/${id}`);
  // http://localhost:3000/posts/1?searchText=hello#world!
  router.push({
    name: "PostDetail",
    params: {
      id,
    },
    query: {
      searchText: "hello",
    },
    hash: "#world!",
  });
};
</script>
<style lang="scss" scoped></style>
