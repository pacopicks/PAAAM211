Class inicio PAM { 

voidreglamentopoo () {
system.out.println( "Respeto");
system.out.println( "Importante participacion activa en orden");
system.out.println ("No se entregan trabajos incompletos");
system.out.println("No se aplican examenes fuera de tiempo");
system.out.println("Plagio de trabajos =0 para todos");
system.out.println("calificacion maxima en final 8");
}

voidlineaminetosclassroom() {
system.out.println("entrega los trabajos para su revision");
system.out.println("engrega en pdf");
system.out.println("avisos en clase");
system.out.println("entregas autorizadas con retraso , 5 max");
}

voidFechasdeparciales() {
system.out.println("primer parcial 29/09/25");
system.out.println("segundo parcial 03/1025");
system.out.println("tercer parcial 01/12/25");
sytem.out.println("08/12/25");
}

voidPorcentajesporparcial(){
system.out.println("primer parcial evidencia de conocimiento 40%, evidencia de desempeño 20%, evidencia de producto 30%, proyecto integrador 10%");
system.out.println("segundo parcial evidencia de conocimiento 40%, evidencia de desempeño 20%, evidencia de producto 20%, proyecto integrador 20%");
system.out.println("tercer parcial evidencia de conocimiento 20%, evidencia de desempeño 10%, evidencia de producto 40%, proyecto integrador 30%");
}

public static void main (String [] args ){
InicioPAM inicio = new inicioPAM();
Scanner scanner = new Scanner(System.in)
int option =0;
do{
system.out.println("menu");
system.out.println("1 reglamento poo");
system.out.println("2 lineamientos classroom");
system.out.println("3 fechas parciales");
system.out.println("4 porcentajes parcial");
system.out.println("5 salir");
system.out.println("elige la opcion ");

opcion=scaner.nextInt();

switch(opcion){
case 1:
inicio.reglamentopoo();
break;
case 2:
inicio.lineaminetosclassroom();
break;
case 3:
inicio.Fechasde
 


