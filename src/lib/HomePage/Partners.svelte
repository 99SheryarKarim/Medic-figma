<script>
    import ServiceLine from "../../../public/images/servicesLine.svg";
    import Glossy from "../../../public/images/Glossy.svg";
    import Invert from "../../../public/images/Invert.svg";
    import Proline from "../../../public/images/ProLine.svg";
  </script>
  
  <main class="mx-auto  px-4 max-w-7xl">
    <!-- Title Section -->
    <div class="flex flex-col items-center justify-center h-[50vh] text-center p-4">
      <h2 class="text-4xl md:text-5xl font-bold mb-4">Our Trusted Partners</h2>
      <img src={ServiceLine} alt="Service Line" class="w-[200px] sm:w-[250px] lg:w-[300px]" />
    </div>
  
    <!-- Partners Section -->
    <div class="w-full h-auto flex justify-center items-center gap-6 flex-wrap">
      <div class="partner-logo">
        <img src={Glossy} alt="Glossy Logo" class="w-auto max-h-[80px] object-contain" />
      </div>
      <div class="partner-logo">
        <img src={Invert} alt="Invert Logo" class="w-auto max-h-[80px] object-contain" />
      </div>
      <div class="partner-logo">
        <img src={Proline} alt="ProLine Logo" class="w-auto max-h-[80px] object-contain" />
      </div>
    </div>
    <br>
    <br>
    <br>
    
  </main>
  
  <style>
    main {
      padding: 1rem;
      max-width: 100%;
    }
  
    .partner-logo img {
      transition: transform 0.3s ease, box-shadow 0.3s ease;
    }
  
    .partner-logo img:hover {
      transform: scale(1.1);
      box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
    }
  
    @media (min-width: 768px) {
      main {
        padding: 2rem;
      }
  
      .partner-logo img {
        max-height: 100px;
      }
    }
  
    @media (min-width: 1024px) {
      .partner-logo img {
        max-height: 120px;
      }
    }
  </style>
  