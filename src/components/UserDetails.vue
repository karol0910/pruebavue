<template>
    <div>
      <h1>Detalles del Usuario</h1>
      <LoaderSpinner v-if="isLoading" />
      <div v-else>
        <h2>{{ userDetails.first_name }} {{ userDetails.last_name }}</h2>
        <p>Email: {{ userDetails.email }}</p>
        <img :src="userDetails.avatar" :alt="userDetails.first_name" />
      </div>

      <router-link to="/">Volver a la lista de usuarios</router-link>
    </div>
  </template>
  
  <script>
import LoaderSpinner from './LoaderSpinner.vue';

  export default {
    props: {
        id: String,
    },
    data() {
        return {
            user: null,
            isLoading: false,
            loaderDuration: 5000,
            userDetails: [],
            localId: this.$route.params.id,
        };
    },
    mounted() {
        this.fetchUserDetails(); // Llamar a la función para obtener los detalles del usuario al cargar la página
    },
    methods: {
        async fetchUserDetails() {
            this.isLoading = true; // Mostrar el spinner al comenzar la carga
            try {
                const response = await fetch(`https://reqres.in/api/users/${this.id}`);
                const data = await response.json();
                if (response.ok) {
                    this.userDetails = data.data; // Actualizar la variable reactiva con los detalles del usuario
                }
                else {
                    console.error('Error al obtener los detalles del usuario');
                }
            }
            catch (error) {
                console.error('Error al realizar la solicitud:', error);
            }  finally {
        // Utilizar setTimeout para ocultar el loader después de la duración deseada
        setTimeout(() => {
          this.isLoading = false;
        }, this.loaderDuration);
      }
        },
    },
    components: { LoaderSpinner }
};
  </script>
  