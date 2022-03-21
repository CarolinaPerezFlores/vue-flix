<template>
    <div>
        <v-sheet
        class="mx-auto"
        elevation="8"
        dark
        >
            <v-slide-group
            v-model="model"
            class="pa-4"
            active-class="success"
            show-arrows
            :class = "(showCard)&&'test-c'"
            >
            <v-slide-item
                v-for="n in 15"
                :key="n"
                v-slot="{ active, toggle }"
            >
            
            <v-hover v-slot:default="{ hover }">
                <v-card
                :color="'grey lighten-1'"
                class="ma-4"
                height="180"
                width="300"
                @mouseenter="toggle(), test()"
                @mouseleave="toggle(), test()"
                >
                <v-img
                    src="https://cdn.vuetifyjs.com/images/cards/cooking.png"
                    style="max-height: -webkit-fill-available;"
                    >
                </v-img>
                <v-row
                    class="fill-height"
                    align="center"
                    justify="center"
                >
                
                    <v-scale-transition>
                     <v-card
                        v-if="active"
                        :color="'blue'"
                        class="ma-4 card-nested-one"
                        @click="dialog = true"
                        >
                        <v-img
                            height="250"
                            src="https://cdn.vuetifyjs.com/images/cards/cooking.png"
                            ></v-img>

                            


                        </v-card>
                    </v-scale-transition>
                </v-row>
                </v-card>
                </v-hover>
            </v-slide-item>
            </v-slide-group>
    </v-sheet>
    <v-row
            justify="center"
            style="heigth:auto; width: auto;"
        >
        <v-dialog
            v-model="dialog"
            justify="center"
            scrollable
            max-width="80vw"
            max-heigth = "80vh"
            >
                <v-card
            :color="'pink'"
            class="modal-card"
            height="230vh"
            >
            <v-img
                src="https://cdn.vuetifyjs.com/images/cards/cooking.png"
                ></v-img>
                <v-row
                    class="fill-height"
                    align="center"
                    justify="center"
                >
                hello
                </v-row>
            </v-card>
            </v-dialog>
        </v-row>
    </div>
</template>

<script>
export default {
    data: () => ({
      model: null,
      showCard: false,
      dialog: false,
    }),
    methods:{
        test(){
            console.log('hey!');
            this.showCard = !this.showCard;
        }
    },
    computed: {
    showInside() {
    if (this.showCard) {
       return {
         overflow: 'visible !important',
         };
        } else {
        return '';
        }
    }
    }
}
</script>
