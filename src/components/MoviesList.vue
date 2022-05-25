<template>
  <BContainer>
    <h3 class="lsit-title">{{listTitle}}</h3>
    <BRow>
      <template v-if="idExist">
        <BCol
          v-for="(movie, key) in list"
          :key="key"
          cols="3"
        >
          <!-- eslint-disable-next-line -->
          <MovieItem
            :movie="movie"
            @mouseover.native="onMouseOver(movie.Poster)"
            @removeItem="onRemoveItem"
            @showModal="onShowMovieInfo"
          />
        </BCol>
      </template>
      <template v-else>
        <div>Empty list</div>
      </template>
    </BRow>
    <BModal
      body-class="movie-modal-body"
      :id="movieInfoModalId"
      size="xl"
      hide-footer
      hide-header
    >
      <MovieInfoModalContent :movie="selectedMovie" @closeModal="onCloseModal"/>
    </BModal>
  </BContainer>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';
import MovieItem from './MovieItem.vue';
import MovieInfoModalContent from './MovieInfoModalContent.vue';

export default {
  name: 'MoviesList',
  components: {
    MovieItem,
    MovieInfoModalContent,
  },
  data: () => ({
    movieInfoModalId: 'movie-info',
    selectedMovieId: '',
  }),
  props: {
    list: {
      type: Object,
      default: () => ({}),
    },
  },
  computed: {
    ...mapGetters('movies', ['isSearch']),
    idExist() {
      return Boolean(Object.keys(this.list).length);
    },
    listTitle() {
      return this.isSearch ? 'Search result' : 'IMDB Top 250';
    },
    selectedMovie() {
      return this.selectedMovieId ? this.list[this.selectedMovieId] : null;
    },
  },
  methods: {
    ...mapActions('movies', ['removeMovie']),
    ...mapActions(['showNotify']),
    onMouseOver(poster) {
      this.$emit('changePoster', poster);
    },
    async onRemoveItem({ id, title }) {
      const isConfirmed = await this.$bvModal.msgBoxConfirm(
        `Are you sure delete ${title}?`,
      );
      if (isConfirmed) {
        try {
          this.removeMovie(id);
          this.showNotify({
            title: 'Success',
            msg: 'Movie deleted success!',
            variant: 'success',
            isVisible: true,
          });
        } catch (err) {
          this.showNotify({
            title: 'Error',
            msg: `Something went wrong... Try this late... (${err.message})`,
            variant: 'danger',
            isVisible: true,
          });
        }
      }
    },
    onShowMovieInfo(id) {
      this.selectedMovieId = id;
      this.$bvModal.show(this.movieInfoModalId);
    },
    onCloseModal() {
      this.selectedMovieId = null;
      this.$bvModal.hide(this.movieInfoModalId);
    },
  },
};
</script>

<style lang="scss" scoped>
.lsit-title{
  font-size: 50px;
  margin-bottom: 30px;
  color: #fff;
}
.controls-row{
  margin:200px 0;
  & > .col {
    border: 1px solid #000;
  }
}
</style>

<style>
.movie-modal-body {
  padding: 0 !important;
}
</style>
