<script>
  import { Link } from 'svelte-routing'; // Import Link for navigation
</script>

<main>
  <h1>Main Page</h1>
  
  <!-- Links to navigate between Home and Second Services -->
  <nav>
    <ul>
      <li><Link to="/">Home</Link></li>
      <li><Link to="/services">Second Services</Link></li>
    </ul>
  </nav>

  <p>Welcome to the main page. Use the links above to navigate to different sections of the site.</p>
</main>

<style>
  nav ul {
    list-style: none;
    padding: 0;
  }

  nav ul li {
    display: inline;
    margin-right: 10px;
  }

  a {
    text-decoration: none;
    color: blue;
  }

  a:hover {
    text-decoration: underline;
  }
</style>
