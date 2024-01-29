<template>
  <div class="w-full min-h-screen h-full flex justify-center">
    <div class="bg-slate-300 w-full mx-72 flex flex-col items-center">
      <div class="font-bold text-3xl mt-6">Конфигуратор</div>
      <div
        class="my-5 flex flex-col justify-center items-center"
        v-if="nowWidth === true"
      >
        <img class="w-52" src="../assets/xl.jpeg" alt="" />
        <button @click="verForBlind" class="bg-white p-2 rounded-lg m-4">
          Увеличенная кофемашина
        </button>
      </div>
      <div class="my-5 flex flex-col justify-center items-center" v-else>
        <img class="w-52" src="../assets/sm.jpeg" alt="" />
        <button @click="verForBlind" class="bg-white p-2 rounded-lg m-4">
          Стандартная кофемашина
        </button>
      </div>

      <router-view></router-view>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from "vue";
import { useStore } from "vuex";
const store = useStore();

const nowWidth = ref(1);

const myChoose = computed(() => store.state.myChoose);
const limeFresh = computed(() => store.state.limeFresh);

const verForBlind = () => {
  nowWidth.value = nowWidth.value === true ? false : true;
};
</script>
