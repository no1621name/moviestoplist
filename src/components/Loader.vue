<template>
  <div class="loading-wrap" v-if="isShowLoader">
    <BSpinner
      style="
        width: 75px;
        height: 75px;"
      variant="light"
      type="grow"
      label=" "
    ></BSpinner>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  name: 'Loader',
  computed: {
    ...mapGetters(['isShowLoader']),
  },
};
</script>

<style lang="scss" scoped>
.loading-wrap{
  position: fixed;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  background-color: rgba(0, 0, 0, .7);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 999;
}
</style>
