<script>
  import { tweened } from 'svelte/motion';
  import { onMount } from 'svelte';
  import ServiceLine from "../../../public/Image/servicesLine.svg";
  import ServiceIcon from "../../../public/Image/serviceIcon.svg";
  import MentalIcon from "../../../public/Image/MensIcons.svg";
  import WorkIcon from "../../../public/Image/workIcon.svg";

  // Set opacity for sections to animate on scroll
  let opacity = tweened(0, { duration: 1000 });
  let scrollPos = 0;

  // Update opacity based on scroll position
  const handleScroll = () => {
    scrollPos = window.scrollY;
    const windowHeight = window.innerHeight;
    const triggerHeight = windowHeight / 1.3;
    opacity.set(Math.min(scrollPos / triggerHeight, 1));
  };

  onMount(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  });
</script>

<main>
  <!-- Our Services Section -->
  <div class="w-full flex flex-col items-center justify-center h-[50vh] border text-center p-4" style="opacity: {$opacity}">
    <h2 class="text-5xl font-bold mb-4">Our Services</h2>
    <img src={ServiceLine} alt="Service Line" class="w-[200px] sm:w-[250px] lg:w-auto" />
    <p class="text-[16px] sm:text-[18px] md:text-[20px] mt-10">
      Lorem ipsum dolor sit amet consectetur. Faucibus arcu ultrices gravida et
      dictumst duis <br />
      gravida odio semper. Integer potenti viverra et interdum lobortis amet nisi
      lorem. Amet <br />
      sed sit risus dictum dolor. Sem enim eget ac morbi placerat.
    </p>
  </div>

  <!-- Services Cards Section with Scroll Fade-In -->
  <div class="w-full flex justify-center gap-9 p-4 mb-[100px] h-[230px] flex-wrap" style="opacity: {$opacity}">
    <!-- First Card -->
    <div class="w-full sm:w-[350px] h-auto bg-[#F4F8FF] border rounded-lg p-6 flex flex-col items-center mb-4">
      <div class="w-16 h-16 rounded-full flex items-center justify-center mb-4">
        <img src={ServiceIcon} alt="Service Icon" />
      </div>
      <h3 class="text-xl font-bold mb-2">Service 1</h3>
      <p class="text-center mb-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Faucibus arcu ultrices gravida.</p>
      <button class="border border-blue-600 text-black py-2 px-4 rounded-lg hover:bg-blue-200">Learn More</button>
    </div>

    <!-- Second Card -->
    <div class="w-full sm:w-[350px] h-auto bg-[#F4F8FF] border rounded-lg p-6 flex flex-col items-center mb-4">
      <div class="w-16 h-16 rounded-full flex items-center justify-center mb-4">
        <img src={MentalIcon} alt="Mental Icon" />
      </div>
      <h3 class="text-xl font-bold mb-2">Service 2</h3>
      <p class="text-center mb-4">Integer potenti viverra et interdum lobortis. Amet nisi lorem sed sit risus.</p>
      <button class="border border-blue-600 text-black py-2 px-4 rounded-lg hover:bg-blue-200">Learn More</button>
    </div>

    <!-- Third Card -->
    <div class="w-full sm:w-[350px] h-auto bg-[#F4F8FF] border rounded-lg p-6 flex flex-col items-center mb-4">
      <div class="w-16 h-16 rounded-full flex items-center justify-center mb-4">
        <img src={WorkIcon} alt="Work Icon" />
      </div>
      <h3 class="text-xl font-bold mb-2">Service 3</h3>
      <p class="text-center mb-4">Sed enim eget ac morbi placerat. Integer potenti viverra et interdum lobortis.</p>
      <button class="border border-blue-600 text-black py-2 px-4 rounded-lg hover:bg-blue-200">Learn More</button>
    </div>
  </div>

  <!-- Second Row of Cards with Adjusted Gap -->
  <div class="w-full flex justify-center gap-9 p-4 mb-[90px] flex-wrap" style="opacity: {$opacity}">
    <!-- First Card -->
    <div class="w-full sm:w-[350px] h-auto bg-[#F4F8FF] border rounded-lg p-6 flex flex-col items-center mb-4">
      <div class="w-16 h-16 rounded-full flex items-center justify-center mb-4">
        <img src={ServiceIcon} alt="Service Icon" />
      </div>
      <h3 class="text-xl font-bold mb-2">Service 1</h3>
      <p class="text-center mb-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Faucibus arcu ultrices gravida.</p>
      <button class="border border-blue-600 text-black py-2 px-4 rounded-lg hover:bg-blue-200">Learn More</button>
    </div>

    <!-- Second Card -->
    <div class="w-full sm:w-[350px] h-auto bg-[#F4F8FF] border rounded-lg p-6 flex flex-col items-center mb-4">
      <div class="w-16 h-16 rounded-full flex items-center justify-center mb-4">
        <img src={MentalIcon} alt="Mental Icon" />
      </div>
      <h3 class="text-xl font-bold mb-2">Service 2</h3>
      <p class="text-center mb-4">Integer potenti viverra et interdum lobortis. Amet nisi lorem sed sit risus.</p>
      <button class="border border-blue-600 text-black py-2 px-4 rounded-lg hover:bg-blue-200">Learn More</button>
    </div>

    <!-- Third Card -->
    <div class="w-full sm:w-[350px] h-auto bg-[#F4F8FF] border rounded-lg p-6 flex flex-col items-center mb-4">
      <div class="w-16 h-16 rounded-full flex items-center justify-center mb-4">
        <img src={WorkIcon} alt="Work Icon" />
      </div>
      <h3 class="text-xl font-bold mb-2">Service 3</h3>
      <p class="text-center mb-4">Sed enim eget ac morbi placerat. Integer potenti viverra et interdum lobortis.</p>
      <button class="border border-blue-600 text-black py-2 px-4 rounded-lg hover:bg-blue-200">Learn More</button>
    </div>
  </div>

  <!-- Centered Button Below Cards -->
  <div class="w-full flex justify-center mt-[-50px] mb-[100px]" style="opacity: {$opacity}">
    <button class="bg-blue-600 text-white py-3 px-6 rounded-lg hover:bg-blue-500 text-lg font-semibold">
      More Services
    </button>
  </div>
</main>

<style>
  @media (max-width: 640px) {
    h2 {
      font-size: 2.5rem;
    }

    p {
      font-size: 14px;
    }

    .flex-wrap {
      gap: 1rem;
    }

    button {
      font-size: 14px;
    }
  }

  @media (min-width: 641px) and (max-width: 1024px) {
    h2 {
      font-size: 3.5rem;
    }

    p {
      font-size: 16px;
    }

    button {
      font-size: 16px;
    }
  }

  @media (min-width: 1025px) {
    /* Desktop-specific styles (no changes needed) */
  }
</style>
