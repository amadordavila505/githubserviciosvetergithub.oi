<template>
   <body>
    <main id="main">

<!-- ======= Breadcrumbs ======= -->
<div class="breadcrumbs">
  <div class="page-header d-flex align-items-center" style="background-image: url('src/assets/img/campoG.jpg');">
    <div class="container position-relative">
      <div class="row d-flex justify-content-center">
        <div class="col-lg-6 text-center">
          <h2>Servicios</h2>
        </div>
      </div>
    </div>
  </div>
  <nav>
    <div class="container">
      <ol>
        <li><router-link  to="/">Inicio</router-link></li>
        <li>Servicios</li>
      </ol>
    </div>
  </nav>
</div><!-- End Breadcrumbs -->

<!-- ======= Featured Services Section ======= -->
<section id="featured-services" class="featured-services">
  <div class="container">

    <div class="row gy-4">

      <div class="col-lg-4 col-md-6 service-item d-flex" data-aos="fade-up">
        <div class="icon flex-shrink-0"><i class="fa-solid fa-cart-flatbed"></i></div>
        <div>
          <h4 class="title">Servicios clínico</h4>
          <img src="src/assets/img/imgp10.jpg" alt="" class="img-fluid">
          <li><router-link  to="/Cirujia">Ver más</router-link></li>
        </div>
      </div>
      <!-- End Service Item -->

      <div class="col-lg-4 col-md-6 service-item d-flex" data-aos="fade-up" data-aos-delay="100">
        <div class="icon flex-shrink-0"><i class="fa-solid fa-truck"></i></div>
        <div>
          <h4 class="title">Aplicación de medicamentos</h4>
          <img src="src/assets/img/imgp27.jpg" alt="" class="img-fluid">
          <li><router-link  to="/Cirujia">Ver más</router-link></li>
        </div>
      </div><!-- End Service Item -->

      <div class="col-lg-4 col-md-6 service-item d-flex" data-aos="fade-up" data-aos-delay="200">
        <div class="icon flex-shrink-0"><i class="fa-solid fa-truck-ramp-box"></i></div>
        <div>
          <h4 class="title">Inseminacion articial</h4>
          <img src="src/assets/img/imgp17.jpg" alt="" class="img-fluid">
          <li><router-link  to="/Cirujia">Ver más</router-link></li>
        </div>
      </div><!-- End Service Item -->

    </div>

  </div>
</section><!-- End Featured Services Section -->
</main><!-- End #main -->

<!-- ======= Footer ======= -->
<footer id="footer" class="footer">

<div class="container">
  <div class="row gy-4">
    <div class="col-lg-5 col-md-12 footer-info">
      <a href="index.html" class="logo d-flex align-items-center">
      </a>
      </div>
    </div>
    </div>

<div class="container mt-4">
  <div class="copyright">
    &copy; Copyright <strong><span>Maykol Flores</span></strong>. Todos los Derechos Reservados
  </div>
  <div class="credits">
    
    Elaborado por <a href="https://bootstrapmade.com/">Alexander</a>
  </div>
</div>

</footer><!-- End Footer -->
<!-- End Footer -->

<a href="#" class="scroll-top d-flex align-items-center justify-content-center"><i class="bi bi-arrow-up-short"></i></a>

   </body>
</template>