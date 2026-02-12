import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import AboutView from "../views/AboutView.vue";
import PostCreateView from "@/views/posts/PostCreateView.vue";
import PostDetailView from "@/views/posts/PostDetailView.vue";
import PostEditView from "@/views/posts/PostEditView.vue";
import PostListView from "@/views/posts/PostListView.vue";
import NotFoundView from "@/views/NotFoundView.vue";
import NestedView from "@/views/nested/NestedView.vue";
import NestedOneView from "@/views/nested/NestedOneView.vue";
import NestedTwoView from "@/views/nested/NestedTwoView.vue";
import NestedHomeView from "@/views/nested/NestedHomeView.vue";
const routes = [
  {
    path: "/",
    component: HomeView,
  },
  {
    path: "/about",
    component: AboutView,
  },
  {
    path: "/posts",
    component: PostListView,
    name: "PostList",
  },
  {
    path: "/posts/:id/edit",
    component: PostEditView,
    name: "PostEdit",
  },
  {
    path: "/posts/:id",
    component: PostDetailView,
    name: "PostDetail",
    // props: true,
    props: (route) => ({
      id: parseInt(route.params.id),
    }),
  },
  {
    path: "/posts/create",
    component: PostCreateView,
    name: "PostCreate",
  },
  {
    path: "/:pathMatch(.*)*",
    component: NotFoundView,
    name: "NotFound",
  },
  {
    path: "/nested",
    component: NestedView,
    name: "Nested",
    children: [
      {
        path: "one",
        component: NestedOneView,
        name: "NestedOne",
      },
      {
        path: "",
        component: NestedHomeView,
        name: "NestedHome",
      },
      {
        path: "two",
        component: NestedTwoView,
        name: "NestedTwo",
      },
    ],
  },
];

const router = createRouter({
  history: createWebHistory("/"),
  routes,
});

export default router;
