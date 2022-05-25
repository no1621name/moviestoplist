<template>
  <div class="poster-page-bg" :style="posterStyle"></div>
</template>

<script>
export default {
  name: 'PosterBg',
  data: () => ({
    defaultPosterBg: 'linear-gradient(45deg, rgb(0, 3, 38) 0%, rgb(82, 15, 117) 100%)',
  }),
  props: {
    poster: {
      type: String,
      default: '',
    },
  },
  computed: {
    posterStyle() {
      return {
        'background-image': this.posterBg,
      };
    },
    posterBg() {
      return this.poster ? `url(${this.poster})` : this.defaultPosterBg;
    },
  },
};
</script>

<style lang="scss" scoped>
.poster-page-bg{
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: -1;
  background-size: cover;
  background-position: center;
  transition: all .2s ease;
  &::before{
    position: absolute;
    content: '';
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    opacity: .7;
    background-image: linear-gradient(
      45deg,
      rgb(0, 3, 38) 0%,
      rgb(82, 15, 117) 100%)
    ;
  }
}
</style>
