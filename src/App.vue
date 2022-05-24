<template>
  <div class="app">
    <h1>Страница с постами</h1>
    <MyButton @click="showPopup" style="margin: 15px 0">Создать пост</MyButton>
    <MyPopup v-model:show="popupVisible">
      <PostForm @create="createPost" />
    </MyPopup>
    <PostList :posts="posts" @remove="removePost" />
  </div>
</template>

<script>
import PostForm from "./components/PostForm.vue";
import PostList from "./components/PostList.vue";
import MyPopup from "./components/UI/MyPopup.vue";
import MyButton from "./components/UI/MyButton.vue";

export default {
  components: {
    PostList,
    PostForm,
    MyPopup,
    MyButton,
  },
  data() {
    return {
      posts: [
        { id: 1, title: "Javascript", body: "Описание" },
        { id: 2, title: "Javascript 2", body: "Описание" },
        { id: 3, title: "Javascript 3", body: "Описание" },
      ],
      popupVisible: false,
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
