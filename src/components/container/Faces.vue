<template>
  <div class="flex">
    <button v-for="(eye, index) in Faces" :key="index" class="box" @click="change(eye.name)">
      <img :src="eye.img" alt="" />
    </button>
  </div>
</template>

<script>
export default {
  name: "boxEyes",
  data() {
    return {
      Faces: [
        { name: "none", img: require("@/assets/none.svg") },
        { name: "first", img: require("@/assets/S_face/first.svg") },
        { name: "second", img: require("@/assets/S_face/second.svg") },
        { name: "third", img: require("@/assets/S_face/third.svg") },
        { name: "fourth", img: require("@/assets/S_face/fourth.svg") },
        { name: "fifth", img: require("@/assets/S_face/fifth.svg") },
        { name: "sixth", img: require("@/assets/S_face/sixth.svg") },
        { name: "seventh", img: require("@/assets/S_face/seventh.svg") },
      ],
    };
  },

  methods: {
    change(number) {
      this.$store.commit("changeHead", number);
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
  width: 25px;
  height: 25px;
}
</style>
