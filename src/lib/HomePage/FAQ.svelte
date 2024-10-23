<script>
  // Example logic for FAQ functionality
  let questions = [
    { question: 'How can I contact the event organizers?', answer: 'You can contact us via email at events@example.com.' },
    { question: 'Where can I buy tickets?', answer: 'Tickets are available on our website and at the event entrance.' },
    { question: 'Is there parking available?', answer: 'Yes, there is parking available at the venue.' },
    { question: 'Are the events family-friendly?', answer: 'Yes, we encourage families to attend our events!' }
  ];

  let openIndex = null; // Track the currently open question

  function toggleFaq(index) {
    openIndex = openIndex === index ? null : index; // Toggle open/close
  }
</script>

<div class="faq" aria-labelledby="faq-heading">
  <h2 id="faq-heading">Frequently Asked Questions</h2>
  {#each questions as { question, answer }, index}
    <section class="faq-item" aria-labelledby={`faq-question-${index}`}>
      <!-- Button to trigger the accordion -->
      <button
        id={`faq-question-${index}`}
        class="faq-question"
        aria-expanded={openIndex === index}
        aria-controls={`faq-answer-${index}`}
        on:click={() => toggleFaq(index)}>
        {question}
      </button>

      <!-- Accordion content -->
      <div
        id={`faq-answer-${index}`}
        class="faq-answer"
        hidden={openIndex !== index}>
        <p>{answer}</p>
      </div>
    </section>
  {/each}
</div>

<style>
  .faq {
    display: flex;
    flex-direction: column;
    margin: 1rem;
  }
  .faq-item {
    margin-bottom: 1rem;
  }
  .faq-question {
    background: #eee;
    padding: 1rem;
    border: none;
    cursor: pointer;
    text-align: left;
    width: 100%;
  }
  .faq-answer {
    background: #f9f9f9;
    padding: 1rem;
    border: 1px solid #ccc;
    border-top: none;
  }
</style>
