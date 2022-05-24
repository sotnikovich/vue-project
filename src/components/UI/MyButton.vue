<template>
  <button class="button"><slot></slot></button>
</template>

<script>
export default {};
</script>

<style scoped>
.button {
  margin-top: 15px;
  background: none;
  color: teal;
  border: 1px solid teal;
  cursor: pointer;
  padding: 10px 15px;
}
</style>
