<template>
    <main>
<div class="">
        <div class="col-md-12">
            <div id="carouselExampleIndicators" class="carousel carousel-dark slide" data-bs-ride="carousel">
                <div class="carousel-indicators">
                  <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
                  <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
                  <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
                  <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="3" aria-label="Slide 4"></button>
                </div>
                <div class="carousel-inner">
                  <div class="carousel-item active">
                    <a href="/CoffeeData"><img src="../assets/커피.jpg" class="d-block w-100" alt="..."></a>
                  </div>
                  <div class="carousel-item">
                    <a href="/AdeDate"><img src="../assets/에이드.jpg" class="d-block w-100" alt="..."></a>
                  </div>
                  <div class="carousel-item">
                    <a href="/BaKer"><img src="../assets/디저트.jpg" class="d-block w-100" alt="..."></a>
                  </div>
                  <div class="carousel-item">
                    <a href="/TeaData"><img src="../assets/차.jpg" class="d-block w-100" alt="..."></a>
                  </div>
                </div>
                <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
                  <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                  <span class="visually-hidden">Previous</span>
                </button>
                <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
                  <span class="carousel-control-next-icon" aria-hidden="true"></span>
                  <span class="visually-hidden">Next</span>
                </button>
            </div>
        </div>
    </div>
</main>

</template>
<style>
  .carousel-item img {
    object-fit: cover;
    height: 750px;
    width: 900%;
  }

</style>
