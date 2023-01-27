// llamar

const btnSobreMi = document.querySelector('#btnSobreMi');
const btnSkills = document.querySelector("#btnSkill");
const btnFormacion = document.querySelector("#btnFormacion");
const btninicio = document.querySelector("#btnInicio");
// llamar clase
const sobreMi = document.querySelector('.about');
const skill = document.querySelector(".skills");
const formacion = document.querySelector(".academic");
const main = document.querySelector(".main");


main.classList.add("visibilidad-on")

// Modificador al hacer click
btninicio.addEventListener("click", () =>{
    main.classList.add("visibilidad-on")
    sobreMi.classList.remove("visibilidad-on")
    skill.classList.remove("visibilidad-on")
    formacion.classList.remove("visibilidad-on")
    skill.classList.remove("visibilidad-on")
});

btnSobreMi.addEventListener("click", () =>{
    sobreMi.classList.add("visibilidad-on")
    main.classList.add("visibilidad-off")
    main.classList.remove("visibilidad-on")
    skill.classList.remove("visibilidad-on")
    formacion.classList.remove("visibilidad-on")
    skill.classList.remove("visibilidad-on")

});
btnSkills.addEventListener("click", () =>{
    skill.classList.add("visibilidad-on")
    sobreMi.classList.remove("visibilidad-on")
    formacion.classList.remove("visibilidad-on")
    main.classList.remove("visibilidad-on")

    
});
btnFormacion.addEventListener("click", () =>{
    formacion.classList.add("visibilidad-on")
    sobreMi.classList.remove("visibilidad-on")
    skill.classList.remove("visibilidad-on")
    main.classList.add("visibilidad-off")
    main.classList.remove("visibilidad-on")


});
