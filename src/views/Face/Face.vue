<template>
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1080 1080">
    <Head />
    <firstEar />
    <firstBrow />
    <Eyes />
    <firstMouth />
    <firstGlasses v-if="true" />
    <firstHair />
  </svg>
</template>

<script>
import Head from "@/parts/head";
import FirstEar from "@/parts/ears/firstEar.vue";
import Eyes from "@/parts/eyes";
import FirstBrow from "@/parts/brows/firstBrow.vue";
import FirstMouth from "@/parts/mouth/firstMouth.vue";
import FirstGlasses from "@/parts/glasses/firstGlasses.vue";
import FirstHair from "@/parts/hair/firstHair.vue";
export default {
  name: "face",
  components: { Head, FirstEar, FirstBrow, Eyes, FirstMouth, FirstGlasses, FirstHair },
};
</script>

<style scoped></style>
