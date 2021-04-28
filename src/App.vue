<template>
  <v-app id="inspire">
   
   <v-navigation-drawer
     v-model="drawer"
      app
      dark
    >
      <v-list-item>
        <v-list-item-content>
          <v-list-item-title class="title">
            Kimunn
          </v-list-item-title>
          <v-list-item-subtitle>
            trabajo
          </v-list-item-subtitle>
        </v-list-item-content>
      </v-list-item>

      <v-divider></v-divider>

      <v-list
        dense
        nav
      >
        <v-list-item
          v-for="item in items"
          :key="item.title"
          :to="item.to"
          link
        >
          <v-list-item-icon>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-icon>

          <v-list-item-content>
            <v-list-item-title>{{ item.title }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>


  <v-app-bar app flat 
      color="#43a047"
      dark
      shrink-on-scroll
      prominent
      src="https://picsum.photos/1920/1080?random"
      fade-img-on-scroll
      scroll-target="#scrolling-techniques-5"
      scroll-threshold="500"
  >
    <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>
    <v-toolbar-title class="text--white">Kimunn</v-toolbar-title>
      
  </v-app-bar>

    <v-main>
      <router-view></router-view>  
    </v-main>
 </v-app>
</template>

<script>
  export default {
    data: () => ({ 
      drawer: null,
      items: [
          { title: 'Dashboard', icon: 'mdi-view-dashboard', to:'/' },
          { title: 'Galeria', icon: 'mdi-image', to:'/galeria' },
          { title: 'Preguntas', icon: 'mdi-help-box', to:'/preguntas' },
        ],    
      
    })
  }
</script>
