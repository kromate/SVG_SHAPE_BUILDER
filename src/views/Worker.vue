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
            .cls-1,
            .cls-3,
            .cls-4 {
                fill: #a46c35;
            }

            .cls-1,
            .cls-2,
            .cls-3,
            .cls-4 {
                stroke: #000;
                stroke-miterlimit: 10;
            }

            .cls-1,
            .cls-2 {
                stroke-width: 8px;
            }

            .cls-2 {
                fill: #7d4921;
            }

            .cls-3 {
                stroke-width: 8.45px;
            }

            .cls-4 {
                stroke-width: 8.4px;
            }
        </style>
    </defs>
    <g id="Layer_1" data-name="Layer 1">
        <path class="cls-1"
            d="M340.75,310.5c0,19.9-2.75,41.54-7.84,63.47-20.77,89.44-80.46,183.57-150.85,183.57S52,463.4,31.21,374C26.12,352,23.37,330.4,23.37,310.5c0-1.83,0-3.66.07-5.49C26,206,96,115.5,182.06,115.5S338.17,206,340.68,305C340.73,306.84,340.75,308.67,340.75,310.5Z" />
        <path class="cls-2"
            d="M1070.79,863.44a190.61,190.61,0,0,1-1.87,26.67c-12.57,89-87.15,157.38-177.26,157.38S727.07,979.2,714.43,890.26a189.63,189.63,0,0,1-1.89-26.82,235.55,235.55,0,0,1,1.61-26.63,291.18,291.18,0,0,1,7.17-38.63c7-27.26,17.85-53.28,31.81-70.76a133.46,133.46,0,0,1,26.48-25.22c1.6-1.16,3.24-2.28,4.89-3.36,29.89-19.6,67-27.18,107.16-27.18,35.63,0,68.84,6,96.74,21a135.92,135.92,0,0,1,18.05,11.58,133.73,133.73,0,0,1,23.75,23.2c13.32,16.68,23.85,41.14,30.83,67a291.11,291.11,0,0,1,8.16,42.49A233.27,233.27,0,0,1,1070.79,863.44Z" />
    </g>
    <g id="Layer_3" data-name="Layer 3">
        <path class="cls-3"
            d="M530.19,549.83h0c-79.12,0-143.26-40.92-143.26-123.32V272.41c0-82.4,64.14-149.2,143.26-149.2h0c79.12,0,143.26,66.8,143.26,149.2v154.1C673.45,508.91,609.31,549.83,530.19,549.83Z" />
        <path class="cls-3"
            d="M695.8,309.42c0-107.25,81.72-184.14,182.52-184.14s182.52,76.89,182.52,184.14S979.12,547.76,878.32,547.76,695.8,416.66,695.8,309.42Z" />
        <path class="cls-4"
            d="M310.76,1042.94l-42.86,16.39a187.79,187.79,0,0,1-132.56,1l-48.93-17.9C55.25,1031,34.1,997.84,34.1,960.35V787.26c0-77.33,54.68-140,122.14-140H240c67.46,0,122.14,62.7,122.14,140v174C362.13,998.29,341.44,1031.21,310.76,1042.94Z" />
        <ellipse class="cls-4" cx="544.89" cy="859.58" rx="154.44" ry="203.68" />
        <path d="M143.16,64.56h-7.78v-18H101v18H93.23V25.13H101v17.3h34.37V25.13h7.78Z" />
        <path
            d="M197.67,51.61H164.19a8.53,8.53,0,0,0,4.26,7.26q4.06,2.55,11.2,2.55a34.34,34.34,0,0,0,14.73-3.13v4.24q-6.25,2.68-16.53,2.69-10,0-15.8-3.84a12.25,12.25,0,0,1-5.74-10.79q0-6.57,6.28-10.71t15.58-4.13q9.32,0,14.41,3.57a11.46,11.46,0,0,1,5.09,9.93Zm-7.78-3.82a7.11,7.11,0,0,0-3.17-6.08c-2.09-1.45-5-2.17-8.69-2.17a17.24,17.24,0,0,0-9.12,2.28,9.47,9.47,0,0,0-4.63,6Z" />
        <path
            d="M243.11,64.56h-7.6v-4.4h-.18q-5,5.06-14.59,5.06-7.1,0-11.1-2.23t-4-5.91q0-7.89,15.65-9.18l14.22-1.18q0-7.19-9.77-7.18A34,34,0,0,0,210.27,43V38.38a45.68,45.68,0,0,1,16.12-2.63q16.71,0,16.72,10.5Zm-7.6-14.24-11.44.93a27.85,27.85,0,0,0-8,1.56,4,4,0,0,0-2.69,3.94c0,1.38.83,2.5,2.48,3.37a14.21,14.21,0,0,0,6.6,1.3,17,17,0,0,0,9.33-2.35c2.46-1.56,3.68-3.55,3.68-6Z" />
        <path
            d="M297.9,64.56h-7.59V59.78h-.19q-5.28,5.44-16.3,5.44-8.94,0-14.29-3.78a12,12,0,0,1-5.35-10.3A13.08,13.08,0,0,1,260.11,40q5.92-4.2,15.79-4.2t14.22,4.56h.19V22.88h7.59Zm-7.59-12.73V47.68q0-3.41-3.8-5.78a18,18,0,0,0-9.64-2.36q-6.94,0-10.93,3a9.94,9.94,0,0,0-4,8.36,9,9,0,0,0,3.82,7.69q3.83,2.82,10.26,2.81t10.31-2.72Q290.31,56,290.31,51.83Z" />
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
