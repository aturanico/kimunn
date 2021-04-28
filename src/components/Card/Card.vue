<template>
<div class="card">
  <v-card
    class="mx-auto"
    max-width="1000"
  >
   
    <v-container fluid>
      <v-row dense>
        <v-col
          v-for="card in cards"
          :key="card.title"
          cols="12"
          sm="6"
          md="4"
          class="card"
        >
          <v-card >
            <v-img
              @click.stop="cards.producto = true"
              :src="card.src"
              class="white--text align-end"
              gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)"
              height="200px"
            >
              <v-card-title v-text="card.title"></v-card-title>
            </v-img>

            <v-card-actions>
              <v-spacer></v-spacer>

              <v-btn icon>
                <v-icon>mdi-heart</v-icon>
              </v-btn>

              <v-btn icon>
                <v-icon>mdi-cart-arrow-down</v-icon>
              </v-btn>
            </v-card-actions>
          </v-card>
           
        </v-col>
        <DialogProducto v-if="cards[0].producto"/>
      </v-row>
    </v-container>
  </v-card>

  
</div>

</template>

<script>
export default {
     data: () => ({
      cards: [
        { 
          title: 'Pre-fab homes', 
          src: 'https://cdn.vuetifyjs.com/images/cards/house.jpg', 
          flex: 6,
          producto: false
        },
        { 
          title: 'Pre-fab homes', 
          src: 'https://cdn.vuetifyjs.com/images/cards/house.jpg', 
          flex: 6,
          producto: false
        },
        { 
          title: 'Favorite road trips', 
          src: 'https://cdn.vuetifyjs.com/images/cards/road.jpg', 
          flex: 6,
          producto: false
        },
        { 
          title: 'Best airlines', 
          src: 'https://cdn.vuetifyjs.com/images/cards/plane.jpg', 
          flex: 6,
          producto: false
        },
      ],
      
      

    }),

    components: {
      'DialogProducto': require('@/components/Dialogs/DialogProducto.vue').default
    }
}
</script>

<style scope>
    .card{
        cursor: pointer;
        transition: all 0.2s linear;

    }
    .card :hover{
        box-shadow: 0 3px 12px 0 rgba(0,0,0,0.2), 0 1px 15px 0 rgba(0,0,0,0.2);
        transform: scale(1.02);
        z-index:99
    }


</style>