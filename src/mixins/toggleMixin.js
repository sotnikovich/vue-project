export default {
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
  mounted() {},
};
