<template>
  <div class="container">
    <div class="row">
      <div>
        <div class="svg">
          <img src="@/assets/face.svg" alt="" />
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
        </table>
      </div>
    </div>
    <div class="row col">
      <h1>The SVG Code</h1>
      <h4>You can change the code direct from here to see it's effects</h4>
      <div style="overflow:auto" class="col-md-12">
        <textarea name="" id="svg" cols="30" rows="10" @change="keyPress"></textarea>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Builder",
  data() {
    return {};
  },
  methods: {
    show() {
      let svg = document.querySelector(".svg");
      let text = document.querySelector("#svg");
      let person = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1080 1080">

</svg>`;
      svg.innerHTML = person;
      text.innerHTML = person;
    },
    keyPress(e) {
      document.querySelector(".svg").innerHTML = e.target.value;
    },
  },
  mounted() {
    this.show();
  },
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
  width: 27rem;
  height: 27rem;
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
