// Initialize and add the map
function initMap() {
  // your location
  const loc = { lat: 48.857841, lng: 2.294220};
  // Centered map on location
  const map = new google.maps.Map(document.querySelector('.map'), {
    zoom: 14,
    center: loc
  });
  // The marker, positioned at location
  const marker = new google.maps.Marker({ position: loc, map: map});
}

// Sticky menu background
window.addEventListener('scroll', function() {
  if (this.window.scrollY > 150) {
    this.document.querySelector('#navbar').style.opacity = 0.9;
  } else {
    this.document.querySelector('#navbar').style.opacity = 1;
  }
})

// Smooth Scrolling
$('#navbar a').on('click', function(event) {
  if (this.hash !== '') {
    event.preventDefault();
    const hash = this.hash;
    $('html, body').animate( {
      scrollTop: $(hash).offset().top - 100
    },
    800);
  }
})