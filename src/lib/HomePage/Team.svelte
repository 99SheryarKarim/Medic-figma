<script>
  // Assuming these are imported images
  import docChinese from '../../../public/images/docChinese.svg';
  import docPakistan from '../../../public/images/docPak.svg';
  import docUs from '../../../public/images/docUs.svg';
  import doctor from '../../../public/images/docter.svg';

  // Example team member information
  let teamMembers = [
    { name: 'General Doctor', img: doctor, info: 'General Doctor Information' },
    { name: 'Chinese Doctor', img: docChinese, info: 'Chinese Doctor Information' },
    { name: 'Pakistani Doctor', img: docPakistan, info: 'Pakistani Doctor Information' },
    { name: 'US Doctor', img: docUs, info: 'US Doctor Information' },
  ];
</script>

<div class="team-container" aria-labelledby="team-heading">
  <h2 id="team-heading">Meet Our Team</h2>
  {#each teamMembers as { name, img, info }}
    <div class="team-card" role="region" aria-labelledby={name}>
      <img src={img} alt={`${name} profile`} class="card-image h-[360px]" />  
      <div class="card-content">
        <h3>{name}</h3>
        <p>{info}</p>
      </div>
    </div>
  {/each}
</div>

<style>
  .team-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 2rem;
  }
  .team-card {
    width: 24%;
    margin: 1rem;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    border-radius: 8px;
    overflow: hidden;
  }
  .card-image {
    border-radius: 8px 8px 0 0;
    width: 100%;
    height: auto;
  }
  .card-content {
    padding: 1rem;
    background: #fff;
  }
</style>
