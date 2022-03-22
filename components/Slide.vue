<template>
  <div>
    <v-sheet class="mx-auto" elevation="8" dark>
      <v-slide-group
        v-model="model"
        class="pa-4"
        show-arrows
        :class="showCard && 'd-visible'"
      >
        <v-slide-item
          v-for="movie in moviesItems"
          :key="movie.id"
          v-slot="{ active, toggle }"
        >
          <v-card
            :color="'grey lighten-1'"
            style="border: none"
            class="ma-4"
            height="180"
            width="300"
            @mouseenter="toggle(), openCard()"
            @mouseleave="toggle(), openCard()"
          >
            <v-img
              :src="'https://image.tmdb.org/t/p/w500/' + movie.backdrop_path"
              class="img-small"
            >
              <p class="text-image-small">{{ movie.title }}</p>
            </v-img>
            <v-row
              class="fill-height"
              align="center"
              justify="center"
              v-if="active"
            >
              <v-scale-transition>
                <v-card :color="'#262626'" class="ma-4 card-nested-one">
                  <v-img
                    height="250"
                    style="cursor: pointer"
                    :src="
                      'https://image.tmdb.org/t/p/w500/' + movie.backdrop_path
                    "
                    @click="(dialog = true), setDialog(movie)"
                  ></v-img>
                  <v-row>
                    <v-col cols="12" style="padding: 15px">
                      <div style="display: flex">
                        <div>
                          <v-btn
                            class="mx-2"
                            fab
                            x-small
                            color="#383838"
                            @click="like = !like"
                          >
                            <v-icon
                              v-if="like"
                              style="
                                color: #04ac84;
                                background-color: transparent;
                                font-size: 20px;
                              "
                            >
                              mdi-thumb-up
                            </v-icon>
                            <v-icon
                              v-else
                              style="
                                color: #04ac84;
                                background-color: transparent;
                                font-size: 20px;
                              "
                            >
                              mdi-thumb-up-outline
                            </v-icon>
                          </v-btn>
                        </div>
                        <div>
                          <v-btn
                            class="mx-2"
                            fab
                            x-small
                            color="#383838"
                            @click="dislike = !dislike"
                          >
                            <v-icon
                              v-if="dislike"
                              style="
                                color: #04ac84;
                                background-color: transparent;
                                font-size: 20px;
                              "
                            >
                              mdi-thumb-down
                            </v-icon>
                            <v-icon
                              v-else
                              style="
                                color: #04ac84;
                                background-color: transparent;
                                font-size: 20px;
                              "
                            >
                              mdi-thumb-down-outline
                            </v-icon>
                          </v-btn>
                        </div>
                        <div style="margin-left: 63%">
                          <v-btn
                            class="mx-2"
                            fab
                            x-small
                            color="#383838"
                            @click="(dialog = true), setDialog(movie)"
                          >
                            <v-icon
                              style="
                                color: #04ac84;
                                background-color: transparent;
                                font-size: 20px;
                              "
                            >
                              mdi-arrow-down-drop-circle-outline
                            </v-icon>
                          </v-btn>
                        </div>
                      </div>
                    </v-col>
                    <v-col cols="12" style="padding: 15px" class="py-0">
                      <p
                        class="text-image-small ml-2"
                        @click="(dialog = true), setDialog(movie)"
                        style="cursor: pointer"
                      >
                        {{ movie.title }}
                      </p>
                    </v-col>
                    <v-col
                      cols="12"
                      style="cursor: pointer"
                      @click="(dialog = true), setDialog(movie)"
                    >
                      <div
                        style="display: flex; justify-content: space-around"
                        class="py-0"
                      >
                        <p>◦ Emocionante</p>
                        <p>◦ Acción</p>
                        <p>◦ Aventuras</p>
                      </div>
                    </v-col>
                  </v-row>
                </v-card>
              </v-scale-transition>
            </v-row>
          </v-card>
        </v-slide-item>
      </v-slide-group>
    </v-sheet>
    <v-row justify="center" style="heigth: auto; width: auto">
      <v-dialog
        v-model="dialog"
        justify="center"
        scrollable
        max-width="80vw"
        max-heigth="80vh"
      >
        <v-card :color="'#262626'" class="modal-card" height="fit-content">
          <v-img
            :src="
              'https://image.tmdb.org/t/p/w500/' + this.$store.state.urlImage
            "
          ></v-img>
          <v-row class="fill-height" align="center" justify="center">
            <v-col cols="12">
              <v-rating
                class="px-5 pt-2"
                empty-icon="mdi-star-outline"
                full-icon="mdi-star"
                half-icon="mdi-star-half-full"
                hover
                length="5"
                size="30"
                :color="'#04AC84'"
                background-color="#04AC84"
                :value="Number(this.$store.state.voteAverage) / 2"
              ></v-rating>
            </v-col>
            <v-col cols="12">
              <p class="title-dialog">{{ this.$store.state.title }}</p>
              <p class="text-dialog">{{ this.$store.state.description }}</p>
            </v-col>
          </v-row>
        </v-card>
      </v-dialog>
    </v-row>
  </div>
</template>

<script>
import axios from "axios";
export default {
  props: ["listId"],
  created() {
    this.getMovies();
  },
  data: () => ({
    model: null,
    showCard: false,
    dialog: false,
    moviesItems: [],
    dislike: false,
    like: false,
  }),
  methods: {
    openCard() {
      this.showCard = !this.showCard;
    },
    getMovies() {
      let api_key = "82f9458c91622e439574d570997b3a5f";
      axios
        .get(
          `https://api.themoviedb.org/3/list/${this.listId}?api_key=${api_key}`
        )
        .then((resp) => {
          this.moviesItems = resp.data.items;
        })
        .catch((err) => {
          console.error(err);
        });
    },
    setDialog(val) {
      this.$store.dispatch("setMovie", val);
    },
  },
  computed: {
    showInside() {
      if (this.showCard) {
        return {
          overflow: "visible !important",
        };
      } else {
        return "";
      }
    },
  },
};
</script>
