<template>
  <div class="app">
    <h1>Страница с постами</h1>
    <MyButton @click="showPopup" style="margin: 15px 0">Создать пост</MyButton>
    <MyPopup v-model:show="popupVisible">
      <PostForm @create="createPost" />
    </MyPopup>
    <PostList :posts="posts" @remove="removePost" v-if="!isPostsLoading" />
    <div v-else>Идет загрузка...</div>
  </div>
</template>

<script>
import PostForm from "./components/PostForm.vue";
import PostList from "./components/PostList.vue";
import MyPopup from "./components/UI/MyPopup.vue";
import MyButton from "./components/UI/MyButton.vue";
import axios from "axios";

export default {
  components: {
    PostList,
    PostForm,
    MyPopup,
    MyButton,
    MyButton,
  },
  data() {
    return {
      posts: [],
      popupVisible: false,
      isPostsLoading: false,
    };
  },
  methods: {
    createPost(post) {
      this.posts.push(post);
      this.popupVisible = false;
    },
    removePost(post) {
      this.posts = this.posts.filter((p) => p.id !== post.id);
    },
    showPopup() {
      this.popupVisible = true;
    },
    async fetchPosts() {
      try {
        this.isPostsLoading = true;
        const res = await axios.get(
          "https://jsonplaceholder.typicode.com/posts?_limit=10"
        );
        this.posts = res.data;
      } catch (err) {
        alert("Ошибка");
      } finally {
        this.isPostsLoading = false;
      }
    },
  },
  mounted() {
    this.fetchPosts();
  },
};
</script>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
.app {
  padding: 20px;
}
form {
  display: flex;
  flex-direction: column;
}
</style>
