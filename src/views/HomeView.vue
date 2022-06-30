<template>
  <div>
    <v-row>
        <v-col cols="12">
          <banner-comp></banner-comp>
          <nav-bar></nav-bar>
        </v-col>
    </v-row>
    
    
    <v-row justify="center" class="mt-2">
      <v-col cols="11">
        <h1 class="text-center mb-5">Nuestros productos</h1>        
        <v-row>
          <v-col
          lg="2" xl="2" md="6" cols="12" v-for=" producto in productos.plantasInterior" :key="producto.id">
            <v-card-subtitle>Interior</v-card-subtitle>
            <productos-Temp :producto="producto"></productos-Temp>
          </v-col>
          
          <v-col
          lg="2" xl="2" md="6" cols="12" v-for=" producto in productos.plantasExterior" :key="producto.id">
            <v-card-subtitle>Exterior</v-card-subtitle>
            <productos-Temp :producto="producto"></productos-Temp>
          </v-col>
        </v-row>
          
        <v-row>
          <v-col
            lg="4" xl="4" md="8" cols="12" class="mb-8" v-for=" producto in productos.arboles" :key="producto.id">
              <v-card-subtitle>Arboles</v-card-subtitle>
              <productos-Temp :producto="producto"></productos-Temp>
          </v-col>
        </v-row>
      </v-col>
    </v-row>
  </div>
</template>

<script>
  import NavBar from '../components/NavBar'
  import ProductosTemp from '../components/ProductosTemp'
  import BannerComp from '../components/BannerComp'
  import { mapState } from 'vuex'

  export default {
    name: 'HomeView',

    components: {
    NavBar,
    ProductosTemp,
    BannerComp
    },
    computed: {
      ...mapState(['productos'])
    }
  }
</script>
