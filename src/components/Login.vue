<template>
  <div id="container">
    <h1 id="login_title">Login</h1>
    <form @submit.prevent="performLogin" autocomplete="off">
      <input
        type="text"
        placeholder="EMAIL"
        name="form_input_email"
        autocomplete="off"
        v-model="state.email"
      />
      <input
        type="password"
        placeholder="SENHA"
        name="form_input_password"
        autocomplete="off"
        v-model="state.password"
      />
      <button>
        <span>ACESSAR</span>
        <img
          src="../assets/right.svg"
          alt="Icone de seta para direita"
          id="right_icon"
        />
      </button>
    </form>
    <div v-if="state.loginFailed">
      <span class="error_message animate__animated animate__fadeIn"
        >o login falhou, tente novamente</span
      >
    </div>
  </div>
</template>

<script>
import { reactive } from "vue";
import store from "../store";

export default {
  name: "Login",
  setup() {
    const state = reactive({
      email: "",
      password: "",
      loginFailed: false,
    });

    const loginFailed = () => {
      state.loginFailed = true;
    };

    function performLogin() {
      store.dispatch("auth/signIn", {
        email: state.email,
        password: state.password,
      });

      setTimeout(() => {
        loginFailed();
      }, 900);
    }

    return {
      performLogin,
      state,
    };
  },
};
</script>

<style lang="scss" scoped>
#container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  width: 100%;
  height: 100%;

  .error_message {
    color: rgb(226, 100, 100);
    position: relative;
    top: 200px;
    font-size: large;
  }

  #login_title {
    z-index: 12;
    color: #fff;
    font-weight: bold;
    position: relative;
    top: 8vh;
    letter-spacing: 0px;

    font-size: 36px;
    margin: 10vh 0 10vh 0;

    @media (max-width: 500px) {
      font-size: 28px;
      margin: 12vh 0 2vh 0;
    }
  }

  form {
    z-index: 10;
    display: flex;
    flex-direction: column;
    position: relative;
    top: 10vh;

    input {
      background-color: transparent;
      outline: none;
      border: none;
      border-bottom: 1px solid #8c1ac1;
      color: #ededed;
      width: 504px;
      height: 56px;
      margin: 8px;
      transition: all 0.25s ease;
      padding: 0 16px;

      &:hover {
        opacity: 0.5;
      }

      @media (max-width: 700px) {
        width: 80vw;
      }
    }

    button {
      display: flex;
      justify-content: space-between;
      align-items: center;
      outline: none;
      background-color: #8c1ac1;
      border: 1px solid #641289;
      border-radius: 8px;
      padding: 14px;
      position: relative;
      top: 5vh;

      width: 266px;
      height: 56px;
      text-align: left;
      margin-left: auto;
      margin-right: auto;

      /* cursor: pointer; */
      transition: all 0.25s ease;

      &:hover {
        background-color: #a55fc7;
      }

      &:active {
        transform: scale(0.96, 0.96);
      }

      @media (max-width: 414px) {
        width: 80vw;
      }

      span {
        font: normal normal bold 19px "Roboto";
        letter-spacing: 0px;
        color: #ffffff;
        text-transform: uppercase;
      }

      #right_icon {
        max-height: 30px;
      }
    }
  }
}
</style>
