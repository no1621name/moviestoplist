<template>
  <div id="app">
    <Notification />
    <Loader />
    <PosterBg :poster="posterBg"/>
    <Header/>
    <MoviesList :list="moviesList" @changePoster="onChangePoster"/>
    <MoviesPagination
      :current-page="currentPage"
      :total="moviesLength"
      :per-page="moviesPerPage"
      @pageChanged="onPageChanged"/>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';
import Header from './components/Header.vue';
import MoviesList from './components/MoviesList.vue';
import PosterBg from './components/PosterBg.vue';
import MoviesPagination from './components/MoviesPagination.vue';
import Loader from './components/Loader.vue';
import Notification from './components/Notification.vue';

export default {
  name: 'App',
  components: {
    MoviesList,
    PosterBg,
    MoviesPagination,
    Loader,
    Header,
    Notification,
  },
  data: () => ({
    posterBg: '',
  }),
  computed: {
    ...mapGetters('movies', [
      'moviesList',
      'currentPage',
      'moviesPerPage',
      'moviesLength',
    ]),
  },
  watch: {
    '$route.query': {
      handler: 'onPageQueryChanged',
      immediate: true,
      deep: true,
    },
  },
  methods: {
    ...mapActions('movies', ['changeCurrentPage']),
    onPageQueryChanged({ page = 1 }) {
      this.changeCurrentPage(Number(page));
    },
    onChangePoster(poster) {
      this.posterBg = poster;
    },
    onPageChanged(page) {
      this.$router.push({ query: { page } });
    },
  },
};
</script>

<style lang="scss">
#app {
  font-family: Arial, Helvetica, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  position: relative;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
}
</style>
