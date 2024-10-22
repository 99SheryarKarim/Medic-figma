<script>
  import logo from "../../../../public/images/Logo.svg";
  import ServicesLine from "../../../../public/images/servicesLine.svg";
  import researcher from "../../../../public/images/researcher.svg";
  import Footer from "../Footer.svelte";
</script>

<main>
  <div id="mainImage" class="w-full h-auto bg-gradient text-black">
    <!-- Header Section -->
    <div id="logo" class="w-full h-auto flex flex-col md:flex-row bg-opacity-custom border-gradient p-4 md:px-8 lg:px-12">
      <!-- Logo -->
      <div class="w-full md:w-1/2 flex justify-start items-center mb-4 md:mb-0">
        <img src={logo} alt="Logo" class="h-[70px]  object-contain" />
        <h2 class="font-bold text-[20px] ml-4">LOGO</h2>
      </div>
      <!-- Navigation -->
      <div class="w-full md:w-1/2 flex justify-center items-center">
        <ul class="flex flex-wrap justify-center md:justify-start text-[16px] md:text-[20px] gap-4 md:gap-8 lg:gap-14">
          <li class="hover-item"><a href="/">Home</a></li>
          <li class="hover-item"><a href="/services">Services</a></li>
          <li class="hover-item"><a href="/team">Our Team</a></li>
          <li class="hover-item"><a href="/contact">Contact Us</a></li>
          <li class="hover-item"><a href="/faqs">FAQs</a></li>
        </ul>
      </div>
    </div>

    <!-- Content Section -->
    <section class="w-full flex flex-col md:flex-row  border md:h-[85vh]">
      <div class="w-full md:w-2/3 p-4 flex flex-col items-center md:items-start">
        <div class="flex flex-col items-center justify-center h-[30vh] text-center md:text-left">
          <h2 class="text-4xl md:text-5xl font-bold ml-8 mb-2">Chronic Disease Management</h2>
          <img src={ServicesLine} alt="Service Line" class="w-[300px] sm:w-[250px] lg:w-[550px] mt-2" />
        </div>
        <div class="p-4">
          <ul class="list-disc list-inside text-lg">
            <li class="mb-4">Lorem ipsum dolor sit amet consectetur.</li>
            <li class="mb-4">Malesuada vivamus venenatis tristique phasellus in a felis elementum nisi.</li>
            <li class="mb-4">
              Lorem ipsum dolor sit amet consectetur. A pharetra integer duis nunc condimentum. <br>&nbsp;&nbsp;&nbsp;&nbsp;
              Eu pellentesque pellentesque consectetur porttitor donec amet.
            </li>
            <li class="mb-4">Morbi leo et nisi iaculis dignissim adipiscing.</li>
            <li class="mb-4">
              Lorem ipsum dolor sit amet consectetur. Mollis nec sed nascetur eu mauris <br>&nbsp;&nbsp;&nbsp;&nbsp;
              gravida ultrices varius semper.
            </li>
          </ul>
        </div>
      </div>
      <div class="flex justify-center items-center md:w-1/3">
        <img class="mt-14 w-[200px] md:w-auto" src={researcher} alt="Researcher">
      </div>
    </section>
  </div>
  <Footer />
</main>

<style>
  #mainImage {
    background: linear-gradient(
      180deg,
      rgba(241, 241, 241, 0.2) 100%,
      rgba(241, 241, 241, 0.6) 100%
    );
  }
  ul {
    padding-left: 1.5rem; /* Add padding to the left */
  }
  li {
    text-align: left; /* Align text to the left */
  }
  .text-black {
    color: black; /* Ensures all text inside mainImage is black */
  }
</style>
