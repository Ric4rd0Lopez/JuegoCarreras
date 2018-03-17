let carro1
let carro2
let fondo
let carro1X = 250
let carro1Y = 127
let carro2X = 250
let carro2Y = 160

let velocidad1
let velocidad2
let direccion = 1
let vuelta = 1
let direccion2 = 1
let vuelta2 = 1
let player1 = 0
let player2 = 0



function preload(){

	fondo = loadImage(`img/pista1.png`)
	carro1 = loadImage(`img/car3.png`)
	carro2 = loadImage(`img/carro0.png`)
}
	
 function setup() {
	createCanvas(windowWidth, windowHeight);
	//frameRate(60)
	frameRate(60)
}

function draw() {

	velocidades()
	background(fondo)

if (player1<=3 && player2<=3) {
		switch(direccion){

			case 1:
			
				if(carro1X<=995)image(carro1,carro1X+=velocidad1,carro1Y)
				if(carro1X>=995)direccion=2
			
			break;

			case 2:
				if(carro1Y<=310){
					switch(vuelta){
						case 1:
							push()
							translate(carro1X+=6,carro1Y+=5)
							rotate(340)
							image(carro1,0,0)		
							pop()
							if(carro1X>=890 && carro1Y>=190)vuelta=2
						break;
						case 2:
							push()
							translate(carro1X,carro1Y+=5)
							rotate(20)
							image(carro1,0,0)		
							pop()
							if(carro1Y>=230)vuelta=3
						break;
						case 3:
							push()
							translate(carro1X-=5,carro1Y+=5)
							rotate(40)
							image(carro1,0,0)	
							pop()
						break;
					}
				}else{
					direccion=3
					vuelta=1
				}
			break;

			case 3:
				push()
				translate(carro1X-=velocidad1,carro1Y+5)
				rotate(110)
				image(carro1,0,0)		
				pop()
				if(carro1X<=215)direccion=4
			break;

			case 4:
				if(carro1X<=215){
					switch(vuelta){
						case 1:
							push()
							translate(carro1X-=3,carro1Y-=3)
							rotate(180)
							image(carro1,0,0)	
							pop()
							if(carro1X<=170)vuelta=2
						break;

						case 2:
							push()
							translate(carro1X-=4,carro1Y-=3)
							rotate(180)
							image(carro1,0,0)	
							pop()
							if(carro1X<=140)vuelta=3

						break;


						case 3:
							push()
							translate(carro1X,carro1Y-=5)
							rotate(-190)
							image(carro1,0,0)		
							pop()
							if(carro1Y<=200)vuelta=4
						break;
						case 4:

							push()
							translate(carro1X+=4,carro1Y-=3)
							rotate(-170)
							image(carro1,0,0)	
							pop()
							if(carro1X>=215){
								direccion=1
								carro1X = 250
								carro1Y = 127
								vuelta=1
								player1++
							}
						break;
					}
				}
			break;

		}




		switch(direccion2){

			case 1:

				if(carro2X<=975)image(carro2,carro2X+=velocidad2,carro2Y)
				if(carro2X>=975) direccion2=2
			break;

			case 2:
				if(carro2X>=975){
					switch(vuelta2){
						case 1:
							push()
							translate(carro2X+=6,carro2Y+=5)
							rotate(340)
							image(carro2,0,0)		
							pop()
							if(carro2X>=890 && carro2Y>=190)vuelta2=2
						break;
						case 2:
							push()
							translate(carro2X,carro2Y+=5)
							rotate(20)
							image(carro2,0,0)		
							pop()
							if(carro2Y>=230)vuelta2=3
						break;
						case 3:
							push()
							translate(carro2X-=5,carro2Y+=5)
							rotate(40)
							image(carro2,0,0)	
							pop()
						break;
					}
				}else{
					direccion2=3
					vuelta2=1
				}
			break;
		
			case 3:
				push()
				translate(carro2X-=velocidad2,carro2Y+10)
				rotate(110)
				image(carro2,0,0)		
				pop()
				if(carro2X<=240)direccion2=4
			break;

			case 4:
				if(carro2X<=240){
					switch(vuelta2){
						case 1:
							push()
							translate(carro2X-=3,carro2Y-=3)
							rotate(180)
							image(carro2,0,0)	
							pop()
							if(carro2X<=240)vuelta2=2
						break;

						case 2:
							push()
							translate(carro2X-=4,carro2Y-=3)
							rotate(180)
							image(carro2,0,0)	
							pop()
							if(carro2X<=170)vuelta2=3

						break;


						case 3:
							push()
							translate(carro2X,carro2Y-=5)
							rotate(-190)
							image(carro2,0,0)		
							pop()
							if(carro2Y<=200)vuelta2=4
						break;
						case 4:

							push()
							translate(carro2X+=4,carro2Y-=3)
							rotate(-170)
							image(carro2,0,0)	
							pop()
							if(carro2X>=215){
								direccion2=1
								carro2X = 250
								carro2Y = 160
								vuelta2=1
								player2++
							}
						break;
					}
				}
			break;
		}

		showScore()
	}
	else{
		ganador()
	}

}	

const velocidades = function(){

	velocidad1 = random(27)
	velocidad2 = random(20)
}

const showScore = function(){
	fill('black')
	textSize(50)
	text(player1, width * 0.36, 70)
	text(player2, width * 0.62, 70)

}

const ganador = function(){
	fill('black')
	textSize(50)

	if(player1>player2){
		text(`Ganador Amarrillo`, width * 0.36, 70)

	}else{
		text(`Ganador Rojo`, width * 0.36, 70)
	}

}
