<script>
  import { Motion } from 'svelte-motion';
import  ServiceLine from "../../../public/images/servicesLine.svg"
  let activeIndex = -1;

  // Function to toggle accordion state
  const toggleAccordion = (index) => {
    activeIndex = activeIndex === index ? -1 : index;
  };
</script>

<main>
  <div class="font-[sans-serif] divide-y rounded-lg max-w-7xl mx-auto px-4">
    <div class="w-full h-[60vh] flex flex-col items-center justify-center h-auto text-center p-4">
      <h2 class="text-5xl font-bold mb-4">Frequently asked questions</h2>
      <img
        src={ServiceLine}
        alt="Service Line"
        class="w-[400px] sm:w-[290px] lg:w-auto"
      />
      <p class="text-[16px] sm:text-[18px] md:text-[20px] mt-10">
        Lorem ipsum dolor sit amet consectetur. Faucibus arcu ultrices gravida et
        dictumst duis <br />
        gravida odio semper. Integer potenti viverra et interdum lobortis amet nisi
        lorem. Amet <br />
        sed sit risus dictum dolor. Sem enim eget ac morbi placerat.
      </p>
    </div>

    {#each [
      "How do I book an appointment with a doctor?",
      "What are the available payment methods for consultations?",
      "Can I access my previous medical records through the app?",
      "How can I get a prescription through the app?",
      "Is my medical data safe and secure?",
      "How do I contact customer support if I encounter any issues?"
    ] as question, index}
      <div class="mb-4" role="accordion">
        <button type="button" 
          class="w-full text-base text-left font-semibold py-6 text-gray-800 flex items-center"
          on:click={() => toggleAccordion(index)}>
          <span class="mr-4">{question}</span>
          <svg xmlns="http://www.w3.org/2000/svg" class="w-3.5 fill-current ml-auto shrink-0" viewBox="0 0 124 124">
            <path d="M112 50H12C5.4 50 0 55.4 0 62s5.4 12 12 12h100c6.6 0 12-5.4 12-12s-5.4-12-12-12z" data-original="#000000" />
          </svg>
        </button>

        <!-- Motion component for smooth accordion opening -->
        {#if activeIndex === index}
          <Motion
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.5, ease: [0.4, 0, 0.2, 1] }}>
            <div class="py-4 transition-all ease-out duration-500">
              <p class="text-sm text-gray-800">
                {#if index === 0}
                  You can easily book an appointment by navigating to the 'Book Appointment' section, selecting a doctor, and choosing your preferred date and time.
                {/if}
                {#if index === 1}
                  We accept multiple payment methods including credit cards, PayPal, and insurance-based payments. Check the payment section for more details.
                {/if}
                {#if index === 2}
                  Yes, all your medical records are securely stored and can be accessed anytime through the 'My Records' section of the app.
                {/if}
                {#if index === 3}
                  After your consultation, the doctor can provide an electronic prescription, which you can access under the 'Prescriptions' section.
                {/if}
                {#if index === 4}
                  We take data security seriously. All your information is encrypted and stored in a secure environment, compliant with medical data regulations.
                {/if}
                {#if index === 5}
                  You can contact our customer support team 24/7 through the 'Help & Support' section in the app or by calling our helpline directly.
                {/if}
              </p>
            </div>
          </Motion>
        {/if}
      </div>
    {/each}
  </div>
</main>

<style>
/* Tailwind styling is already in place */
</style>
