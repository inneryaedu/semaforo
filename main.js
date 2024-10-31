class Semaforo{
    constructor(tiempo_rojo, tiempo_verde, tiempo_anaranjado){
        this.color_rojo=false
        this.tiempo_rojo=tiempo_rojo
        this.color_verde=false
        this.tiempo_verde=tiempo_verde
        this.color_anaranjado=false
        this.tiempo_anaranjado=tiempo_anaranjado
        this.tiempo_activo=1
        this.tiempo_cambio=1
    }
    cambiarColor(){
        if (this.tiempo_activo==this.tiempo_cambio){
            if (this.color_rojo==true && this.color_verde==false && this.color_anaranjado==false){
                this.color_rojo=false
                this.color_verde=true
                this.color_anaranjado=false
                this.tiempo_cambio=this.tiempo_verde
                this.tiempo_activo=0
            }else if (this.color_rojo==false && this.color_verde==true && this.color_anaranjado==false){
                this.color_rojo=false
                this.color_verde=false
                this.color_anaranjado=true
                this.tiempo_cambio=this.tiempo_anaranjado
                this.tiempo_activo=0   
            }else if (this.color_rojo==false && this.color_verde==false && this.color_anaranjado==true){
                this.color_rojo=true
                this.color_verde=false
                this.color_anaranjado=false
                this.tiempo_cambio=this.tiempo_rojo
                this.tiempo_activo=0
            }else{
                this.color_rojo=false
                this.color_verde=false
                this.color_anaranjado=true
                this.tiempo_cambio=this.tiempo_anaranjado
                this.tiempo_activo=0
            }
        }
        this.tiempo_activo++
    }
}

var semaforo=new Semaforo(8,6,2);
const intervalId=setInterval(() => {
    const div_rojo=document.getElementById("rojo");
    const div_verde=document.getElementById("verde");
    const div_anaranjado=document.getElementById("anaranjado");
    //actualizando los booleans del semaforo
    semaforo.cambiarColor()
    console.log(semaforo)
    //actualizando los colores de los divs en html
    if (semaforo.color_rojo==true){
        div_rojo.style.backgroundColor="red";
        div_rojo.textContent=""+(semaforo.tiempo_cambio-semaforo.tiempo_activo+1)
    }else{
        div_rojo.style.backgroundColor="black";
        div_rojo.textContent=""
    }
    if (semaforo.color_verde==true){
        div_verde.style.backgroundColor="green";
        div_verde.textContent=""+(semaforo.tiempo_cambio-semaforo.tiempo_activo+1)
    }else{
        div_verde.style.backgroundColor="black";
        div_verde.textContent=""
    }
    if (semaforo.color_anaranjado==true){
        div_anaranjado.style.backgroundColor="orange";
        div_anaranjado.textContent=""+(semaforo.tiempo_cambio-semaforo.tiempo_activo+1)
    }else{
        div_anaranjado.style.backgroundColor="black";
        div_anaranjado.textContent=""
    }
},1000);

