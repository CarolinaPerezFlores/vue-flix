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
                @click="toggle(), test()"
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
                    <!-- <v-icon
                        v-if="active"
                        color="white"
                        size="548"
                        v-text="'mdi-close-circle-outline'"
                    ></v-icon> -->
                     <v-card
                        v-if="active"
                        :color="'blue'"
                        class="ma-4 card-nested-one"
                        height="400"
                        width="600"
                        @click="toggle(), test()"
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
    </div>
</template>

<script>
export default {
    data: () => ({
      model: null,
    }),
    methods:{
        test(){
            console.log('hey!');
        }
    }
}
</script>
