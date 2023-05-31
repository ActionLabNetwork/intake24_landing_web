<template>
  <section class="text-center section">
    <p class="heading pt-10 pb-3">What is Intake24?</p>
    <p class="subheading mx-auto mb-8">Donec quam felis ultricies nec pellentesque eu pretium quis. sem. Nulla consequat massa quis enim.</p>
    <video width="500" class="mx-auto rounded-xl" height="240" controls>
      <source src="movie.mp4" type="video/mp4">
      <source src="movie.ogg" type="video/ogg">
      Your browser does not support the video tag.
    </video>
  </section>
</template>

<style scoped>
.section {
  background-color: #f7f7f7;
}

.heading {
  font-size: 25px;
  font-weight: bold;
}

.subheading {
  inline-size: 500px;
  overflow-wrap: break-word
}

video {
  filter: drop-shadow(15px 10px 4px #EE672D);
}
</style>
