import './app.css'; // Make sure this is your main CSS file where Tailwind is imported
import App from './App.svelte';

const app = new App({
  target: document.getElementById('app'),
});

export default app;
