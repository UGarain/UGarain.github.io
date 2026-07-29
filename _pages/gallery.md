---
layout: page
title: gallery
permalink: /gallery/
nav: true
nav_order: 7
---

<link rel="stylesheet" href="{{ '/assets/css/gallery.css' | relative_url }}">
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/glightbox/dist/css/glightbox.min.css">

<div class="gallery-grid">

{% for img in site.data.gallery %}

<a
  href="{{ '/assets/img/gallery/' | append: img.image | relative_url }}"
  class="gallery-item"
  data-gallery="gallery"
  data-title="{{ img.title }}"
  data-description="{{ img.time }}">

<img
  src="{{ '/assets/img/gallery/' | append: img.image | relative_url }}"
  class="gallery-photo"
  style="--i: {{ forloop.index0 }};"
  alt="{{ img.title }}"
  loading="lazy">

</a>

{% endfor %}

</div>

<script src="https://cdn.jsdelivr.net/npm/glightbox/dist/js/glightbox.min.js"></script>

<script>
const lightbox = GLightbox({
    selector: '.gallery-item',
    loop: true,
    touchNavigation: true,
    zoomable: false,
    openEffect: 'fade',
    closeEffect: 'fade',
    slideEffect: 'fade'
});
</script>

<script>
let slideshow = null;

lightbox.on('open', () => {

    slideshow = setInterval(() => {

        lightbox.nextSlide();

    }, 8000);   // change every 8 seconds

});

lightbox.on('close', () => {

    clearInterval(slideshow);

});
</script>