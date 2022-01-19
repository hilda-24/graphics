export class CanvasLocal {

    constructor(g, canvas) {
        this.graphics = g;
        this.rWidth = 6;
        this.rHeight = 4;
        this.maxX = canvas.width - 1;
        this.maxY = canvas.height - 1;
        this.pixelSize = Math.max(this.rWidth / this.maxX, this.rHeight / this.maxY);
        this.centerX = this.maxX / 2;
        this.centerY = this.maxY / 2;
    }
    /*iX(x: number):number{return Math.round(this.centerX + x/this.pixelSize);}
    iY(y: number): number{ return Math.round(this.centerY - y / this.pixelSize); }
    */
    drawLine(x1, y1, x2, y2) {
        this.graphics.beginPath();
        this.graphics.moveTo(x1, y1);
        this.graphics.lineTo(x2, y2);
        this.graphics.closePath();
        this.graphics.stroke();
    }
    /*fx(x:number):number {
      return Math.sin(x*2.5);
    }*/
    paint() {
        this.drawLine(100.5, 100, 500, 100.5);
        this.drawLine(500, 100, 300, 400);
        this.drawLine(300, 400, 100, 100);
        /* this.drawLine(this.iX(-3), this.iY(0), this.iX(3), this.iY(0));
         this.drawLine(this.iX(0), this.iY(2), this.iX(0), this.iY(-2));
     
=======
  constructor(g, canvas) {
      this.graphics = g;
      this.rWidth = 12;
      this.rHeight = 8;
      this.maxX = canvas.width - 1;
      this.maxY = canvas.height - 1;
      this.pixelSize = Math.max(this.rWidth / this.maxX, this.rHeight / this.maxY);
      this.centerX = this.maxX / 12;
      this.centerY = this.maxY / 8 * 7;
  }
  //
  iX(x) { return Math.round(this.centerX + x / this.pixelSize); }
  iY(y) { return Math.round(this.centerY - y / this.pixelSize); }
  drawLine(x1, y1, x2, y2) {
      this.graphics.beginPath();
      this.graphics.moveTo(x1, y1);
      this.graphics.lineTo(x2, y2);
      this.graphics.closePath();
      this.graphics.stroke();
  }
  drawRomboide(x1, y1, x2, y2, x3, y3, x4, y4, color) {
      // Color de relleno
      this.graphics.fillStyle = color;
      // Comenzamos la ruta de dibujo, o path
      this.graphics.beginPath();
      // Mover a la esquina superior izquierda
      this.graphics.moveTo(x1, y1);
      // Dibujar la línea hacia la derecha
      this.graphics.lineTo(x2, y2);
      // Ahora la que va hacia abajo
      this.graphics.lineTo(x3, y3); // A 80 porque esa es la altura
      // La que va hacia la izquierda
      this.graphics.lineTo(x4, y4);
      
      // Y dejamos que la última línea la dibuje JS
      this.graphics.closePath();
      // Hacemos que se dibuje
      this.graphics.stroke();
      // Lo rellenamos
      this.graphics.fill();
  }
  drawface(x1,y1,x2,y2,x3,y3,x4,y4,x5,y5,x6,y6,x7,y7,x8,y8,color){
    this.graphics.fillStyle = color;
    this.graphics.beginPath();
    this.graphics.moveTo(x1, y1);
    this.graphics.lineTo(x2, y2);
    this.graphics.lineTo(x3, y3);
    this.graphics.lineTo(x4, y4);
    this.graphics.lineTo(x5, y5);
    this.graphics.lineTo(x6, y6);
    this.graphics.lineTo(x7, y7);
    this.graphics.lineTo(x8, y8);

    this.graphics.closePath();
    // Hacemos que se dibuje
    this.graphics.stroke();
    this.graphics.fill();
  }
  maxH(h) {
      let max = h[0];
      for (let i = 1; i < h.length; i++) {
          if (max < h[i])
              max = h[i];
      }
      //
      let res;
      let pot = 10;
      //se calcula la potencia de 10 mayor al max para redondear el maximo de la grafica.
      while (pot < max) {
          pot *= 10;
      }
      pot /= 10;
      res = Math.ceil(max / pot) * pot;
      return res;
  }
  rgbToHex(r, g, b) {
      return "#" + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1);
  }
  hexToRgb(hex) {
      let bigint = parseInt(hex.slice(1), 16);
      let r = (bigint >> 16) & 255;
      let g = (bigint >> 8) & 255;
      let b = bigint & 255;
      return ("rgb(" + r + "," + g + "," + b + ")");
  }
  drawHexface(x1, y1, width, height, r, g, b) {
      let unidad = width;
      this.drawRomboide(x1, y1 - height, x1 + width * 0.5, y1 - height - unidad * 0.2, x1 + width * 0.5, y1 - unidad * 0.2, x1, y1, "rgb(" + r + "," + g + "," + b + ")");
      this.drawRomboide(x1, y1 - height, x1 - width * 0.5, y1 - height - unidad * 0.2, x1 - width * 0.5, y1 - unidad * 0.2, x1, y1, "rgb(" + (r - 20) + "," + (g + 20) + "," + b + ")");
      this.drawRomboide(x1 + width * 0.5, y1 - height - unidad * 0.2, x1 + width * 0.75, y1 - height - unidad * 0.5, x1 + width * 0.75, y1 - unidad * 0.5, x1 + width * 0.5, y1 - unidad * 0.2, "rgb(" + (r - 50) + "," + (g + 40) + "," + b + ")");
      this.drawRomboide(x1 - width * 0.5, y1 - height - unidad * 0.2, x1 - width * 0.75, y1 - height - unidad * 0.5, x1 - width * 0.75, y1 - unidad * 0.5, x1 - width * 0.5, y1 - unidad * 0.2, "rgb(" + (r - 50) + "," + (g + 40) + "," + b + ")");
  }
  

  paint() {
      let h = [160, 120, 70, 20];
      //let h = [19, 10, 16, 2];
      let maxEsc;
      let colors = ['Magenta', 'Red', 'Green', 'Yellow'];
      maxEsc = this.maxH(h);
      this.graphics.strokeStyle = 'black';
      this.graphics.fillStyle = colors[0];
      this.drawLine(this.iX(0), this.iY(0), this.iX(8), this.iY(0));
      this.drawLine(this.iX(0), this.iY(0), this.iX(0), this.iY(6));
      //las 6 unidades se dividen entre 4 periodos de lineas cada una 
      //representara una escala de 1/4 del total maximo
       let i = 0;
       for (let y = 0.6; y <= 6; y += 1.35){
         this.drawLine(this.iX(0.6), this.iY(y), this.iX(8), this.iY(y));
         this.drawLine(this.iX(0), this.iY(y - 0.6), this.iX(0.6), this.iY(y));
         this.graphics.strokeText((maxEsc*i/4)+"",this.iX(-0.5), this.iY(y-0.7));
         i++;
       }
      this.drawLine(this.iX(0), this.iY(0), this.iX(0), this.iY(6));
      //this.drawLine(this.iX(2), this.iY(0), this.iX(2), this.iY(6));
      this.graphics.strokeStyle = 'black';
      let ind = 0;
      let uno=255;
          let dos=0;
          let tres=255;
      
        this.drawHexface(this.iX(1.3), this.iY(6 * h[ind] / maxEsc), this.iX(1) - this.iX(0), this.iY(6 * h[ind] / maxEsc) - this.iY(0), uno, dos, tres);
        ind++;
        this.drawHexface(this.iX(3.3), this.iY(6 * h[ind] / maxEsc), this.iX(1) - this.iX(0), this.iY(6 * h[ind] / maxEsc) - this.iY(0), uno, dos, tres);
        ind++;
        this.drawHexface(this.iX(5.3), this.iY(6 * h[ind] / maxEsc), this.iX(1) - this.iX(0), this.iY(6 * h[ind] / maxEsc) - this.iY(0), uno, dos, tres);
        ind++;
        this.drawHexface(this.iX(7.3), this.iY(6 * h[ind] / maxEsc), this.iX(1) - this.iX(0), this.iY(6 * h[ind] / maxEsc) - this.iY(0), uno, dos, tres);
        let r=255; let g=0; let b=255;
        
        this.drawface(this.iX(0.53), this.iY(5.33),this.iX(0.8),this.iY(5),this.iX(1.3),this.iY(4.8), this.iX(1.8),this.iY(5),
        this.iX(2.06), this.iY(5.3),this.iX(1.8),this.iY(5.6),this.iX(1.3),
        this.iY(5.76),this.iX(0.8),this.iY(5.6),"rgb(" + r + "," + g + "," + b + ")");
        let a=2;
        let c=1.20;
        
      for(let i=1.3; i<=4;){  
        this.drawface(
          this.iX(0.53+a),this.iY(5.33-c),this.iX(0.8+a),this.iY(5-c),this.iX(1.3+a),this.iY(4.8-c),this.iX(1.8+a),this.iY(5-c),
          this.iX(2.06+a),this.iY(5.3-c),this.iX(1.8+a),this.iY(5.6-c),this.iX(1.3+a),this.iY(5.76-c),this.iX(0.8+a), this.iY(5.6-c),
            "rgb(" + r + "," + g + "," + b + ")");          
          i++;
          a=a+2;
          c=c+1.5;
      } 

>>>>>>> Stashed changes
     
         //dibuja la cuadricula
         /*this.graphics.strokeStyle = 'lightgray';
         for (let x = -3; x <= 3; x+=0.25){
           this.drawLine(this.iX(x), this.iY(-2), this.iX(x), this.iY(2));
         }
         for (let y = -2; y <= 2; y+=0.25){
           this.drawLine(this.iX(-3), this.iY(y), this.iX(3), this.iY(y));
         }
         //dibuja las divisiones
         this.graphics.strokeStyle = 'black';
         for (let x = -3; x <= 3; x++){
           this.drawLine(this.iX(x), this.iY(-0.1), this.iX(x), this.iY(0.1));
           this.graphics.strokeText(x+"", this.iX(x-0.1), this.iY(-0.2));
         }
         for (let y = -2; y <= 2; y++){
           this.drawLine(this.iX(-0.1), this.iY(y), this.iX(0.1), this.iY(y));
         }
         this.graphics.strokeText("X", this.iX(2.9), this.iY(0.2));
         this.graphics.strokeText("Y", this.iX(-0.2), this.iY(1.8));
         //dibujar la funcion
         this.graphics.strokeStyle = 'red';
         let paso: number = 0.1;
         for (let x = -3; x <= 3; x+=paso){
           this.drawLine(this.iX(x), this.iY(this.fx(x)), this.iX(x+paso), this.iY(this.fx(x+paso)));
         }
         /*this.graphics.strokeStyle = 'red';
         this.drawLine(this.iX(0), this.iY(0), this.iX(2), this.iY(0));
         this.drawLine(this.iX(2), this.iY(0), this.iX(1), this.iY(1.5));
         this.drawLine(this.iX(1), this.iY(1.5), this.iX(0), this.iY(0));*/
        //this.drawLine(320, 40, 480, 400);
        //this.drawLine(320, 40, 140, 400);
        //this.drawLine(140, 400, 480, 400);
        /*let lado = 1;
        let side = 0.95 * lado;
        let sideHalf = 0.5 * side;
        let xCenter = 320;
        let yCenter = 240;
          
        let h = sideHalf * Math.sqrt(3);
        let xA, yA, xB, yB, xC, yC,
        xA1, yA1, xB1, yB1, xC1, yC1, p, q;
         q = 0.05;
        p = 1 - q;
        /*xA = xCenter - sideHalf;
        yA = yCenter - 0.5 * h;
        xB = xCenter + sideHalf;
        yB = yA;
        xC = xCenter;
        yC = yCenter + 0.5 * h; *
    
        for (let m = 0; m < 4; m++){
          for (let n = 0; n < 4; n++){
            xA = 1+n*lado - sideHalf;
            yA = 1+m*lado - 0.5 * h;
            xB = 1+n*lado+ sideHalf;
            yB = yA;
            xC = 1+n*lado;
            yC = 1+m*lado + 0.5 * h;
            for (let i = 0; i < 20; i++){
              this.drawLine(this.iX(xA), this.iY(yA), this.iX(xB), this.iY(yB));
              this.drawLine(this.iX(xB), this.iY(yB), this.iX(xC), this.iY(yC));
              this.drawLine(this.iX(xC), this.iY(yC), this.iX(xA), this.iY(yA));
              xA1 = p * xA + q * xB;
              yA1 = p * yA + q * yB;
              xB1 = p * xB + q * xC;
              yB1 = p * yB + q * yC;
              xC1 = p * xC + q * xA;
              yC1 = p * yC + q * yA;
              xA = xA1; xB = xB1; xC = xC1;
              yA = yA1; yB = yB1; yC = yC1;
            }
          }
        }
    
        /* for (let i = 0; i < 50; i++){
            this.drawLine(xA, yA, xB, yB);
            this.drawLine(xB, yB, xC, yC);
            this.drawLine(xC, yC, xA, yA);
            xA1 = p * xA + q * xB;
            yA1 = p * yA + q * yB;
            xB1 = p * xB + q * xC;
            yB1 = p * yB + q * yC;
            xC1 = p * xC + q * xA;
            yC1 = p * yC + q * yA;
            xA = xA1; xB = xB1; xC = xC1;
            yA = yA1; yB = yB1; yC = yC1;
        } */
    }
}
