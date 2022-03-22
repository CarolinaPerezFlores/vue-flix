<template>
  <div style="background-color: black; heigth: auto; padding-bottom: 200px;">
    <img class="cover-image" src="~assets/images/fantastic.jpg" />
    <Slide v-for="list in listSort" :key="list" :listId="list" />
  </div>
</template>

<script>
export default {
  components: {},
  created() {
    this.sortMovies();
  },
  computed: {},
  data: () => ({
    listSort: [],
  }),
  methods: {
    sortMovies() {
      for (let index = 0; index < 11; index++) {
        let minNumber = 1;
        let maxNumber = 80;
        let number = Math.floor(
          Math.random() * (maxNumber - minNumber) + minNumber
        );

        if (!this.listSort.includes(number)) {
          this.listSort.push(number);
        }
      }
    },
  },
};
</script>

<style>
</style>