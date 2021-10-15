
export class CanvasLocal {
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
        this.drawHexface(this.iX(3.3), this.iY(6 * h[ind] / maxEsc), this.iX(1) - this.iX(0), this.iY(6 * h[ind] / maxEsc) - this.iY(0), 254, 0, 0);
        ind++;
        this.drawHexface(this.iX(5.3), this.iY(6 * h[ind] / maxEsc), this.iX(1) - this.iX(0), this.iY(6 * h[ind] / maxEsc) - this.iY(0), 0, 102, 0);
        ind++;
        this.drawHexface(this.iX(7.3), this.iY(6 * h[ind] / maxEsc), this.iX(1) - this.iX(0), this.iY(6 * h[ind] / maxEsc) - this.iY(0), 255, 255, 40);
        let r=255; let g=0; let b=255;
        
        this.drawface(this.iX(0.53), this.iY(5.33),this.iX(0.8),this.iY(5),this.iX(1.3),this.iY(4.8), this.iX(1.8),this.iY(5),
        this.iX(2.06), this.iY(5.3),this.iX(1.8),this.iY(5.6),this.iX(1.3),
        this.iY(5.76),this.iX(0.8),this.iY(5.6),"rgb(" + r + "," + g + "," + b + ")");
        let a=2;
        let c=1.20;
        r=254; g=0; b=0;
      for(let i=1.3; i<=4;){
        
        
        this.drawface(
          this.iX(0.53+a),this.iY(5.33-c),this.iX(0.8+a),this.iY(5-c),this.iX(1.3+a),this.iY(4.8-c),this.iX(1.8+a),this.iY(5-c),
          this.iX(2.06+a),this.iY(5.3-c),this.iX(1.8+a),this.iY(5.6-c),this.iX(1.3+a),this.iY(5.76-c),this.iX(0.8+a), this.iY(5.6-c),
            "rgb(" + r + "," + g + "," + b + ")");
            r=0; g=102; b=0;
            if(i>=2){
              r=255;
              b=40;
              g=255;
            }
          i++;
          a=a+2;
          c=c+1.5;
      } 

     
      ind = 0;
      for (let x = 0.5; x < 8; x += 2) {
          this.graphics.strokeText(colors[ind++], this.iX(x + 0.5), this.iY(-0.5));
      }
      for (let y = 0; y < h.length; y++) {
          this.graphics.strokeText(colors[y], this.iX(9), this.iY(5 - y));
          this.graphics.fillStyle = colors[y];
          this.graphics.fillRect(this.iX(8.5), this.iY(5 - y), 10, 10);
      }
    
  }
}