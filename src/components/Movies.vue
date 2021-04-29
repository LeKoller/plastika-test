<template>
  <div id="container">
    <div id="vertical_line" />
    <div class="card" v-for="movie in moviesList" :key="movie">
      <img :src="movie.picture" alt="Movie banner." class="movie_picture" />
      <div class="movie_data">
        <div class="title_and_grade">
          <h1 class="title">{{ movie.title }}</h1>
          <div class="grade">{{ movie.grade }}</div>
        </div>
        <p>{{ movie.synopses }}</p>
        <h4>{{ movie.category }}</h4>
      </div>
      <button>
        <span>BUSCAR PLATAFORMA</span>
        <img
          src="../assets/right.svg"
          alt="Icone de seta para direita"
          id="right_icon"
        />
      </button>
    </div>
    <footer>
      <span>Filtre por qualificação do portal</span>
      <div class="buttons_case">
        <button>
          <span>ABAIXO DA MÉDIA</span>
          <img
            src="../assets/right.svg"
            alt="Icone de seta para direita"
            id="right_icon"
          />
        </button>
        <button>
          <span>ACIMA DA MÉDIA</span>
          <img
            src="../assets/right.svg"
            alt="Icone de seta para direita"
            id="right_icon"
          />
        </button>
      </div>
    </footer>
  </div>
</template>

<script lang="ts">
import { computed, onMounted } from "vue";
import store from "../store";

export default {
  name: "Movies",
  setup() {
    const moviesList = computed(() => store.state.moviesList);

    onMounted(() => {
      const containerHeight = document.getElementById("container").style.height;
      const verticalLine = document.getElementById("vertical_line");
      verticalLine.style.height = containerHeight;
    });

    return {
      moviesList,
    };
  },
};
</script>

<style lang="scss" scoped>
#container {
  z-index: 0;
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
  max-width: 1400px;
  margin: 6vh auto;

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
    top: 16px;

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
      width: 100%;
    }

    span {
      font: normal normal bold 16px "Roboto";
      letter-spacing: 0px;
      color: #ffffff;
      text-transform: uppercase;

      @media (max-width: 414px) {
        font-size: 14px;
      }
    }

    #right_icon {
      max-height: 30px;
    }
  }

  footer {
    z-index: 10;
    width: 100%;
    height: 400px;
    background-color: #47275a;
    position: relative;
    top: 6vh;
    margin-top: 200px;

    span {
      text-align: center;
      font: normal normal bold 36px Roboto;
      letter-spacing: 0px;
      color: #ffffff;
      position: relative;
      top: 80px;
    }

    .buttons_case {
      display: flex;
      justify-content: space-around;
      width: 50%;
      margin: 120px auto;

      span {
        font-size: 14px;
        top: 0;
      }
    }
  }

  #vertical_line {
    z-index: 0;
    position: fixed;
    border-left: 1px solid #8c1ac1;
    height: 100%;
    top: 0;

    @media (max-width: 1470px) {
      display: none;
    }
  }

  .card {
    z-index: 1;
    width: 536px;
    height: 776px;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 30px;
    padding: 16px;
    position: relative;

    @media (min-width: 1470px) {
      &:nth-child(2n + 1) {
        top: 297px;
      }
    }

    @media (max-width: 414px) {
      width: 100%;
      height: fit-content;
      margin: 36px 0;
      padding: 0;
    }

    .movie_picture {
      z-index: 1;
      width: 40%;
      position: relative;
      margin-top: 20px;
      box-shadow: 0px 12px 6px #00000029;
      transition: all 0.25s ease;

      &:hover {
        transform: scale(1.1, 1.1);
        box-shadow: 0px 12px 12px #00000029;
      }

      @media (max-width: 414px) {
        width: 96%;
      }
    }

    .movie_data {
      z-index: 1;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;

      .title_and_grade {
        display: flex;
        flex-direction: column;
        align-items: center;
        margin-bottom: 8px;

        @media (max-width: 414px) {
          display: flex;
          flex-direction: row;
          justify-content: space-between;
          align-content: center;
          width: 96%;
          margin-top: 24px;
        }
      }

      .title {
        font-size: 36px;
        position: relative;
        color: #fff;
        font-weight: bold;
        letter-spacing: 0px;
        margin: 36px;

        @media (max-width: 414px) {
          font-size: 22px;
          text-align: start;
          margin: 0 10px 0 0;
        }
      }

      .grade {
        width: 61px;
        height: 61px;
        background-color: #fff500;
        color: #45155a;
        font: normal normal bold 22px "Roboto";
        border-radius: 6px;
        display: flex;
        justify-content: center;
        align-items: center;

        @media (max-width: 414px) {
          width: 48px;
          height: 48px;
          font-size: 16px;
        }
      }

      p {
        position: relative;
      }

      p,
      h4 {
        color: #fff;
        position: relative;
      }
    }
  }
}
</style>
