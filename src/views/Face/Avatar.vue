<template>
  <div class="container">
    <div class="row">
      <div>
        <div class="svg">
          <Face />
        </div>
      </div>
      <div>
        <table class="table">
          <tr>
            <th colspan="2"><h2 class="header">Parameters</h2></th>
            <td>
              <button class="btn btn-success random" @click="setRandom()">Random</button>
              <button class="btn save btn-primary" @click="exportPNG()">Save SVG</button>
            </td>
          </tr>
          <tr>
            <th colspan="2"><h2 class="header">Parts</h2></th>
            <td>
              <select name="" id="" @change="updatePart($event)" v-model="visible">
                <option value="brows">Brow</option>
                <option value="ears">Ear</option>
                <option value="eyes">Eye</option>
                <option value="glasses">Glass</option>
                <option value="hairs">Hair</option>
                <option value="heads">Head</option>
                <option value="mouths">Mouth</option>
              </select>
            </td>
          </tr>
          <box />
        </table>
      </div>
    </div>
    <!-- ======================================= -->
  </div>
</template>

<script>
import Face from "./Face.vue";
import box from "@/components/container/index.vue";
export default {
  name: "Builder",
  components: { Face, box },
  data() {
    return {};
  },
  computed: {
    visible() {
      return this.$store.state.visiblePart;
    },
  },
  methods: {
    updatePart(e) {
      console.log(e.target.value);
      this.$store.commit("updateVisiblePart", e.target.value);
    },
  },

  mounted() {},
};
</script>

<style>
select {
  box-shadow: 1px 2px 4px #000;
  outline: none;
  border: none;
  padding: 0.5rem;
  border-radius: 4px;
}
body {
  user-select: none;
  background-color: #cdbfe6;
  background-color: #6e1cfa;
}
#svg {
  width: 30rem;
  height: 160px;
}
.svg {
  width: 20rem;
  height: 20rem;
}
.row {
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  flex-wrap: wrap;
}
.col {
  flex-direction: column;
}
.header {
  margin-right: 5px;
}
.btn {
  padding: 10px;
  outline: none;
  border: none;
  box-shadow: 1px 2px 3px black;
  margin: 3px;
  border-radius: 4px;
  cursor: pointer;
}
.btn-success {
  background-color: #dbdbf1;
}
.btn-primary {
  background-color: #a5d2ce;
}
</style>
