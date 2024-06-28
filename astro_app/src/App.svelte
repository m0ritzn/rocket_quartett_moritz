<script>
  import Navbar from "./components/Navbar.svelte";
  import SpaceObjects from "./components/SpaceObjects.svelte";
  import { satelliteStore } from "./store.js";
  import Satellites from "./components/Satellites.svelte";
  import PlanetWorld from "./components/PlanetWorld.svelte";

  // // Daten hier aus API Laden
  $: console.log($satelliteStore);
</script>

<main>
  <Navbar />
  <h1>Space Objects</h1>
  <SpaceObjects />
  <div class="container">
    <Satellites />
    <PlanetWorld />
  </div>
</main>

<style>
  :global(*) {
    background-color: #1c1c2d;
    color: white;
  }
  main {
    /* padding: 2em; */
    display: flex;
    flex-direction: column;
    margin: 0;
    font-family: Arial, sans-serif;
    background-color: #1c1c2d;
    color: white;
  }

  .container {
    display: flex;
    flex-direction: column; /* Change to column for vertical stacking */
    height: 100vh; /* Full viewport height */
  }

  .container > * {
    flex: 1;
    overflow: hidden; /* Prevent overflow */
  }
</style>
