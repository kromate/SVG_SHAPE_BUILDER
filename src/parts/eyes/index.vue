<template>
  <FirstEyes v-if="eyes == 'first'" />
  <SecondEyes v-if="eyes == 'second'" />
  <ThirdEyes v-if="eyes == 'third'" />
  <FourthEyes v-if="eyes == 'fourth'" />
  <FifthEyes v-if="eyes == 'fifth'" />
  <SixthEyes v-if="eyes == 'sixth'" />
  <SeventhEyes v-if="eyes == 'seventh'" />
</template>

<script>
import FirstEyes from "@/parts/eyes/firstEyes.vue";
import SecondEyes from "@/parts/eyes/secondEyes.vue";
import ThirdEyes from "@/parts/eyes/thirdEyes.vue";
import FourthEyes from "@/parts/eyes/fourthEyes.vue";
import FifthEyes from "@/parts/eyes/fifthEyes.vue";
import SixthEyes from "@/parts/eyes/sixthEyes.vue";
import SeventhEyes from "@/parts/eyes/seventhEyes.vue";
export default {
  components: { FirstEyes, SecondEyes, ThirdEyes, FourthEyes, FifthEyes, SixthEyes, SeventhEyes },
  computed: {
    eyes() {
      return this.$store.state.Eye;
    },
  },

  // created() {
  //   console.log(this.eyes);
  // },
};
</script>

<style></style>
