<template>
    <v-carousel cycle height="400" hide-delimiter-background show-arrows-on-hover>
        <v-carousel-item v-for="(banner, i) in banners" :key="i">
            <v-img height="100%" :src="banner.img">
                <v-row class="fill-height" align="center" justify="center">
                    <div class="text-h2 white--text">
                        <strong>{{ banner.title }}</strong>
                    </div>
                </v-row>
            </v-img>
        </v-carousel-item>
    </v-carousel>
</template>

<script>

    export default {
        data () {
        return{ 
            banners:[  
                {img: 'https://images.pexels.com/photos/11910935/pexels-photo-11910935.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1', title: '¡Oportunidad Unica!'},
                {img: 'https://images.pexels.com/photos/4913376/pexels-photo-4913376.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1', title: 'Arreglos florales'},
                {img: 'https://images.pexels.com/photos/5414058/pexels-photo-5414058.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1', title: '50% de descuento en Arboles'}

                
                ]
            }
        },
    }
</script>