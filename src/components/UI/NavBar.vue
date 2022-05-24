<template lang="">
  <div class="navbar">
    <div @click="$router.push('/')">Vue App</div>
    <div class="navbar__btns">
      <MyButton @click="$router.push('/posts')">Список постов</MyButton>
    </div>
  </div>
</template>
<script>
import MyButton from "./MyButton.vue";
export default {
  components: {
    MyButton,
  },
};
</script>
<style scoped>
.navbar {
  height: 50px;
  background-color: lightgray;
  box-shadow: 2px 2px 4px gray;
  display: flex;
  align-items: center;
  padding: 0 15px;
}
.navbar__btns {
  margin-left: auto;
}
</style>
