<template>
  
</template>

<script>
function serializeXmlNode(xmlNode) {
    if (typeof window.XMLSerializer != "undefined") {
        return (new window.XMLSerializer()).serializeToString(xmlNode);
    } else if (typeof xmlNode.xml != "undefined") {
        return xmlNode.xml;
    }
    return "";
}

var exportPNG = function() {
    /*
    Based off  gustavohenke's svg2png.js
    https://gist.github.com/gustavohenke/9073132
    */

    var svg = $( "svg" )[0];
    var svgData = serializeXmlNode( svg );

    var canvas = document.createElement( "canvas" );
    
    canvas.width = 410; 
    canvas.height = 410;
    var ctx = canvas.getContext( "2d" );

    var dataUri = '';
    try {
        dataUri = 'data:image/svg+xml;base64,' + btoa(svgData);
    } catch (ex) {
        
        // For browsers that don't have a btoa() method, send the text off to a webservice for encoding
        /* Uncomment if needed
        $.ajax({
            url: "http://www.mysite.com/webservice/encodeString",
            data: { svg: svgData },
            type: "POST",
            async: false,
            success: function(encodedSVG) {
                dataUri = 'data:image/svg+xml;base64,' + encodedSVG;
            }
        })
        */

    }
    
    var img = document.createElement( "img" );

    img.onload = function() {
        ctx.drawImage( img, 0, 0 );

        try {
                                            
            // Try to initiate a download of the image
            var a = document.createElement("a");
            a.download = "polygon.png";
            a.href = canvas.toDataURL("image/png");
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
    console.log(dataUri);
    img.src = dataUri;
    
};
function simulatePathDrawing(path) {
  // var path = document.querySelector('.squiggle-animated path');
  var length = path.getTotalLength();
  // Clear any previous transition
  path.style.transition = path.style.WebkitTransition =
  'none';
  // Set up the starting positions
  path.style.strokeDasharray = length + ' ' + length;
  path.style.strokeDashoffset = length;
  // Trigger a layout so styles are calculated & the browser
  // picks up the starting position before animating
  path.getBoundingClientRect();
  // Define our transition
  path.style.transition = path.style.WebkitTransition =
  'stroke-dashoffset '+(Math.random()*3+1)+'s ease-in-out .4s';
  // Go!
  path.style.strokeDashoffset = '0';
  path.style.stroke = stroke;
  path.style.strokeWidth = '1px';
  // path.style.fill = 'rgba(255,255,0,.12)';
}

var distort, corners, r, minR, lines, rotateEach, offset = 0;
var stroke = "black";

function draw() {
     stroke = getCol();
	rotateEach = (typeof rotateEach !== "undefined") ? rotateEach : 0;
	var count = (typeof lines !== "undefined") ? lines : 6;
	var add = (r - minR) / count;

	var step = 360 / corners;
	var cx = 200;
	var cy = 200;
	var pi = 22 / 7;
	var cordeg = -6;
	var p = ""
	var figures = "";
  var fill = getCol();
	var base = '<?xml version="1.0"?>\n<svg width="410" height="410" viewPort="0 0 410 410" version="1.1" xmlns="http://www.w3.org/2000/svg" id="polygons">';
  base+='\n%d%%l%';
  base+='</svg>';
	var polygon = '\t<polygon style="stroke: '+stroke+';fill:transparent;stroke-width: 1px;" points="%p%"></polygon>\n';
	var path = '\t<path style="stroke: '+stroke+';fill:transparent;stroke-width: 1px;" d="%p%"></path>\n';
	var rotate = rotateEach;
  var lines2 = [];
  var iL = 0;
	for (var g = 0; g < 360; g += step) {
     lines2[iL++] = [];
   }
  var iLines = iL--;

	for (var m = 0; m < count; m++) {
		p = "";
		var c = "";
		 iL = 0;
		for (var g = 0; g < 360; g += step) {
      var d = 1;
if (!!distort) {
  d = (Math.random()*.08)-(Math.random()*.08);
}
			var y = Math.round(Math.sin((g + cordeg + (rotateEach*d) * m) / 180 * pi) * r, 2) + cx;
			var x = Math.round(Math.cos((g + cordeg + (rotateEach*d) * m) / 180 * pi) * r, 2) + cy;
       var sCoor = x + "," + y + " ";
			p += sCoor;
			lines2[iL] = lines2[iL]+((m===0) ? "M " : "L ")+sCoor;
       iL++;
		};
		r -= add;
		figures += polygon.replace("%p%", p) + c
	}
	base = base.replace("%d%", figures);
  var sLines = "";
  for (var i=0; i<iLines; i++) {
     sLines+=path.replace("%p%",lines2[i]+" ");
   }
	base = base.replace("%l%", sLines);

	$(".svg").html(base);
	$("#svg").val(base);
  
  $("svg path").each(function () {
  simulatePathDrawing(this)
})
}

function prepearDraw() {
  distort = $("input[name='distort']").prop("checked");
	corners = $("input[name='corners']").val();
	r = $("input[name='r']").val();
	minR = $("input[name='minR']").val();
	lines = $("input[name='lines']").val();
	rotateEach = $("input[name='rotateEach']").val();
	$("#corners").val(corners);
	$("#r").val(r);
	$("#minR").val(minR);
	$("#lines").val(lines);
	$("#rotateEach").val(rotateEach)
	draw();
}

function setRandom() {
	$("input[type='range']").each(function () {
		var $this = $(this);
		var imin = parseInt($this.attr("min"));
		var imax = parseInt($this.attr("max"));
		var idiff = imax - imin;
		$this.val(Math.random() * idiff);
	});
	prepearDraw();
}

function getCol() {
	var c = "rgba(";
	for (var i = 0; i < 3; i++) {
		c += parseInt(Math.random() * 205).toString() + ",";
	}
	c += parseInt((Math.random()*.5)+.5*1000)/1000 + ")";
	return c;
}

$("input[type = 'range'], [type='checkbox']").on("touchend mousemove click keyup ", function (event) {
		var bPress = (event.which || event.button);
  if (event.type === 'mousemove') {
		if (bPress === 0) {
      return;
    }
	}

	prepearDraw();
});


$("#svg ").on("keyup ", function () {
	$(".svg ").html($(this).val());
})

$(".random ").on("click ", setRandom);

setRandom();


$(document).ready(function(){
  $(".save").click(function(){
    exportPNG();
  });
})
</script>

<style>

</style>