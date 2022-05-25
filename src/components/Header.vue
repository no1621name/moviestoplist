<template>
  <header class="header">
    <BNavbar calss="navbar" type="dark" variant="dark">
      <BContainer>
        <BNavbarBrand href="#">MovieBD</BNavbarBrand>
        <BNavForm class="navbar-form">
          <BFormInput
            v-model="searchValue"
            debounce="500"
            class="search-input"
            placeholder="Search"
          ></BFormInput>
        </BNavForm>
      </BContainer>
    </BNavbar>
  </header>
</template>

<script>
import { mapActions } from 'vuex';

export default {
  name: 'Header',
  data: () => ({
    searchValue: '',
  }),
  watch: {
    searchValue: 'onSearchValueChanged',
  },
  methods: {
    ...mapActions('movies', [
      'searchMovies',
      'fetchMovies',
      'toggleSearchState',
    ]),
    onSearchValueChanged(value) {
      if (value) {
        this.toggleSearchState(true);
        this.searchMovies(value);
      } else {
        this.toggleSearchState(false);
        this.fetchMovies();
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.header{
  margin-bottom: 30px;
}
.navbar{
  background-color: rgba(0, 0, 0, .7) !important;
}
.search-input{
  color: #fff;
  background: rgba(255, 255, 255, .1);
  border-color: rgba(0, 0, 0, .6);
  &:focus{
    color: #fff;
    box-shadow: none;
    background: rgba(255, 255, 255, .2);
    border-color: rgba(0, 0, 0, .6);
  }
}
.navbar-form{
  display: flex;
}
</style>
