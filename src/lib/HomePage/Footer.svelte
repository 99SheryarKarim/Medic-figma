<script>
    import Logo from "../../../public/images/Logo.svg";
    import fb from "../../../public/images/fb.svg";
    import twitter from "../../../public/images/twitter.svg";
    import ig from "../../../public/images/ig.svg";
    import linkdin from "../../../public/images/linkdn.svg";
</script>

<main>
    <footer class="bg-[#F1F1F1] flex justify-center items-center py-5 font-sans tracking-wide">
        <div class="w-full max-w-6xl grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 px-5 py-8 text-center lg:text-left">
            <!-- Logo and description -->
            <div class="lg:flex lg:flex-col lg:items-start">
                <img src={Logo} alt="Logo" class="mx-auto lg:mx-0" />
                <p class="text-[#565656] text-base mt-4">
                    Lorem ipsum dolor sit amet consectetur. Faucibus arcu ultrices gravida et dictumst duis gravida odio semper. Integer potenti viverra et interdum lobortis amet nisi lorem. Amet sed sit risus dictum dolor. Sem enim eget ac morbi placerat.
                </p>
            </div>

            <!-- Features section for desktop -->
            <div class="space-y-4 ml-[200px] w-[100px] border lg:block hidden">
                <h4 class="text-lg font-semibold mb-6 text-[#234c75]">Features</h4>
                <p class="text-[#565656] text-base">Services</p>
                <p class="text-[#565656] text-base">Our team</p>
                <p class="text-[#565656] text-base">Contact Us</p>
            </div>

            <!-- Follow Us section for desktop -->
       <!-- Follow Us section for desktop -->
<div class="space-y-4 w-full ml-[370px] lg:block hidden">
    <h4 class="text-lg font-semibold mb-6 text-[#003366]">Follow Us</h4>
    <ul class="flex justify-center lg:justify-start gap-4">
        <li><img src={fb} alt="Facebook" class="h-6 w-6" /></li>
        <li><img src={twitter} alt="Twitter" class="h-6 w-6" /></li>
        <li><img src={ig} alt="Instagram" class="h-6 w-6" /></li>
        <li><img src={linkdin} alt="LinkedIn" class="h-6 w-6" /></li>
    </ul>
</div>

           

            <!-- Responsive Layout for Mobile (below 1024px) -->
            <div class="lg:hidden w-full space-y-4 text-left px-4">
                <h4 class="text-lg font-semibold mb-4 text-[#234c75]">Features</h4>
                <p class="text-[#565656] text-base">Services</p>
                <p class="text-[#565656] text-base">Our team</p>
                <p class="text-[#565656] text-base">Contact Us</p>

                <!-- Follow Us section for mobile -->
                <h4 class="text-lg font-semibold mb-4 text-[#003366]">Follow Us</h4>
                <ul class="flex justify-center gap-4">
                    <li><img src={fb} alt="Facebook" /></li>
                    <li><img src={twitter} alt="Twitter" /></li>
                    <li><img src={ig} alt="Instagram" /></li>
                    <li><img src={linkdin} alt="LinkedIn" /></li>
                </ul>
            </div>
        </div>
    </footer>
</main>

<style>
    /* Ensure no changes to desktop UI */
    
    /* Media query for screens below 500px */
    @media (max-width: 500px) {
        footer {
            padding: 20px 15px; /* Add padding for gap from the borders */
        }

        .grid {
            grid-template-columns: 1fr; /* Make grid a single column */
        }

        .w-full {
            padding: 0 10px; /* Ensure there's padding from the sides */
            margin: 0 auto; /* Center align content */
            max-width: 100%; /* Ensure no extra width */
        }

       
        .space-y-4 {
            margin-left: 16px; /* Small left margin */
            margin-right: 16px; /* Small right margin */
        }

        img {
            max-width: 80%; /* Adjust image sizes for smaller screens */
            margin: 0 auto; /* Center images */
        }

        ul {
            justify-content: center; /* Ensure icons are centered */
        }

        p, h4 {
            font-size: 0.9rem; /* Adjust font sizes for smaller screens */
        }

        .lg\\:hidden {
            padding: 0 10px; /* Add some padding to mobile view */
        }
    }
</style>
