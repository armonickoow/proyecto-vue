<template>
    <div>
        <nav-bar></nav-bar>
        <h1 class="text-center mt-4">Productos</h1>
        <v-container>
            <h2 class="mt-8 mb-4">plantas de interior</h2>
            <v-row>
                <v-col
                lg="4" xl="4" md="4" cols="12"
                v-for=" producto in productos.plantasInterior"
                :key="producto.id">
                <!-- esta etiqueta llama al componente productos desde props -->
                <productos-Temp :producto="producto"></productos-Temp>
                </v-col>
            </v-row>

            <br>

            <h2 class="mt-8 mb-4">plantas de exterior</h2>
            <v-row>
                <v-col
                lg="4" xl="4" md="4" cols="12"
                v-for=" producto in productos.plantasExterior"
                :key="producto.id">
                <productos-Temp :producto="producto"></productos-Temp>
                </v-col>
            </v-row>

            <br>

            <h2 class="mt-8 mb-4">Arboles</h2>
            <v-row>
                <v-col
                lg="4" xl="4" md="4" cols="12"
                v-for=" producto in productos.arboles"
                :key="producto.id">
                    
                <productos-Temp :producto="producto"></productos-Temp>
                
                </v-col>
            </v-row>
        </v-container>
    </div>
</template>

<script>
    import NavBar from '../components/NavBar'
        import ProductosTemp from '../components/ProductosTemp'
        import { mapState } from 'vuex'

    export default{
        components: {
            NavBar,
            ProductosTemp
        },
        computed: {
            // aqui llamamos a lo que hicimos en el state del store
            ...mapState(['productos'])
        }
    }
</script>

<style>

</style>