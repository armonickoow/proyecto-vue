<template>
  <v-app>
    
    <v-main>
      <router-view/>
    </v-main>
    <footer-comp></footer-comp>
    
  </v-app>
</template>

<script>
import FooterComp from './components/FooterComp'

export default {
  name: 'App',
  components: {
      FooterComp,
    },

  data: () => ({
    
  }),
};
</script>
