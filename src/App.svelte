<script>
  import { Router, Route, Link } from 'svelte-routing';
  import Home from '../src/lib/HomePage/Home.svelte'; // Import Home component
  import SecondServices from './lib/HomePage/SecondServices/SecondServices.svelte';
</script>

<Router>
  <main>
    
    <Route path="/" component={Home} />
    <Route path="/services" component={SecondServices} />

  </main>




</Router>

<style>
 
</style>
