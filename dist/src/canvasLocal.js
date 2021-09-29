export class CanvasLocal {
    constructor(g, canvas) {
        this.graphics = g;
        this.rWidth = 10;
        this.rHeight = 10;
        this.maxX = canvas.width - 1;
        this.maxY = canvas.height - 1;
        this.pixelSize = Math.max(this.rWidth / this.maxX, this.rHeight / this.maxY);
        this.centerX = this.maxX / 2;
        this.centerY = this.maxY / 2;
    }
    drawLine(x1, y1, x2, y2) {
        this.graphics.beginPath();
        this.graphics.moveTo(x1, y1);
        this.graphics.lineTo(x2, y2);
        this.graphics.closePath();
        this.graphics.stroke();
    }
   
    paint() {
        let xa = 100;
        let yb = 400;
        let xc = 500;
        let yd = 400;
        for (let i = 1; i < 9;) {
            this.drawLine(xa, yb, xc, yd);
            xa = xa + 26;
            yb = yb - 13;
            xc = xc - 26;
            yd = yd - 13;
            i++;
        }



        xa = 100;
        yb = 400;
        xc = 303;
        yd = 57;
        for (let a = 1; a < 9;) {
            this.drawLine(xa, yb, xc, yd);
            xa=xa+26;
            yb=yb-13;
            yd=yd+26;
            a++;
        }
        xa = 303;
        yb = 57;
        xc = 500;
        yd = 400;
        for (let a = 1; a < 9;) {
          this.drawLine(xa, yb, xc, yd);
           // A=A+25;
           yb=yb+26;         
           xc=xc-26;
           yd=yd-13;
            a++;
        } 
 
    }
}
