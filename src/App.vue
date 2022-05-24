<template>
  <div class="app">
    <h1>Страница с постами</h1>
    <div class="app__buttons">
      <MyButton @click="showPopup">Создать пост</MyButton>
      <MySelect v-model="selectedSort" :options="sortOptions"></MySelect>
    </div>
    <MyPopup v-model:show="popupVisible">
      <PostForm @create="createPost" />
    </MyPopup>
    <PostList
      :posts="sortedPosts"
      @remove="removePost"
      v-if="!isPostsLoading"
    />
    <div v-else>Идет загрузка...</div>
  </div>
</template>

<script>
import PostForm from "./components/PostForm.vue";
import PostList from "./components/PostList.vue";
import MyPopup from "./components/UI/MyPopup.vue";
import MyButton from "./components/UI/MyButton.vue";
import MySelect from "./components/UI/MySelect.vue";
import axios from "axios";

export default {
  components: {
    PostList,
    PostForm,
    MyPopup,
    MyButton,
    MySelect,
  },
  data() {
    return {
      posts: [],
      popupVisible: false,
      isPostsLoading: false,
      selectedSort: "",
      sortOptions: [
        { value: "title", name: "По названию" },
        { value: "body", name: "По описанию" },
      ],
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
  computed: {
    sortedPosts() {
      return [...this.posts].sort((post1, post2) =>
        post1[this.selectedSort]?.localeCompare(post2[this.selectedSort])
      );
    },
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
.app__buttons {
  display: flex;
  justify-content: space-between;
  margin: 15px 0;
}
</style>
