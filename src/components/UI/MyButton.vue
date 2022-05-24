<template>
  <button class="button"><slot></slot></button>
</template>

<script>
export default {
  name: "my-button",
};
</script>

<style scoped>
.button {
  background: none;
  color: teal;
  border: 1px solid teal;
  cursor: pointer;
  padding: 10px 15px;
}
</style>
