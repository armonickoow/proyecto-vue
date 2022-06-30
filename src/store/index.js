import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    productos: {
      plantasInterior: [
        {name: 'filodendro', img: 'https://images.pexels.com/photos/54323/rose-composites-flowers-spring-54323.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1', id: 1, description: 'Aqui va la descripcion de la planta de interior'},
        {name: 'florsita', img: 'https://images.pexels.com/photos/60909/rose-yellow-flower-petals-60909.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1', id: 2, description: 'Aqui va la descripcion de la planta de interior'},
        {name: 'bonita', img: 'https://images.pexels.com/photos/2388568/pexels-photo-2388568.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1', id: 3, description: 'Aqui va la descripcion de la planta de interior'}
      ],
      plantasExterior: [
        {name: 'filomena', img: 'https://images.pexels.com/photos/2567106/pexels-photo-2567106.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1', id: 4, description: 'Aqui va la descripcion de la planta de exterior'},
        {name: 'marandinguana', img: 'https://images.pexels.com/photos/458886/pexels-photo-458886.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1', id: 5, description: 'Aqui va la descripcion de la planta de exterior'},
        {name: 'eclipse', img: 'https://images.pexels.com/photos/1158783/pexels-photo-1158783.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1', id: 6, description: 'Aqui va la descripcion de la planta de exterior'}
      ],
      arboles: [
        {name: 'arbolito', img: 'https://images.pexels.com/photos/53435/tree-oak-landscape-view-53435.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1', id: 7, description: 'Aqui va la descripcion de un tipo de arbol'},
        {name: 'palmera', img: 'https://images.pexels.com/photos/2371936/pexels-photo-2371936.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1', id: 8, description: 'Aqui va la descripcion de un tipo de arbol'},
        {name: 'arbolote', img: 'https://images.pexels.com/photos/38136/pexels-photo-38136.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1', id: 9, description: 'Aqui va la descripcion de un tipo de arbol'}
      ]
    }
  },
  getters: {
  },
  mutations: {
  },
  actions: {
  },
  modules: {
  }
})
