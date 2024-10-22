<script>
  // import ServiceLine from "../../../public/Image/servicesLine.svg";
  import map from "../../../public/Image/map.svg";
  
  // Import FontAwesome styles
  import "@fortawesome/fontawesome-free/css/all.min.css";
</script>

<main class="w-full bg-gray-100"> <!-- Updated background color using Tailwind -->
  <!-- Header Section -->
  <div class="flex flex-col items-center justify-center h-[30vh] text-center p-4">
    <h2 class="text-4xl md:text-5xl font-bold mb-2 text-gray-800">Contact Us</h2>
    <img src={map} alt="Service Line" class="w-[200px] sm:w-[250px] lg:w-[300px]" />
  </div>

  <!-- Contact Details Section -->
  <div class="w-full flex flex-col md:flex-row items-center justify-around gap-8 p-8 md:p-16">
    <!-- Map Image -->
    <div class="w-full md:w-1/2 flex justify-center">
      <img src={map} alt="Map Location" class="w-full max-w-[500px] rounded-lg shadow-md object-cover" />
    </div>

    <!-- Contact Info -->
    <div class="w-full md:w-1/2 space-y-6 text-gray-800"> <!-- Text color adjusted for better readability -->
      <h3 class="text-2xl font-bold">Clinic Lorem Ipsum</h3>

      <!-- Contact Details Icons -->
      <div class="flex items-center space-x-4">
        <i class="fas fa-phone-alt text-xl text-gray-600"></i> <!-- Colorized icons -->
        <span class="text-lg">+123 456 789</span>
      </div>
      <div class="flex items-center space-x-4">
        <i class="fas fa-map-marker-alt text-xl text-gray-600"></i>
        <span class="text-lg">123 Street, City, Country</span>
      </div>
      <div class="flex items-center space-x-4">
        <i class="fab fa-whatsapp text-xl text-gray-600"></i>
        <span class="text-lg">+123 456 789 (WhatsApp)</span>
      </div>
      <div class="flex items-center space-x-4">
        <i class="fas fa-envelope text-xl text-gray-600"></i>
        <span class="text-lg">contact@clinic.com</span>
      </div>
    </div>
  </div>
</main>

<!-- Svelte Scoped CSS -->
<style>
  h2 {
    color: #333; /* Professional dark gray color for heading */
  }
  img {
    object-fit: cover;
  }
</style>
