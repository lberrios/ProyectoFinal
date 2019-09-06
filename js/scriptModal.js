const servicio1 = document.getElementById('contenedorServicio1');
const servicio2 = document.getElementById('contenedorServicio2');
const servicio3 = document.getElementById('contenedorServicio3');

const modal = document.getElementById('modalServicio');
const cerrar = document.getElementById('botonCerrarModal');

servicio1.addEventListener('click', () => {
    document.getElementById("tituloServicio").innerHTML = "Notariado"
    document.getElementById("descripcionServicio").innerHTML = "Elaboramos escrituras para compraventa de bienes y de constitución de sociedades. Realizamos permisos para salida al extranjero de menores de edad y nacionalización de personas, así como trámites para matrimonios y divorcios."
    modal.setAttribute('open', 'true')
});

cerrar.addEventListener('click',() => {
    modal.removeAttribute('open')
});

servicio2.addEventListener('click', () => {
    document.getElementById("tituloServicio").innerHTML = "Abogacía"
    document.getElementById("descripcionServicio").innerHTML = "Realizamos trámites judiciales tales como: accidentes de tránsitos, asaltos, robos, homicidios, entre otros, ante los juzgados locales y de distrito como parte defensora y/u/o acusadora ante las instancias respectivas. Llevamos juicios civíles, penales y de familia, demandas de embargo judicial, así como todo tipo de trámite laboral."
    modal.setAttribute('open', 'true')
});

cerrar.addEventListener('click',() => {
    modal.removeAttribute('open')
});

servicio3.addEventListener('click', () => {
    document.getElementById("tituloServicio").innerHTML = "Asesoría Legal"
    document.getElementById("descripcionServicio").innerHTML = "Proporcionamos asesoramiento legal en materia de: recursos humanos, demandas laborales, formulación y elaboración de convenios colectivos y formulación y elaboración de reglamentos interno de trabajo, así como de contratos laborales determinados, indeterminados y de servicios profesionales."
    modal.setAttribute('open', 'true')
});

cerrar.addEventListener('click',() => {
    modal.removeAttribute('open')
});


