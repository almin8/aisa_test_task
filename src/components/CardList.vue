<template>
  <div
    @click="choose = 0"
    class="flex justify-center flex-col items-center mx-12 w-full"
  >
    <div class="flex flex-col border-y-2 w-full items-center">
      <button @click="back" class="bg-white p-2 rounded-lg m-4 self-start">
        Вернуться назад
      </button>
      <div class="text-xl font-bold">Колличество выбранных напитков:</div>

      <config-component class="mb-5"></config-component>
    </div>

    <div class="w-full px-16">
      <div
        class="flex flex-col justify-center items-center pb-2 w-full my-5"
        v-if="!hasZeroQuantity"
      >
        В корзине нет напитков
      </div>
      <div
        class="flex flex-col justify-center items-center pb-2 w-full my-5"
        v-for="(imagePath, imageName) in myChoose"
        :key="imageName"
      >
        <div v-if="imagePath[1] !== 0" class="border-b-2 pb-2">
          <img class="w-72" :src="imagePath[0]" alt="img" />

          <div class="flex flex-col items-center">
            <div>Колличество напитков: {{ imageName }}</div>
            <input
              class="mt-5 text-right w-10"
              type="number"
              :value="imagePath[1]"
              @input="newValueLime($event, imageName)"
              min="0"
            />шт.
            <button class="p-2 bg-red-200 mt-2" @click="saveConfig">
              Сохранить
            </button>
          </div>
        </div>
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
const currValue = ref([]);

const myChoose = computed(() => store.state.myChoose);
const limeFresh = computed(() => store.state.limeFresh);

const newValueLime = (el, key) => {
  currValue.value = [Number(el.target.value), key];
};

const saveConfig = () => {
  if (currValue.value.length) {
    if (Number(currValue.value[0]) < 0) {
      currValue.value.shift();
      currValue.value.unshift(0);
    }
    console.log(myChoose.value);
    store.commit("saveConfig", currValue.value);
    currValue.value = [];
  }
};
const back = () => {
  router.push("/");
};
const hasZeroQuantity = computed(() =>
  Object.values(myChoose.value).some((el) => el[1] !== 0)
);
</script>
