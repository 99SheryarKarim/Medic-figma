<script>
  import { Router, Route, Link } from 'svelte-routing';
  import SecondServices from '../../lib/HomePage/SecondServices/SecondServices.svelte'; // Ensure the path is correct

</script>

<Router>
  <main>
    <!-- Define your link navigation here -->
    <ul>
      <li><Link to="/">Home</Link></li>
      <li><Link to="/services">Services</Link></li> <!-- Link to the /services path -->
    </ul>

    <!-- Define routes for your components -->
    <!-- <Route path="/" component={HomePage} /> -->
    <Route path="/services" component={SecondServices} />
    <!-- Ensure /services points to SecondServices -->
  </main>
</Router>
