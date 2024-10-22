<script>
    import logo from "../../../public/images/Logo.svg";
    import Services from "../HomePage/Services.svelte";
    import Clinic from "../HomePage/Clinic.svelte";
    import Team from "../HomePage/Team.svelte";
    import ContactUs from "../HomePage/ContactUs.svelte";
    import Faq from "../HomePage/FAQ.svelte";
    import Inquiry from "../HomePage/Inquiry.svelte";
    import Partners from "../HomePage/Partners.svelte";
    import Footer from "../HomePage/Footer.svelte";
    import { tweened } from 'svelte/motion';
  
    // Define motion state for elements
    let opacity = tweened(0, { duration: 1000 });
    let scale = tweened(0.8, { duration: 700 });
  
    // Animate on component mount
    $: {
      opacity.set(1); // Animate opacity from 0 to 1
      scale.set(1); // Animate scale from 0.8 to 1
    }
  </script>
  
  <div id="mainImage" class="w-full h-[100vh] bg-slate-600">
    <!-- Header Section -->
    <div
      id="logo"
      class="w-full h-auto flex flex-col md:flex-row bg-opacity-custom border-gradient p-4 md:px-8 lg:px-12"
    >
      <!-- Logo -->
      <div class="w-full md:w-1/2 flex ml-12 justify-start items-center mb-4 md:mb-0">
        <img src={logo} alt="Logo" class="h-[70px] object-contain" />
        <h2 class="font-bold text-[20px] ml-4 text-white">LOGO</h2>
      </div>
      <!-- Navigation -->
      <div class="w-full md:w-1/2 flex justify-center items-center">
        <ul class="flex flex-wrap justify-center md:justify-start text-[16px] md:text-[20px] text-white gap-4 md:gap-8 lg:gap-14">
          <li class="hover-item"><a href="/">Home</a></li>
          <li class="hover-item"><a href="/services">Services</a></li>
          <li class="hover-item"><a href="/team">Our Team</a></li>
          <li class="hover-item"><a href="/contact">Contact Us</a></li>
          <li class="hover-item"><a href="/faqs">FAQs</a></li>
        </ul>
      </div>
    </div>
  
    <!-- Content Section with animations -->
    <div class="flex flex-col md:flex-row w-full h-auto mt-4 p-4">
      <!-- Left Text Section -->
      <div 
        class="w-full md:w-[60%] flex justify-center items-center h-auto md:h-[80vh] text-center md:text-left"
        style="transform: scale({$scale}); opacity: {$opacity};"
      >
        <h2 style="line-height: 85px;" class="text-[30px] ml-12 md:text-[60px] lg:text-[85px] leading-[36px] md:leading-[48px] lg:leading-[60px] text-white">
          <span class="italic">HEALTH IS</span> <br />
          <span class="not-italic font-bold">LOVE, COMPASSION</span> <br />
          <span class="italic">AND CARE</span>
        </h2>
      </div>
  
      <!-- Right Empty Section -->
      <div class="w-full md:w-[40%] h-auto md:h-[80vh]"></div>
    </div>
  </div>
  
  <Services />
  <Clinic />
  <Team />
  <ContactUs />
  <Faq />
  <Inquiry />
  <Partners />
  <Footer />
  
  <style>
    #mainImage {
      background-image: url("/images/images%2013@2x.png");
      background-repeat: no-repeat; 
      background-size: cover; 
      background-position: center; 
      position: relative; 
    }
  
    #mainImage::before {
      content: ""; 
      position: absolute; 
      top: 0; 
      left: 0; 
      right: 0; 
      bottom: 0; 
      background: linear-gradient(to right, rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0)); 
      z-index: 0; 
    }
  
    .flex > div {
      position: relative; 
      z-index: 1; 
    }
  
    .bg-opacity-custom {
      background: linear-gradient(
        180deg,
        rgba(241, 241, 241, 0.05) 100%,
        rgba(251, 250, 250, 0.1) 100%
      );
      backdrop-filter: blur(6px);
    }
  
    .border-gradient {
      border: 1px solid; 
      border-image-source: linear-gradient(
        203.36deg,
        rgba(241, 241, 241, 0.2) 83.46%,
        rgba(241, 241, 241, 0.6) 83.46%
      );
      border-image-slice: 1; 
    }
  
    .hover-item {
      transition: transform 0.3s ease, color 0.3s ease;
    }
    .hover-item:hover {
      transform: translateY(-4px);
      color: #d1d5db; 
    }
  </style>
  