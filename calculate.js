document.body.style.fontFamily = "sans-serif";
document.body.style.color = "blue";

var text = {
	degree: document.getElementById("degree"),
	radian: document.getElementById("radian"),
	percent: document.getElementById("percent")
};

//Sets The Minimum Value
text.degree.setAttribute("min", "0");
text.radian.setAttribute("min", "0");
text.percent.setAttribute("min", "0");
//Sets The Maximum Value
text.degree.setAttribute("max", "360");
text.radian.setAttribute("max", "6.28");
text.percent.setAttribute("max", "100");

text.radian.setAttribute("step", "0.01")

var formulaDegree = {
	radian: (Math.PI/180),
	percent: 1/3.6
};

var formulaRadian = {
	degree: (180/Math.PI),
	percent: (50/Math.PI)
};

var formulaPercent = {
	degree: (3.6),
	radian: (Math.PI/50)
};

function degree() {
			text.radian.value = (text.degree.value * formulaDegree.radian).toFixed(2);
			text.percent.value = Math.round(text.degree.value * formulaDegree.percent);
};

function radian() {
			text.degree.value = (text.radian.value * formulaRadian.degree).toFixed(0);
			text.percent.value = Math.round(text.radian.value * formulaRadian.percent);
};

function percent() {
			text.degree.value = (text.percent.value * formulaPercent.degree).toFixed(0);
			text.radian.value = (text.percent.value * formulaPercent.radian).toFixed(2);
};
