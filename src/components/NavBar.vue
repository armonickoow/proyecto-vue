<template>
  <v-container>
    <v-app-bar
      app
      color="#4DB6AC"
      dark
    >
      <div class="d-flex align-center">
        <v-img
          alt="Vuetify Logo"
          class="shrink mr-2"
          contain
          src="https://cdn.vuetifyjs.com/images/logos/vuetify-logo-dark.png"
          transition="scale-transition"
          width="40"
        />

        <v-img
          alt="Vuetify Name"
          class="shrink mt-1 hidden-sm-and-down"
          contain
          min-width="100"
          src="https://cdn.vuetifyjs.com/images/logos/vuetify-name-dark.png"
          width="100"
        />
      </div>

      <v-spacer></v-spacer>

      <v-btn to="/" text><v-icon>mdi-home-floor-0</v-icon> <span class="mr-2">Home</span></v-btn>
      <v-btn to="/products" text><v-icon>mdi-flower-outline</v-icon> <span class="mr-2">Products</span></v-btn>
      <v-btn to="/contact" text><v-icon>mdi-contacts</v-icon> <span class="mr-2">Contact</span></v-btn>
    </v-app-bar>
  </v-container>
</template>

<script>
  export default {
    name: 'navBar',

    data: () => ({
      
    }),
  }
</script>
