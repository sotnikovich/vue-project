<template>
  <div class="popup" v-if="show" @click="closePopup">
    <div @click.stop class="popup__content">
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: "my-popup",
  props: {
    show: {
      type: Boolean,
      default: false,
    },
  },
  methods: {
    closePopup() {
      this.$emit("update:show", false);
    },
  },
};
</script>

<style scoped>
.popup {
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background: rgba(0, 0, 0, 0.5);
  position: fixed;
  display: flex;
}
.popup__content {
  margin: auto;
  background: white;
  border-radius: 12px;
  min-height: 50px;
  min-width: 300px;
  padding: 20px;
}
</style>
