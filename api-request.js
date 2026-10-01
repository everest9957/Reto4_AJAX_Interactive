$(document).ready(function () {
    $("#anio").text(new Date().getFullYear());

    const API_URL = "https://jsonplaceholder.typicode.com/posts";
    const $loader    = $("#loader");
    const $error     = $("#error");
    const $resultado = $("#resultado");

    function cargarPosts() {
        $error.addClass("oculto").text("");
        $resultado.empty();
        $loader.removeClass("oculto");

        $.ajax({
            url: API_URL,
            method: "GET",
            dataType: "json",
            timeout: 10000,
            success: function (data) {
                $loader.addClass("oculto");
                renderPosts(data.slice(0, 12));
            },
            error: function (xhr, status, error) {
                $loader.addClass("oculto");
                let mensaje = "⚠️ Ocurrió un error al cargar los datos.";
                if (status === "timeout") mensaje = "⏱️ La petición tardó demasiado.";
                else if (xhr.status === 0) mensaje = "🌐 No hay conexión con el servidor.";
                else if (xhr.status === 404) mensaje = "🔍 Recurso no encontrado (404).";
                else if (xhr.status >= 500) mensaje = "🔥 Error del servidor (" + xhr.status + ").";
                $error.text(mensaje + " [" + status + "]").removeClass("oculto");
                console.error("AJAX error:", status, error);
            },
            complete: function () {
                $loader.addClass("oculto");
            }
        });
    }

    function renderPosts(posts) {
        if (!posts || posts.length === 0) {
            $resultado.html('<p class="vacio">No hay publicaciones para mostrar.</p>');
            return;
        }
        let html = '<h2 class="titulo-seccion">📜 Pergaminos del Templo</h2><div class="grid-posts">';
        posts.forEach(function (post) {
            html += '<article class="post-card">'
                 +  '<span class="post-id">#' + post.id + '</span>'
                 +  '<h3 class="post-titulo">' + escapeHtml(post.title) + '</h3>'
                 +  '<p class="post-cuerpo">' + escapeHtml(post.body) + '</p>'
                 +  '</article>';
        });
        html += "</div>";
        $resultado.html(html);
    }

    function escapeHtml(texto) {
        return $("<div>").text(texto).html();
    }

    $("#btn-cargar").on("click", cargarPosts);
    $("#btn-limpiar").on("click", function () {
        $resultado.empty();
        $error.addClass("oculto").text("");
    });
});
