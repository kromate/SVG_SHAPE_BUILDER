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
    <defs>
        <style>
            .cls-1 {
                fill: #7d4921;
                stroke-width: 8px;
            }

            .cls-1,
            .cls-3 {
                stroke: #000;
            }

            .cls-1,
            .cls-3,
            .cls-5 {
                stroke-miterlimit: 10;
            }

            .cls-2,
            .cls-3,
            .cls-4 {
                fill: #fff;
            }

            .cls-3 {
                stroke-width: 5.22px;
            }

            .cls-4 {
                opacity: 0.08;
            }

            .cls-5 {
                fill: none;
                stroke: #00000a;
                stroke-width: 6.37px;
            }
        </style>
    </defs>
    <g id="Layer_1" data-name="Layer 1">
        <path id='head' class="cls-1"
            d="M711.22,469a190.61,190.61,0,0,1-1.87,26.67C696.78,584.66,622.2,653,532.09,653S367.5,584.74,354.86,495.8A189.63,189.63,0,0,1,353,469a235.55,235.55,0,0,1,1.61-26.63,291.18,291.18,0,0,1,7.17-38.63c7-27.26,17.85-53.28,31.81-70.76A133.46,133.46,0,0,1,420,307.74c1.6-1.16,3.24-2.28,4.89-3.36,29.89-19.6,67-27.18,107.16-27.18,35.63,0,68.84,6,96.74,21a135.92,135.92,0,0,1,18,11.58A133.73,133.73,0,0,1,670.63,333c13.32,16.68,23.85,41.14,30.83,67a291.11,291.11,0,0,1,8.16,42.49A233.27,233.27,0,0,1,711.22,469Z" />
        <path id='right-ear' class="cls-1"
            d="M732.53,469.08c0,14.78-9.29,26.76-20.75,26.76a15.12,15.12,0,0,1-2.43-.19A190.61,190.61,0,0,0,711.22,469a233.27,233.27,0,0,0-1.6-26.51,15.47,15.47,0,0,1,2.16-.15C723.24,442.32,732.53,454.3,732.53,469.08Z" />
        <path id='left-ear' class="cls-1"
            d="M354.86,495.8c-.39,0-.78,0-1.18,0-11.46,0-20.75-12-20.75-26.76s9.29-26.76,20.75-26.76q.45,0,.9,0A235.55,235.55,0,0,0,353,469,189.63,189.63,0,0,0,354.86,495.8Z" />
        <path
        id='right-brow'
            d="M391.67,401.76c24.8-12.75,58.09-15.91,82,0,4.24,2.82,8.19-4,4-6.81-26.29-17.5-62.75-14-90,0-4.51,2.32-.53,9.13,4,6.81Z" />
        <path
        id='left-brow'
            d="M676.65,395c-27.21-14-63.66-17.5-90,0-4.2,2.8-.26,9.64,4,6.81,23.91-15.91,57.2-12.75,82,0,4.51,2.32,8.5-4.48,4-6.81Z" />
        <circle id='right-eye' cx="440.66" cy="466.78" r="20.52" />
        <circle class="cls-2" cx="446.89" cy="456.78" r="3.78" />

        <circle id='left-eye' cx="623.63" cy="466.78" r="20.52" />
        <circle class="cls-2" cx="629.86" cy="456.78" r="3.78" />
        <path id='mouth' class="cls-3"
            d="M577.33,557.49c6.49,0,10.9,5,8.31,9.54-7.72,13.38-29.41,28.57-54.95,28.57s-47.23-15.19-55-28.57c-2.59-4.5,1.82-9.54,8.31-9.54Z" />
    </g>
    <g id="Layer_3" data-name="Layer 3">
        <path id='glasses-right' class="cls-4"
            d="M706.51,458.27c0,39.71-30.38,71.9-67.86,71.9S570.8,498,570.8,458.27s30.38-46,67.85-46S706.51,418.55,706.51,458.27Z" />
        <path id='glasses-left' class="cls-4"
            d="M495.39,458.27c0,39.71-30.38,71.9-67.86,71.9s-67.86-32.19-67.86-71.9,30.38-46,67.86-46S495.39,418.55,495.39,458.27Z" />
        <path id='glass-frame' class="cls-5" d="M493.92,444.51A54.47,54.47,0,0,1,528,432.59h5.77a54.53,54.53,0,0,1,37.83,15.2" />
        <path id='glass-frame' class="cls-5"
            d="M495.39,458.27c0,39.71-30.38,71.9-67.86,71.9s-67.86-32.19-67.86-71.9,30.38-46,67.86-46S495.39,418.55,495.39,458.27Z" />
        <path id='glass-frame' class="cls-5"
            d="M706.51,458.27c0,39.71-30.38,71.9-67.86,71.9S570.8,498,570.8,458.27s30.38-46,67.85-46S706.51,418.55,706.51,458.27Z" />
        <path
            id='hair'
            d="M647.15,314.18v9a37,37,0,0,1-37,37H456.45a37,37,0,0,1-37-37v-9a36.9,36.9,0,0,1,.56-6.44c1.6-1.16,3.24-2.28,4.89-3.36,29.89-19.6,67-27.18,107.16-27.18,35.63,0,68.84,6,96.74,21a135.92,135.92,0,0,1,18,11.58A35.81,35.81,0,0,1,647.15,314.18Z" />
        <path
        id='hair'
            d="M427.53,324.22a77.28,77.28,0,0,1-2.3,18.72c-7.41,29.61-32,53.07-63.48,60.78,7-27.26,17.85-53.28,31.81-70.76A133.46,133.46,0,0,1,420,307.74c1.6-1.16,3.24-2.28,4.89-3.36A76.62,76.62,0,0,1,427.53,324.22Z" />
        <path
        id='hair'
            d="M701.46,400c-30.47-4.17-55.89-22.81-67.91-48.19a77.2,77.2,0,0,1-4.72-53.61,135.92,135.92,0,0,1,18,11.58A133.73,133.73,0,0,1,670.63,333C684,349.64,694.48,374.1,701.46,400Z" />
    </g>
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
