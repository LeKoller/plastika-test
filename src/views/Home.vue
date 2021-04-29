<template>
  <div class="home">
    <Login v-if="!isLogged" />
    <Movies v-else />
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
    const isLogged = computed(() => store.state.isLogged);

    return {
      isLogged,
    };
  },
};
</script>
