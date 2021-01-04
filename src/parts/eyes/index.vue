<template>
  <FirstEar v-if="eyes == 'first'" />
  <SecondEar v-if="eyes == 'second'" />
  <ThirdEar v-if="eyes == 'third'" />
  <FourthEar v-if="eyes == 'fourth'" />
  <FifthEar v-if="eyes == 'fifth'" />
  <SixthEar v-if="eyes == 'sixth'" />
  <SeventhEar v-if="eyes == 'seventh'" />
</template>

<script>
import FirstEar from "@/parts/eyes/firstEyes.vue";
import SecondEar from "@/parts/eyes/secondEyes.vue";
import ThirdEar from "@/parts/eyes/thirdEyes.vue";
import FourthEar from "@/parts/eyes/fourthEyes.vue";
import FifthEar from "@/parts/eyes/fifthEyes.vue";
import SixthEar from "@/parts/eyes/sixthEyes.vue";
import SeventhEar from "@/parts/eyes/seventhEyes.vue";
export default {
  components: { FirstEar, SecondEar, ThirdEar, FourthEar, FifthEar, SixthEar, SeventhEar },
  computed: {
    eyes() {
      return this.$store.state.Eye;
    },
  },

  created() {
    console.log(this.eyes);
  },
};
</script>

<style></style>
