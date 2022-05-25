<template>
  <div class="movies-pagnation d-flex justify-content-center">
    <BPagination
      v-model="currentPageModel"
      :per-page="perPage"
      :total-rows="total"
      prev-text="Prev"
      next-text="Next"
    />
  </div>
</template>

<script>
export default {
  name: 'MoviesPagination',
  props: {
    currentPage: {
      type: Number,
      default: 1,
    },
    total: {
      type: Number,
      default: 1,
    },
    perPage: {
      type: Number,
      default: 1,
    },
  },
  computed: {
    currentPageModel: {
      get() {
        return this.currentPage;
      },
      set(value) {
        this.$emit('pageChanged', value);
      },
    },
  },
};
</script>

<style lang="scss" scoped>
.movies-pagnation{
  margin-top: auto;
}
.movies-pagnation ::v-deep .pagination .page-item {
  &.active{
    .page-link{
      border-color: #fff;
      background-color: #fff;
      color: #000;
    }
  }
  &.disabled{
    color: lightgray;
  }
  .page-link{
    background-color: transparent;
    font-style: 12px;
    color: #fff;
    box-shadow: none;
  }
}
</style>
