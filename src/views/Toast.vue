<template>
  <div class="view-toast">
    <div @click="showToast">打开浮层</div>
    <div @click="showErrorToast">打开失败浮层</div>
    <div @click="showSuccessError">打开成功浮层</div>
  </div>
</template>

<script>
export default {
  name: 'view-toast',
  methods: {
    showToast() {
      this.$toast({
        duration: 2000,
        content: 'test'
      });
    },
    showErrorToast() {
      this.$toast.error({
        content: '失败了',
      });
    },
    showSuccessError() {
      this.$toast.success({
        content: '成功了',
      });
    },
  },

}
</script>
