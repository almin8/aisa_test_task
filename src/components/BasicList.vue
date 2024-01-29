<template>
  <div @click="choose = 0" class="flex justify-center flex-col items-center">
    <div class="flex flex-col border-y-2 pr-3">
      <div class="text-xl font-bold">Колличество напитков:</div>

      <config-component></config-component>

      <button @click="goCardList" class="bg-red-200 p-2 rounded-lg m-4">
        Перейти в корзину
      </button>
    </div>
    <div class="text-3xl font-bold mt-5">Выберите колличество напитков:</div>
    <div class="w-full px-16">
      <div
        @click.stop
        @click="chooselimeFresh(imageName)"
        class="border-b-2 flex flex-col justify-center items-center pb-2 w-full mb-5"
        :class="{ 'bg-slate-500': imageName === choose }"
        v-for="(imagePath, imageName) in limeFresh"
        :key="imageName"
      >
        <img class="m-4 w-72" :src="imagePath" alt="image" />
        <div>Колличество напитков: {{ imageName }}шт.</div>
        <button
          v-if="choose === imageName"
          @click="getlimeFresh"
          @click.stop
          class="bg-white p-2 rounded-lg m-4"
        >
          Добавить в хранилище
        </button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from "vue";
import { useStore } from "vuex";
import { useRouter } from "vue-router";
import ConfigComponent from "./ConfigComponent.vue";
const components = {
  ConfigComponent,
};
const store = useStore();
const router = useRouter();
const choose = ref(0);
const myChoose = computed(() => store.state.myChoose);
const limeFresh = computed(() => store.state.limeFresh);

const chooselimeFresh = (el) => {
  choose.value = el;
};
const getlimeFresh = () => {
  store.commit("getlimeFresh", choose.value);
  choose.value = 0;
};

const goCardList = () => {
  router.push("/card");
};
</script>
