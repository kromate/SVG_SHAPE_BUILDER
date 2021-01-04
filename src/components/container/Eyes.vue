<template>
  <div class="flex">
    <button v-for="(eye, index) in Eyes" :key="index" class="box" @click="change(eye.name)">
      <img :src="eye.img" alt="" />
    </button>
  </div>
</template>

<script>
export default {
  name: "boxEyes",
  data() {
    return {
      Eyes: [
        { name: "first", img: require("@/assets/S_eye/first.svg") },
        { name: "second", img: require("@/assets/S_eye/second.svg") },
        { name: "third", img: require("@/assets/S_eye/third.svg") },
        { name: "fourth", img: require("@/assets/S_eye/fourth.svg") },
        { name: "fifth", img: require("@/assets/S_eye/fifth.svg") },
        { name: "sixth", img: require("@/assets/S_eye/sixth.svg") },
        { name: "seventh", img: require("@/assets/S_eye/seventh.svg") },
      ],
    };
  },

  methods: {
    change(number) {
      this.$store.commit("changeEyes", number);
    },
  },
};
</script>

<style scoped>
.flex {
  display: flex;
  flex-wrap: wrap;
}
.box {
  background: rgb(109, 107, 117);
  border-radius: 4px;
  box-shadow: 1px 0px 3px #000;
  width: 70px;
  height: 30px;
  margin: 0.7rem;
  padding: 0px 1rem;
  outline: none;
  border: none;
  display: flex;
  justify-content: center;
  align-items: center;
}
.box:hover {
  background: #6e1cfa;
  cursor: pointer;
}
img {
  width: 45px;
  height: 45px;
}
</style>
