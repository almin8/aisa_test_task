<template>
  <div>
    <div class="flex justify-center" v-for="(el, key) in myChoose" :key="key">
      <div v-if="el[1] !== 0">{{ el[1] }}шт. {{ key }} - напитков;</div>
    </div>
  </div>
</template>

<script setup>
import { computed } from "vue";
import { useStore } from "vuex";

const store = useStore();

const myChoose = computed(() => store.state.myChoose);
</script>
