<template>
  <div class="post">
    <div>
      <div>{{ post.id }}</div>
      <div><strong>Название:</strong> {{ post.title }}</div>
      <div class="post__body"><strong>Описание:</strong> {{ post.body }}</div>
    </div>
    <div class="post__buttons">
      <MyButton @click="$router.push(`/posts/${post.id}`)">Открыть</MyButton>
      <MyButton @click="$emit('remove', post)">Удалить</MyButton>
    </div>
  </div>
</template>

<script>
import MyButton from "./UI/MyButton.vue";
export default {
  props: {
    post: {
      type: Object,
      required: true,
    },
  },
  components: { MyButton },
};
</script>

<style scoped>
.post {
  padding: 15px;
  border: 2px solid teal;
  margin-top: 15px;
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.post__body {
  max-width: 730px;
}
.post__buttons {
  display: flex;
}
</style>
