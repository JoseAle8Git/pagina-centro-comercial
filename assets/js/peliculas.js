document.addEventListener('DOMContentLoaded', function() {
    fetch('assets/data/peliculas.JSON').then(response => response.json()).then(data => {
    let contenedor = document.getElementById('cartelera');
    data.forEach(pelicula => {
        let horarios = pelicula.horarios.map(h => `<span class="badge bg-secondary me-1">${h}</span>`).join('');
        let tarjeta = 
        `<article class="col-12 col-md-6 col-lg-4 aparecer">
            <figure class="card h-100 shadow">
                <img src="${pelicula.cartel}" class="card-img-top" alt="Cartel de ${pelicula.titulo}">
                <figcaption class="card-body d-flex flex-column">
                    <h5 class="card-title text-center">${pelicula.titulo}</h5>
                    <p class="card-text">${pelicula.sinopsis}</p>
                    <div class="mb-3">${horarios}</div>
                    <a href="${pelicula.enlaceCompra}" target="_blank" class="btn btn-primary mt-auto">Comprar entrada</a>
                </figcaption>
            </figure>
        </article>`;
        contenedor.innerHTML += tarjeta;
    });
    }).catch(error => {
    console.error("Error al cargar el archivo JSON:", error);
    document.getElementById('cartelera').innerHTML = `<p class="text-danger">No se pudo cargar la cartelera.</p>`;
    });
});
