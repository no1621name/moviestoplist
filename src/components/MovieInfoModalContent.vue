<template>
  <div class="movie-info-wrap">
    <header class="movie-info-header">
      <h6 class="movie-header-title">Movie view</h6>
      <BIconX class="close-icon" @click="closeModal"/>
    </header>
    <div class="movie-info-content">
      <BRow>
        <BCol sm="4">
          <div class="movie-poster-wrap">
            <div class="movie-poster" :style="posterStyle"></div>
          </div>
        </BCol>
        <BCol sm="8">
          <h3 class="movie-title">{{ movie.Title }}</h3>
          <BFormRating
            class="movie-rating"
            v-model="movie.imdbRating"
            readonly
            show-value
            precision="1"
            stars="10"
            show-value-max
            no-border
          />
          <p class="movie-description">{{ movie.Plot }}</p>
          <div class="mt-3 mb-4">
            <span class="movie-badge">{{ movie.Year || 'no info' }}</span>
            <span class="movie-badge">{{ movie.Runtime || 'no info' }}</span>
            <span class="movie-badge">{{ movie.Genre || 'no info' }}</span>
            <span class="movie-badge">{{ movie.Language || 'no info' }}</span>
          </div>
          <table class="table small">
            <tbody>
              <tr>
                <th>Production</th>
                <td> {{ movie.Production || 'no info' }} </td>
              </tr>
              <tr>
                <th>Country</th>
                <td> {{ movie.Country || 'no info' }} </td>
              </tr>
              <tr>
                <th>Director</th>
                <td> {{ movie.Director || 'no info' }} </td>
              </tr>
              <tr>
                <th>Writer</th>
                <td> {{ movie.Writer || 'no info' }} </td>
              </tr>
              <tr>
                <th>Actors</th>
                <td> {{ movie.Actors || 'no info' }} </td>
              </tr>
              <tr>
                <th>Awards</th>
                <td> {{ movie.Awards || 'no info' }} </td>
              </tr>
            </tbody>
          </table>
        </BCol>
      </BRow>
    </div>
  </div>
</template>

<script>
export default {
  name: 'MovieInfoModalContent',
  data: () => ({
    defaultPosterBg: 'linear-gradient(45deg, rgb(0, 3, 38) 0%, rgb(82, 15, 117) 100%)',
  }),
  props: {
    movie: {
      type: Object,
      required: true,
    },
  },
  computed: {
    posterStyle() {
      return {
        'background-image': this.posterBg,
      };
    },
    posterBg() {
      return this.movie ? `url(${this.movie.Poster})` : this.defaultPosterBg;
    },
  },
  methods: {
    closeModal() {
      this.$emit('closeModal');
    },
  },
};
</script>

<style lang="scss" scoped>
.movie-info-header{
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem;
  background: linear-gradient(45deg, rgb(0, 3, 38) 0%, rgb(82, 15, 117) 100%);
  color: #fff;
  .movie-header-title{
    margin-bottom: 0;
    line-height: 1.5;
    font-size: 1.25rem;
  }
  .close-icon{
    cursor: pointer;
    font-size: 24px;
  }
}

.movie-info-content{
  padding: 1rem;
  background-color: #fff;
  .movie-poster-wrap{
    position: relative;
    padding-bottom: 150%;
    border-radius: 5px;
    overflow: hidden;
    transition: all .2s ease;
    .movie-poster{
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background-position: center center;
      background-size: cover;
    }
  }
  .movie-title{
    font-size: 3.5rem;
    font-weight: 300;
    line-height: 1.2;
  }
  .movie-description{
    font-size: 1.25rem;
    font-weight: 300;
  }
  .movie-badge{
    display: inline-block;
    background-color: green;
    color: #fff;
    border-radius: 5px;
    margin-right: 10px;
    padding: 4px;
  }
}

.movie-rating{
  padding: 0;
  :focus {
    box-shadow: none;
  }
}

.movie-rating ::v-deep .b-rating-star,
.movie-rating ::v-deep .b-rating-value{
  justify-content: start;
  flex-grow: 0 !important;
  font-size: 1.3rem;
  font-weight: 300;
  padding: 0;
}
.movie-rating ::v-deep .b-rating-star + .b-rating-star{
  margin-left: 4px;
}

.movie-rating ::v-deep .b-rating-value{
  margin-left: 10px;
}

.movie-rating ::v-deep .b-rating-star .b-rating-icon{
  color: #ffc107;
}
</style>
