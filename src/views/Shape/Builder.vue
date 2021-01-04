<template>
  <div class="container">
    <div class="row">
      <div>
        <div class="svg"></div>
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
            <th>Corners</th>
            <th><output for="corners" id="corners"></output></th>
            <td>
              <input
                type="range"
                name="corners"
                min="3"
                max="36"
                value="4"
                @change="prepearDraw()"
              />
            </td>
          </tr>
          <tr>
            <th>Radius</th>
            <th>
              <output for="r.value" id="r"></output>
            </th>
            <td>
              <input type="range" name="r" min="0" max="200" @change="prepearDraw()" />
            </td>
          </tr>
          <tr>
            <th>Min. radius</th>
            <th><output for="minR" id="minR"></output></th>
            <td>
              <input
                type="range"
                name="minR"
                min="0"
                max="200"
                value="10"
                @change="prepearDraw()"
              />
            </td>
          </tr>
          <tr>
            <th>Lines</th>
            <th><output for="lines" id="lines"></output></th>
            <td>
              <input type="range" name="lines" min="1" max="24" value="4" @change="prepearDraw()" />
            </td>
          </tr>
          <tr>
            <th>Rotate</th>
            <th><output for="rotateEach" id="rotateEach"></output></th>
            <td>
              <input
                type="range"
                name="rotateEach"
                value="7"
                min="-40"
                max="0"
                @change="prepearDraw()"
              />
            </td>
          </tr>
          <tr>
            <th>Stroke Color</th>
            <th><output for="scolor" id="scolor"></output></th>
            <td>
              <input type="color" name="scolor" value="#000000" @change="prepearDraw()" />
            </td>
          </tr>
          <tr>
            <th>Fill Color</th>
            <th><output for="fcolor" id="fcolor"></output></th>
            <td>
              <input type="color" name="fcolor" value="#ffffff" @change="prepearDraw()" />
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
    return {
      stroke: undefined,
      distort: 0,
      corners: 0,
      r: 0,
      minR: 0,
      lines: 0,
      rotateEach: 0,
      offset: 0,
      fill: undefined,
    };
  },
  methods: {
    serializeXmlNode(xmlNode) {
      if (typeof window.XMLSerializer != "undefined") {
        return new window.XMLSerializer().serializeToString(xmlNode);
      } else if (typeof xmlNode.xml != "undefined") {
        return xmlNode.xml;
      }
      return "";
    },
    exportPNG() {
      /*
    Based off  gustavohenke's svg2png.js
    https://gist.github.com/gustavohenke/9073132
    */
      var svg = document.querySelector(".svg");
      var svgData = this.serializeXmlNode(svg);

      var canvas = document.createElement("canvas");

      canvas.width = 410;
      canvas.height = 410;
      var ctx = canvas.getContext("2d");
      var dataUri = "";
      try {
        dataUri = "data:image/svg+xml;base64," + btoa(svgData);
      } catch (ex) {
        alert(`your browser probably doesn't support btoa() method`);
      }
      var img = document.createElement("img");

      var a = document.createElement("a");
      a.download = "polygon.svg";
      a.href = dataUri;
      a.click();
      img.onload = () => {
        ctx.drawImage(img, 0, 0);
        try {
          // Try to initiate a download of the image
          var a = document.createElement("a");
          a.download = "polygon.png";
          a.href = dataUri;
          document.querySelector("body").appendChild(a);
          a.click();
          document.querySelector("body").removeChild(a);
        } catch (ex) {
          // If downloading not possible (as in IE due to canvas.toDataURL() security issue)
          // then display image for saving via right-click
          var imgPreview = document.createElement("div");
          imgPreview.appendChild(img);
          document.querySelector("body").appendChild(imgPreview);
        }
      };
    },
    simulatePathDrawing(path) {
      var length = path.getTotalLength();
      // Clear any previous transition
      path.style.transition = path.style.WebkitTransition = "none";
      // Set up the starting positions
      path.style.strokeDasharray = length + " " + length;
      path.style.strokeDashoffset = length;
      // Trigger a layout so styles are calculated & the browser
      // picks up the starting position before animating
      path.getBoundingClientRect();
      // Define our transition
      path.style.transition = path.style.WebkitTransition =
        "stroke-dashoffset " + (Math.random() * 3 + 1) + "s ease-in-out .4s";
      // Go!
      path.style.strokeDashoffset = "0";
      path.style.stroke = this.stroke;
      path.style.strokeWidth = "1px";
      // path.style.fill = 'rgba(255,255,0,.12)';
    },
    getFill() {
      if (this.fill == undefined) {
        var c = "rgba(";
        for (var i = 0; i < 3; i++) {
          c += parseInt(Math.random() * 205).toString() + ",";
        }
        c += parseInt(Math.random() * 0.5 + 0.5 * 1000) / 1000 + ")";
        return c;
      } else {
        return this.fill;
      }
    },
    getCol() {
      if (this.stroke == undefined) {
        var c = "rgba(";
        for (var i = 0; i < 3; i++) {
          c += parseInt(Math.random() * 205).toString() + ",";
        }
        c += parseInt(Math.random() * 0.5 + 0.5 * 1000) / 1000 + ")";
        return c;
      } else {
        return this.stroke;
      }
    },

    draw() {
      this.stroke = this.getCol();
      this.rotateEach = typeof this.rotateEach !== "undefined" ? this.rotateEach : 0;
      var count = typeof this.lines !== "undefined" ? this.lines : 6;
      var add = (this.r - this.minR) / count;

      var step = 360 / this.corners;
      var cx = 200;
      var cy = 200;
      var pi = 22 / 7;
      var cordeg = -6;
      var p = "";
      var figures = "";
      this.fill = this.getFill();
      var base =
        '<?xml version="1.0"?>\n<svg width="410" height="410" viewPort="0 0 410 410" version="1.1" xmlns="http://www.w3.org/2000/svg" id="polygons">';
      base += "\n%d%%l%";
      base += "</svg>";
      var polygon =
        '\t<polygon style="stroke: ' +
        this.stroke +
        `;fill:${this.fill};stroke-width: 2px;" points="%p%"></polygon>\n`;
      var path =
        '\t<path style="stroke: ' +
        this.stroke +
        `;fill:${this.fill};stroke-width: 2px;" d="%p%"></path>\n`;
      // var rotate = this.rotateEach;
      var lines2 = [];
      var iL = 0;
      for (var b = 0; b < 360; b += step) {
        lines2[iL++] = [];
      }
      var iLines = iL--;

      for (var m = 0; m < count; m++) {
        p = "";
        var c = "";
        iL = 0;
        for (var g = 0; g < 360; g += step) {
          var d = 1;
          if (!this.distort) {
            d = Math.random() * 0.08 - Math.random() * 0.08;
          }
          var y =
            Math.round(Math.sin(((g + cordeg + this.rotateEach * d * m) / 180) * pi) * this.r, 2) +
            cx;
          var x =
            Math.round(Math.cos(((g + cordeg + this.rotateEach * d * m) / 180) * pi) * this.r, 2) +
            cy;
          var sCoor = x + "," + y + " ";
          p += sCoor;
          lines2[iL] = lines2[iL] + (m === 0 ? "M " : "L ") + sCoor;
          iL++;
        }
        this.r -= add;
        figures += polygon.replace("%p%", p) + c;
      }
      base = base.replace("%d%", figures);
      var sLines = "";
      for (var i = 0; i < iLines; i++) {
        sLines += path.replace("%p%", lines2[i] + " ");
      }
      base = base.replace("%l%", sLines);

      document.querySelector(".svg").innerHTML = base;
      document.querySelector("#svg").value = base;

      document.querySelectorAll("svg path").forEach((path) => {
        this.simulatePathDrawing(path);
      });
    },

    prepearDraw() {
      // let distort = document.querySelector("input[name='distort']").checked;
      let corners = document.querySelector("input[name='corners']").value;
      let r = document.querySelector("input[name='r']").value;
      let minR = document.querySelector("input[name='minR']").value;
      let lines = document.querySelector("input[name='lines']").value;
      let rotateEach = document.querySelector("input[name='rotateEach']").value;
      let stroke = document.querySelector("input[name='scolor']").value;
      let fill = document.querySelector("input[name='fcolor']").value;
      this.corners = corners;
      this.r = r;
      this.minR = minR;
      this.lines = lines;
      this.rotateEach = rotateEach;
      this.fill = fill;
      this.stroke = stroke;
      this.draw();
    },

    setRandom() {
      this.fill = undefined;
      this.stroke = undefined;
      document.querySelectorAll("input[type='range']").forEach(function(details) {
        var $this = details;
        var imin = parseInt($this.min);
        var imax = parseInt($this.max);
        var idiff = imax - imin;
        $this.value = Math.random() * idiff;
      });
      this.prepearDraw();
    },

    keyPress(e) {
      document.querySelector(".svg").innerHTML = e.target.value;
    },
  },
  mounted() {
    this.setRandom();
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
  width: 100%;
  height: 100%;
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
