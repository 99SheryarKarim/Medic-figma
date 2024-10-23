<script>
  import ServiceLine from "../../../public/images/servicesLine.svg";
  import OP from "../../../public/images/OP.svg";
  import Bbybrn from "../../../public/images/BbyBrn.svg";
  import Teaching from "../../../public/images/Teaching.svg";
</script>

<main>
<!-- Our Clinic Section -->
<div class="w-full h-auto flex flex-col justify-center items-center bg-[#F4F8FF] py-8">
  <h2 style="font-weight: 600;" class="text-4xl md:text-4xl mb-4">Our Clinic</h2>
  <img
    src={ServiceLine}
    alt="Service Line"
    class="w-[150px] sm:w-[200px] md:w-[250px] lg:w-auto"
  />
</div>

<!-- Icons Section -->
<div class="w-full h-auto gap-4 md:gap-8 flex flex-wrap justify-center items-center p-4 bg-[#F4F8FF]">
  <!-- Each icon container now has flex properties to avoid overlap -->
 <!-- Example in Clinic.svelte -->
<div class="icon-container flex justify-center items-center w-1/2 sm:w-1/3 md:w-1/4 p-4">
  <img src={OP} alt="Operational" class="icon-image" />
</div>

<div class="icon-container flex justify-center items-center w-1/2 sm:w-1/3 md:w-1/4 p-4">
  <img src={Bbybrn} alt="Baby Born" class="icon-image" />
</div>

<div class="icon-container flex justify-center items-center w-1/2 sm:w-1/3 md:w-1/4 p-4">
  <img src={Teaching} alt="Teaching" class="icon-image" />
</div>

</main>

<style>
/* General Image Sizing */
.icon-image {
  width: 100%; /* Make images take up the full width of their container */
  max-width: 400px; /* Limit the maximum size for larger screens */
  height: auto; /* Maintain aspect ratio */
}

/* Responsive container adjustments */
.icon-container {
  text-align: center;
}

/* Media Query for smaller than 1024px */
@media (max-width: 1024px) {
  .icon-image {
    max-width: 250px; /* Adjust image size for tablet screens */
  }
}

/* Media Query for smaller than 704px */
@media (max-width: 704px) {
  .icon-image {
    max-width: 220px; /* Adjust image size for smaller screens */
  }
}

/* Media Query for smaller than 500px */
@media (max-width: 500px) {
  .icon-image {
    max-width: 160px; /* Minimum size for very small mobile screens */
  }
}
</style>
