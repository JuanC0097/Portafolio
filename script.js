let menuVisible = false;
//Funcion que oculta o muestra el menu
function mostrarOcultarMenu(){
    if(menuVisible){
        document.getElementById("nav").classList= "";
        menuVisible = false;
    }else{
        document.getElementById("nav").classList= "responsive";
        menuVisible =true;
    }
}

function seleccionar(){
    //oculto el menu una vez que selecciono una opcion
    document.getElementById("nav").classList="";
    menuVisible = false;
}

//Funcion que aplica animaciones a las skills
function efectoHabilidades(){
    var skills = document.getElementById("skills");
    var distancia_skills = window.innerHeight - skills.getBoundingClientRect().top;
    if(distancia_skills >= 300){
        let habilidades = document.getElementsByClassName("progreso");
        habilidades[0].classList.add("javaee");
        habilidades[1].classList.add("javapoo");
        habilidades[2].classList.add("jpahibernate");
        habilidades[3].classList.add("springboot");
        habilidades[4].classList.add("sqlmysql");
        habilidades[5].classList.add("gitgithub");
        habilidades[6].classList.add("businessagility");
        habilidades[7].classList.add("desarrollopersonal");
        habilidades[8].classList.add("trabajoenequipo");
        habilidades[9].classList.add("pensamientologico");
        habilidades[10].classList.add("pensamientocritico");
        habilidades[11].classList.add("dedicacion");
        habilidades[12].classList.add("comunicacionasertiva");
    }
}

//Detectar el scrolling para aplicar la animacion
window.onscroll = function(){
    efectoHabilidades();
}