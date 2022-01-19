importar  {  Point3D  }  desde  './Point3D.js' ;

exportar  clase  Rota3D {
  estático  r11 : número ;  estático  r12 : número ;  estático  r13 : número ;
  estático  r21 : número ;  r22 estático  : número ; estático r23 : número ;  
  estático  r31 : número ;  estático  r32 : número ;  estático  r33 : número ;
  estático  r41 : número ;  estático  r42 : número ;  estático  r43 : número ;

/* El método initRotate calcula la matriz de rotación general
            | r11 r12 r13 0 |
        R = | r21 r22 r23 0 |
            | r31 r32 r33 0 |
            | r41 r42 r43 1 |
   para ser usado como [x1 y1 z1 1] = [xyz 1] R
   por el método 'rotar'.
   El punto (x1, y1, z1) es la imagen de (x, y, z).
   La rotación tiene lugar alrededor del eje dirigido.
   AB y por el ángulo alfa.
*/
   initRotate estático ( a : Point3D ,  b : Point3D ,  alpha : number ) : void {
    Sea  v1  =  b . x  -  a . x ,
        v2  =  segundo . y  -  a . y ,
        v3  =  segundo . z  -  a . z ,
        theta  =  Matemáticas . atan2 ( v2 ,  v1 ) ,
        phi  =  Matemáticas . atan2 ( Math . sqrt ( v1  *  v1  +  v2  *  v2 ) ,  v3 ) ;
        esto _ initRotate2 ( a ,  theta ,  phi ,  alfa ) ;
  }

   initRotate2 estático ( a : Point3D ,  theta : número ,  phi : número ,  alfa : número ) : void {
    sea  cosAlpha : número ,  sinAlpha : número ,  cosPhi : número ,  sinPhi : número ,
      cosTheta : número ,  sinTheta : número ,  cosPhi2 : número ,  sinPhi2 : número ,
      cosTheta2 : número ,  sinTheta2 : número ,  pi ,  c : número ,
      a1  =  un . x ,  a2  =  un . y ,  a3  =  un . z ;
      cosPhi  =  Matemáticas . cos ( fi ) ;  senPhi  =  Matemáticas . pecado ( fi ) ;
      cosPhi2  =  cosPhi  *  cosPhi ;  sinPhi2  =  sinPhi  *  sinPhi ;
      cosTheta  =  Matemáticas . cos ( theta ) ;
      sinTheta  =  Matemáticas . pecado ( theta ) ;
      cosTheta2  =  cosTheta  *  cosTheta ;
      sinTheta2  =  sinTheta  *  sinTheta ;
      cosAlfa  =  Matemáticas . cos ( alfa ) ;
      sinAlfa  =  Matemáticas . pecado ( alfa ) ;
      c  =  1.0  -  cosAlfa ;
      esto _ r11  =  cosTheta2  *  ( cosAlpha  *  cosPhi2  +  sinPhi2 )
            +  cosAlfa  *  sinTheta2 ;
      esto _ r12  =  sinAlpha  *  cosPhi + c *  sinPhi2  *  cosTheta  *  sinTheta ;
      esto _ r13  =  sinPhi  *  ( cosPhi  *  cosTheta * c -  sinAlpha  *  sinTheta ) ;
      esto _ r21  =  sinPhi2  *  cosTheta  *  sinTheta * c - sinAlpha  *  cosPhi ;
      esto _ r22  =  sinTheta2  *  ( cosAlpha  *  cosPhi2  +  sinPhi2 )
            +  cosAlfa  *  cosTeta2 ;
      esto _ r23  =  sinPhi  *  ( cosPhi  *  sinTheta * c +  sinAlpha  *  cosTheta ) ;
      esto _ r31  =  sinPhi  *  ( cosPhi  *  cosTheta * c +  sinAlpha  *  sinTheta ) ;
      esto _ r32  =  sinPhi  *  ( cosPhi  *  sinTheta * c -  sinAlpha  *  cosTheta ) ;
      esto _ r33  =  cosAlfa  *  sinPhi2  +  cosPhi2 ;
      esto _ r41  =  a1  -  a1  *  esto . r11  -  a2  *  esto . r21  -  a3  *  esto . r31 ;
      esto _ r42  =  a2  -  a1  *  esto . r12  -  a2  *  esto . r22  -  a3  *  esto . r32 ;
      esto _ r43  =  a3  -  a1  *  esto . r13  -  a2  *  esto . r23  -  a3  *  esto . r33 ;
  }

   rotación estática ( p : Point3D ) : Point3D {
    devolver  nuevo  Point3D (
        pág . x  *  esto . r11  +  pag . y  *  esto . r21  +  pag . z  *  esto . r31  +  esto . r41 ,
        pág . x  *  esto . r12  +  pag . y  *  esto . r22  +  pag . z  *  esto . r32  +  esto . r42 ,
        pág . x  *  esto . r13  +  pag . y  *  esto . r23  +  pag . z  *  esto . r33  +  esto . r43 ) ;
  }
}