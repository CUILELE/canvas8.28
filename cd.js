var wit = 1024
var hei = 768
var rids = 8
var canvas = document.getElementById('canvas');
var context = canvas.getContext('2d');
var mt = 60;
var ml = 30;
var enTime = new Date(2016,7,29,20,26,29);
var newTime = 0;

canvas.width = wit
canvas.height = hei

//绘制过程
setInterval(function (){
	ronder(context)
	update()
},100)
function update(){
	var nextShowTimeSeconds = jisuanhoushijian();
	
	var nhours = parseInt(nextShowTimeSeconds/3600);
	var nminuts = parseInt((nextShowTimeSeconds-nhours*3600)/60);
	var nseconds = nextShowTimeSeconds%60
	
	var chours = parseInt(newTime/3600);
	var cminuts = parseInt((newTime-chours*3600)/60);
	var cseconds = newTime%60
	alert(1)
	if(nseconds != cseconds){
		
		newTime = nextShowTimeSeconds;
	}
	
}
function jisuanhoushijian(){
	var curtime = new Date();
	var ret = enTime.getTime() - curtime.getTime();
	ret = Math.round(ret/1000);
	return ret>=0?ret:0;
}
function ronder(cxt){
	cxt.clearRect(0,0,wit,hei)
	newTime = jisuanhoushijian();
	var hours = parseInt(newTime/3600);
	var minuts = parseInt((newTime-hours*3600)/60);
	var seconds = newTime%60
	renderDigit(ml,mt,parseInt(hours/10),cxt)
	renderDigit(ml+15*(rids+1),mt,parseInt(hours%5),cxt)
	renderDigit(ml+30*(rids+1),mt,10,cxt)
	renderDigit(ml+39*(rids+1),mt,parseInt(minuts/10),cxt);
	renderDigit(ml+54*(rids+1),mt,parseInt(minuts%10),cxt);
	renderDigit(ml+69*(rids+1),mt,10,cxt)
	renderDigit(ml+78*(rids+1),mt,parseInt(seconds/10),cxt);
	renderDigit(ml+93*(rids+1),mt,parseInt(seconds%10),cxt);
}

function renderDigit(x,y,num,cxt){
	cxt.fillStyle = 'blue'
	
	for(var i=0;i<digit[num].length;i++){
		for(var j=0;j<digit[num][i].length;j++){
			if(digit[num][i][j] == 1){
				cxt.beginPath();
				cxt.arc(x+j*2*(rids+1)+(rids+1),y+i*2*(rids+1)+(rids+1),rids,0,2*Math.PI,anticlockwise = false);
				cxt.closePath();
				cxt.fill();
			}
		}
	}
}
