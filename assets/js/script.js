document.addEventListener("DOMContentLoaded", function () {
    // Cargar el contenido del navbar.html en la sección con id "navbar"
    var navbarContainer = document.getElementById("navbar");
    var xhr = new XMLHttpRequest();
  
    xhr.onreadystatechange = function () {
      if (xhr.readyState === XMLHttpRequest.DONE) {
        if (xhr.status === 200) {
          navbarContainer.innerHTML = xhr.responseText;
        } else {
          console.error("Error al cargar el navbar: " + xhr.status);
        }
      }
    };
    xhr.open("GET", "assets/partials/navbar.html", true);
    xhr.send();
});

document.addEventListener('DOMContentLoaded', function () {
    // Cargar el contenido del cta-section.html en la sección con id "cta-section"
    var ctaContainer = document.getElementById('cta-section');
    var xhr = new XMLHttpRequest();
    
    xhr.onreadystatechange = function () {
        if (xhr.readyState === XMLHttpRequest.DONE) {
            if (xhr.status === 200) {
                ctaContainer.innerHTML = xhr.responseText;
            } else {
                console.error('Error al cargar el cta: ' + xhr.status);
            }
        }
    };
    xhr.open('GET', 'assets/partials/cta-section.html', true);
    xhr.send();
});

document.addEventListener('DOMContentLoaded', function () {
    // Cargar el contenido del footer.html en la sección con id "footer"
    var footerContainer = document.getElementById('footer');
    var xhr = new XMLHttpRequest();
    
    xhr.onreadystatechange = function () {
        if (xhr.readyState === XMLHttpRequest.DONE) {
            if (xhr.status === 200) {
                footerContainer.innerHTML = xhr.responseText;
            } else {
                console.error('Error al cargar el footer: ' + xhr.status);
            }
        }
    };
    xhr.open('GET', 'assets/partials/footer.html', true);
    xhr.send();
});

document.addEventListener('DOMContentLoaded', function () {
    var imageContainer = document.querySelector('.image-container');
    var images = document.querySelectorAll('.image-container img');
    var currentIndex = 0;

    setInterval(function () {
        // Establece la clase fadeIn a la imagen actual y fadeOut a las demás
        images.forEach(function (image, index) {
            if (index === currentIndex) {
                image.classList.add('animate__fadeIn');
                image.classList.remove('animate__fadeOut');
            } else {
                image.classList.remove('animate__fadeIn');
                image.classList.add('animate__fadeOut');
            }
        });

        // Incrementa el índice actual y vuelve a 0 si es mayor que el número de imágenes
        currentIndex = (currentIndex + 1) % images.length;
    }, 3000);  // Cambia cada 3 segundos (ajusta el tiempo según tus necesidades)
});

document.addEventListener('DOMContentLoaded', function () {
    var imageContainer = document.querySelector('.image-container2');
    var images = document.querySelectorAll('.image-container2 img');
    var currentIndex = 0;

    setInterval(function () {
        // Establece la clase fadeIn a la imagen actual y fadeOut a las demás
        images.forEach(function (image, index) {
            if (index === currentIndex) {
                image.classList.add('animate__fadeIn');
                image.classList.remove('animate__fadeOut');
            } else {
                image.classList.remove('animate__fadeIn');
                image.classList.add('animate__fadeOut');
            }
        });

        // Incrementa el índice actual y vuelve a 0 si es mayor que el número de imágenes
        currentIndex = (currentIndex + 1) % images.length;
    }, 3000);  // Cambia cada 3 segundos (ajusta el tiempo según tus necesidades)
});

document.addEventListener('DOMContentLoaded', function () {
    // Cargar el contenido del cta-section.html en la sección con id "value"
    var valueContainer = document.getElementById('value');
    var xhr = new XMLHttpRequest();
    
    xhr.onreadystatechange = function () {
        if (xhr.readyState === XMLHttpRequest.DONE) {
            if (xhr.status === 200) {
                valueContainer.innerHTML = xhr.responseText;
            } else {
                console.error('Error al cargar el value: ' + xhr.status);
            }
        }
    };
    xhr.open('GET', 'assets/partials/value.html', true);
    xhr.send();
});

document.addEventListener('DOMContentLoaded', function () {
    // Cargar el contenido del fmedia.html en la sección con id "media"
    var mediaContainer = document.getElementById('media');
    var xhr = new XMLHttpRequest();
    
    xhr.onreadystatechange = function () {
        if (xhr.readyState === XMLHttpRequest.DONE) {
            if (xhr.status === 200) {
                mediaContainer.innerHTML = xhr.responseText;
            } else {
                console.error('Error al cargar el media: ' + xhr.status);
            }
        }
    };
    xhr.open('GET', 'assets/partials/media.html', true);
    xhr.send();
});

document.addEventListener('DOMContentLoaded', function () {
    // Cargar el contenido del timeline.html en la sección con id "timeline"
    var timelineContainer = document.getElementById('timeline');
    var xhr = new XMLHttpRequest();
    
    xhr.onreadystatechange = function () {
        if (xhr.readyState === XMLHttpRequest.DONE) {
            if (xhr.status === 200) {
                timelineContainer.innerHTML = xhr.responseText;
            } else {
                console.error('Error al cargar el timeline ' + xhr.status);
            }
        }
    };
    xhr.open('GET', 'assets/partials/timeline.html', true);
    xhr.send();
});

document.addEventListener('DOMContentLoaded', function () {
    // Cargar el contenido del reports.html en la sección con id "reports"
    var reportsContainer = document.getElementById('reports');
    var xhr = new XMLHttpRequest();
    
    xhr.onreadystatechange = function () {
        if (xhr.readyState === XMLHttpRequest.DONE) {
            if (xhr.status === 200) {
                reportsContainer.innerHTML = xhr.responseText;
            } else {
                console.error('Error al cargar el reports' + xhr.status);
            }
        }
    };
    xhr.open('GET', 'assets/partials/reports.html', true);
    xhr.send();
});

document.addEventListener('DOMContentLoaded', function () {
    // Cargar el contenido del banner.html en la sección con id "banner"
    var bannerContainer = document.getElementById('banner');
    var xhr = new XMLHttpRequest();
    
    xhr.onreadystatechange = function () {
        if (xhr.readyState === XMLHttpRequest.DONE) {
            if (xhr.status === 200) {
                bannerContainer.innerHTML = xhr.responseText;
            } else {
                console.error('Error al cargar el banner' + xhr.status);
            }
        }
    };
    xhr.open('GET', 'assets/partials/banner.html', true);
    xhr.send();
});

document.addEventListener('DOMContentLoaded', function () {
    // Cargar el contenido del contact-us.html en la sección con id "contact"
    var contactContainer = document.getElementById('contact');
    var xhr = new XMLHttpRequest();
    
    xhr.onreadystatechange = function () {
        if (xhr.readyState === XMLHttpRequest.DONE) {
            if (xhr.status === 200) {
                contactContainer.innerHTML = xhr.responseText;
            } else {
                console.error('Error al cargar el contact' + xhr.status);
            }
        }
    };
    xhr.open('GET', 'assets/partials/contac-us.html', true);
    xhr.send();
});

