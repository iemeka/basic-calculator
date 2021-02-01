function calculate(){
	var unitone = Number(document.getElementById('unitone').value);
	var gpone = document.getElementById('gpone').value;
	var unittwo = Number(document.getElementById('unittwo').value);
	var gptwo = document.getElementById('gptwo').value;
	var unitthree = Number(document.getElementById('unitthree').value);
	var gpthree = document.getElementById('gpthree').value;
	var unitfour = Number(document.getElementById('unitfour').value);
	var gpfour = document.getElementById('gpfour').value;
	var unitfive = Number(document.getElementById('unitfive').value);
	var gpfive = document.getElementById('gpfive').value;
	var unitsix = Number(document.getElementById('unitsix').value);
	var gpsix = document.getElementById('gpsix').value;
	var unitseven = Number(document.getElementById('unitseven').value);
	var gpseven = document.getElementById('gpseven').value;
	var uniteight = Number(document.getElementById('uniteight').value);
	var gpeight = document.getElementById('gpeight').value;
	var unitnine = Number(document.getElementById('unitnine').value);
	var gpnine = document.getElementById('gpnine').value;
	var unitten = Number(document.getElementById('unitten').value);
	var gpten = document.getElementById('gpten').value;
	var totalGradePointi = unitone * gpone;
	var totalGradePointii = unittwo * gptwo;
	var totalGradePointiii = unitthree * gpthree;
	var totalGradePointiv = unitfour * gpfour;
	var totalGradePointv = unitfive * gpfive;
	var totalGradePointvi = unitsix * gpsix;
	var totalGradePointvii = unitseven * gpseven;
	var totalGradePointviii = uniteight * gpeight;
	var totalGradePointix = unitnine * gpnine;
	var totalGradePointx = unitten * gpten;
	var netTotalGradePoint = totalGradePointi + totalGradePointii + totalGradePointiii + totalGradePointiv + totalGradePointv + totalGradePointvi + totalGradePointvii + totalGradePointviii + totalGradePointix + totalGradePointx;
	var totalUnit = unitone + unittwo + unitthree + unitfour + unitfive + unitsix + unitseven + uniteight + unitnine + unitten;
	var cgpa = netTotalGradePoint / totalUnit
document.getElementById('result').innerHTML= (cgpa).toFixed(2);

}
