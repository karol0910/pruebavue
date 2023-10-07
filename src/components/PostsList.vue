<template>
  <div >
    <h1 class="title1">Lista de Usuarios</h1>
    <ul class="list">
      <LoaderSpinner v-if="isLoading" />
      <li v-for="user in users" :key="user.id">
        <router-link :to="'/UserDetails/' + user.id"> {{user.first_name }} {{ user.last_name }}</router-link>
      </li>
    </ul>
    <router-view></router-view> 
  </div>
</template>

<script>
import LoaderSpinner from './LoaderSpinner.vue';
import  {useUserStore} from '../store/useStore';

export default {
    data() {
        const userStore = useUserStore();
        return {
            users: [],
            isLoading: false,
            userList: userStore.userList,
        };
    },
    mounted() {
        this.fetchUsers(); // Llamar a la función para obtener los usuarios al cargar el componente
    },
    methods: {
        async fetchUsers() {
            this.isLoading = true;
            try {
                const response = await fetch('https://reqres.in/api/users');
                const data = await response.json();
                if (response.ok) {
                    this.users = data.data; // Actualizar la variable reactiva con los datos de los usuarios
                } else {
                    console.error('Error al obtener los datos de los usuarios');
                }
            } catch (error) {
                console.error('Error al realizar la solicitud:', error);
            } finally {
                this.isLoading = false; // Ocultar el spinner cuando la carga haya terminado
            }
        },
    },
    components: { LoaderSpinner }
};
</script>
