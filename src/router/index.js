import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const Blogs = () => import("views/blogs/Blogs");
const BlogIssue = () => import("views/blogs/issue/BlogIssue");
const BlogLists = () => import("views/blogs/lists/BlogLists");

const Cat = () => import("views/cat/Cat");
const CatIssue = () => import("views/cat/issue/CatIssue");
const CatLists = () => import("views/cat/lists/CatLists");

const Tag = () => import("views/tag/Tag");
const Title = () => import("views/title/Title");

const routes = [
  {
    path: "",
    redirect: "/blogs",
  },
  {
    path: "/blogs",
    component: Blogs,
    children: [
      {
        path: "",
        redirect: "bloglists",
      },
      {
        path: "blogissue",
        component: BlogIssue,
      },
      {
        path: "bloglists",
        component: BlogLists,
      },
    ],
  },
  {
    path: "/cat",
    component: Cat,
    children: [
      {
        path: "",
        redirect: "catlists",
      },
      {
        path: "catissue",
        component: CatIssue,
      },
      {
        path: "catlists",
        component: CatLists,
      },
    ],
  },
  {
    path: "/tag",
    component: Tag,
  },
  {
    path: "/title",
    component: Title,
  },
];

const router = new VueRouter({
  routes,
  mode: "history",
});

export default router;
