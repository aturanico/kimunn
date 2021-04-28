<template>
  <v-carousel cycle show-arrows-on-hover>
    <v-carousel-item
      v-for="(item,i) in items"
      :key="i"
      :src="item.src"
    >
    
        <v-row
          class="fill-height "
          align="center"
          justify="center"
        >
          <div class="display-1 fondo">
            {{ item.text }}
          </div>
        </v-row>
    
    
    </v-carousel-item>
  </v-carousel>
</template>

<script>
  export default {
    data () {
      return {
        items: [
          {
            src: 'logoUsar.png',
            text: 'Bienvenidos a kimunn'
          },
          {
            src: 'https://cdn.vuetifyjs.com/images/carousel/sky.jpg',
            text: 'Nuestros productos'
          },
          {
            src: 'https://cdn.vuetifyjs.com/images/carousel/bird.jpg',
            text: 'los mejores precios'
          },
          {
            src: 'https://cdn.vuetifyjs.com/images/carousel/planet.jpg',
            text: 'todo lo que buscas aqui en kimunn'
          },
        ],
      }
    },
  }
</script>

<style scoped>
    .fondo {
         background: rgba(250, 55, 55, 0.6)
    }
       



</style>