$(document).ready(function(){
        
    var apiKey = "731e41f"
    var nombrePelicula = "Harry Potter"
    var url = "http://www.omdbapi.com/?apikey=" + apiKey + "&s=" + nombrePelicula;

        let resultado = "";

        /*$.ajax({
            method: 'GET',
            url: url,
            success:function (listaPeliculas){
                console.log(listaPeliculas);
                result = `
                    <img style="float:left" width="200px" heigth="200px" src="${data.Poster}"/>
                    <h2>${data.Title}</h2>
                    <h3>${data.imdbID}</h3>
                    <h3>${data.Year}</h3>
                `;
                $("#resultado").html(listResults);
            }
        })*/

        $.getJSON(url, function(listaPeliculas){
            if (listaPeliculas.Search !== undefined) {
                $.each(listaPeliculas.Search, function(i, pelicula) {
                    resultado += '<div class="pelicula">'
                    resultado += '  <img style="float:left" src="'+ pelicula.Poster + '"/>'
                    resultado += '  <h2>' + pelicula.Title +'</h2>'
                    resultado += '  <p><b>ID en IMDB:</b> ' + pelicula.imdbID +'</p>'
                    resultado += '  <p><b>Año:</b> ' + pelicula.Year +'</p>'
                    /*resultado += `  <div class="estrellas">
                                        <input type="radio" name="puntuacion" id="puntuacion-5">
                                        <label for="puntuacion-5">&#9733;</label>
                                        <input type="radio" name="puntuacion" id="puntuacion-4">
                                        <label for="puntuacion-4">&#9733;</label>
                                        <input type="radio" name="puntuacion" id="puntuacion-3">
                                        <label for="puntuacion-3">&#9733;</label>
                                        <input type="radio" name="puntuacion" id="puntuacion-2">
                                        <label for="puntuacion-2">&#9733;</label>
                                        <input type="radio" name="puntuacion" id="puntuacion-1">
                                        <label for="puntuacion-1">&#9733;</label>
                                    </div>`;*/
                    resultado += '</div>'
                });
            };
            $("#resultado").html(resultado);
        })
})