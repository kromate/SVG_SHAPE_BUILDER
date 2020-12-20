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
              <select name="" id="">
                <option value="head">Brow</option>
                <option value="ear">Ear</option>
                <option value="eye">Eye</option>
                <option value="glass">Glass</option>
                <option value="hair">Hair</option>
                <option value="head">Head</option>
                <option value="mouth">Mouth</option>
              </select>
            </td>
          </tr>
        </table>
      </div>
    </div>
    <!-- ======================================= -->
  </div>
</template>

<script>
import Face from "./Face.vue";
export default {
  name: "Builder",
  components: { Face },
  data() {
    return {};
  },

  mounted() {},
};
</script>

<style>
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
