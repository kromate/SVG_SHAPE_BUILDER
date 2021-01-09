<template>
  <FirstHead v-if="head == 'first'" />
  <SecondHead v-if="head == 'second'" />
  <ThirdHead v-if="head == 'third'" />
  <FourthHead v-if="head == 'fourth'" />
  <FifthHead v-if="head == 'fifth'" />
  <SixthHead v-if="head == 'sixth'" />
  <SeventhHead v-if="head == 'seventh'" />
</template>

<script>
import FirstHead from "@/parts/head/firstHead.vue";
import SecondHead from "@/parts/head/secondHead.vue";
import ThirdHead from "@/parts/head/thirdHead.vue";
import FourthHead from "@/parts/head/fourthHead.vue";
import FifthHead from "@/parts/head/fifthHead.vue";
import SixthHead from "@/parts/head/sixthHead.vue";
import SeventhHead from "@/parts/head/seventhHead.vue";
export default {
  components: { FirstHead, SecondHead, ThirdHead, FourthHead, FifthHead, SixthHead, SeventhHead },
  computed: {
    head() {
      return this.$store.state.Head;
    },
  },

  created() {
    console.log(this.head);
  },
};
</script>

<style></style>
