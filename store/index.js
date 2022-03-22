
 export const state = () => ({
    urlImage: '',
    title: '',
    description: '',
    voteAverage: null,

  });
  
  export const mutations = {
    setMovie(state, itemMovie){
      state.urlImage = itemMovie.backdrop_path;
      state.title = itemMovie.title;
      state.description = itemMovie.overview;
      state.voteAverage = itemMovie.vote_average;
    }
  };
  
  export const actions = {
    setMovie(vuexContext, itemMovie){
      vuexContext.commit('setMovie', itemMovie);
    }
  };
  
  export const getters = {
    loadedMovies(state){
      return state.loadedMovies;
    }
  };