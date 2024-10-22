<script>
  import ServiceLine from "../../../public/Image/servicesLine.svg";
  let activeIndex = null;

  // Function to toggle the accordion
  const toggleAccordion = (index) => {
    activeIndex = activeIndex === index ? null : index;
  };
</script>

<main>
  <div class="font-[sans-serif] divide-y rounded-lg max-w-7xl mx-auto px-4">
    <div class="flex flex-col items-center justify-center h-[30vh] text-center p-4">
      <h2 class="text-4xl md:text-5xl font-bold mb-2"> FAQs</h2>
      <img src={ServiceLine} alt="Service Line" class="w-[200px] sm:w-[250px] lg:w-[300px]" />
    </div>

    {#each [
      'Are there any special discounts or promotions available during the event?',
      'What are the dates and locations for the product launch events?',
      'Can I bring a guest with me to the product launch event?',
      'How can I register for the event?',
      'Is there parking available at the venue?',
      'How can I contact the event organizers?'
    ] as question, index}
      <div role="accordion">
        <!-- Button to trigger the accordion -->
        <button
          on:click={() => toggleAccordion(index)}
          class="w-full text-base text-left font-semibold py-6 text-gray-800 flex items-center"
        >
          <span class="mr-4">{question}</span>
          <!-- Circular blue button -->
          <div class="ml-auto bg-blue-500 text-white rounded-full w-10 h-10 flex items-center justify-center">
            {#if activeIndex === index}
              <!-- Up Arrow (when active) -->
              <svg xmlns="http://www.w3.org/2000/svg" class="w-3.5 fill-current" viewBox="0 0 124 124">
                <path d="M62 12L12 62c-6.6 6.6-6.6 17.4 0 24s17.4 6.6 24 0l38-38 38 38c6.6 6.6 17.4 6.6 24 0s6.6-17.4 0-24L62 12z" />
              </svg>
            {:else}
              <!-- Down Arrow (default) -->
              <svg xmlns="http://www.w3.org/2000/svg" class="w-3.5 fill-current" viewBox="0 0 124 124">
                <path d="M112 50H12C5.4 50 0 55.4 0 62s5.4 12 12 12h100c6.6 0 12-5.4 12-12s-5.4-12-12-12z" />
              </svg>
            {/if}
          </div>
        </button>

        <!-- Accordion Content -->
        <div
          class="accordion-content overflow-hidden transition-max-height duration-300"
          style:max-height={activeIndex === index ? '200px' : '0'}
        >
          <div class="py-4">
            <p class="text-sm text-gray-800">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed auctor auctor arcu, at fermentum dui. Maecenas vestibulum...
            </p>
          </div>
        </div>
      </div>
    {/each}
  </div>
</main>

<style>
  /* Optional styling */
  button {
    cursor: pointer;
  }

  .accordion-content {
    overflow: hidden; /* Prevent content from showing when max-height is 0 */
  }

  /* Smooth transition for max-height */
  .transition-max-height {
    transition: max-height 0.3s ease;
  }
</style>
