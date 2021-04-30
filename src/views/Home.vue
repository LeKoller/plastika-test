<template>
  <div class="home">
    <Login v-if="!isLogged" class="animate__animated animate__fadeIn" />
    <Movies v-else class="animate__animated animate__fadeIn" />
  </div>
</template>

<script>
import store from "../store";
import { computed } from "vue";
import Login from "../components/Login";
import Movies from "../components/Movies";

export default {
  name: "Home",
  components: {
    Login,
    Movies,
  },
  setup() {
    const isLogged = computed(() => store.state.auth.user !== null);

    return {
      isLogged,
    };
  },
};
</script>
