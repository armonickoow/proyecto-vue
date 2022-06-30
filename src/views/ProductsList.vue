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
                    
                <v-card
                    class="mx-auto"
                    width="100%"
                    >
                    <v-img
                    class="white--text align-end"
                    height="200px"
                    :src="producto.img"
                    >
                    <v-card-title>{{producto.name}}</v-card-title>
                    </v-img>

                    <v-card-subtitle class="pb-0">Number 10</v-card-subtitle>

                    <v-card-text class="text--primary">
                    <div>{{producto.description}}</div>

                    </v-card-text>

                    <v-card-actions>
                    <v-btn
                    color="#4DB6AC"
                    text
                    >
                    Detalles
                    </v-btn>
                    </v-card-actions>
                </v-card>
                </v-col>
            </v-row>

            <br>

            <h2 class="mt-8 mb-4">plantas de exterior</h2>
            <v-row>
                <v-col
                lg="4" xl="4" md="4" cols="12"
                v-for=" producto in productos.plantasExterior"
                :key="producto.id">
                    
                <v-card
                    class="mx-auto"
                    width="100%"
                    >
                    <v-img
                    class="white--text align-end"
                    height="200px"
                    :src="producto.img"
                    >
                    <v-card-title>{{producto.name}}</v-card-title>
                    </v-img>

                    <v-card-subtitle class="pb-0">Number 10</v-card-subtitle>

                    <v-card-text class="text--primary">
                    <div>{{producto.description}}</div>

                    </v-card-text>

                    <v-card-actions>
                    <v-btn
                    color="#4DB6AC"
                    text
                    >
                    Detalles
                    </v-btn>

                    </v-card-actions>
                </v-card>
                </v-col>
            </v-row>

            <br>

            <h2 class="mt-8 mb-4">Arboles</h2>
            <v-row>
                <v-col
                lg="4" xl="4" md="4" cols="12"
                v-for=" producto in productos.arboles"
                :key="producto.id">
                    
                <v-card
                    class="mx-auto"
                    width="100%"
                    >
                    <v-img
                    class="white--text align-end"
                    height="200px"
                    :src="producto.img"
                    >
                    <v-card-title>{{producto.name}}</v-card-title>
                    </v-img>

                    <v-card-subtitle class="pb-0">Number 10</v-card-subtitle>

                    <v-card-text class="text--primary">
                    <div>{{producto.description}}</div>

                    </v-card-text>

                    <v-card-actions>
                    <v-btn
                    color="#4DB6AC"
                    text
                    >
                    Detalles
                    </v-btn>
                    </v-card-actions>
                </v-card>
                </v-col>
            </v-row>
        </v-container>
    </div>
</template>

<script>
    import NavBar from '../components/NavBar'
    import { mapState } from 'vuex'

    export default{
        components: {
            NavBar
        },
        computed: {
            // aqui llamamos a lo que hicimos en el state del store
            ...mapState(['productos'])
        }
    }
</script>

<style>

</style>