<script>
  import Navbar from "./components/Navbar.svelte";
  import SpaceObjects from "./components/SpaceObjects.svelte";
  import { satelliteStore } from "./store.js";
  import Satellites from "./components/Satellites.svelte";
  import PlanetWorld from "./components/PlanetWorld.svelte";
  // import data from "./components/SpaceObjects.svelte";
  // import satellite from "./components/SpaceObject.svelte";

  // Daten hier aus API Laden
  $: console.log($satelliteStore);
</script>

<!-- <SpaceObject {data} /> -->

<main>
  <Navbar />
  <h1>Space Objects</h1>
  <SpaceObjects />
  <!-- <h2>Satellites</h2> -->
  <Satellites />
  <PlanetWorld />

  <!-- <ul>
    {#each $satelliteStore as satellite}
      <li>{satellite.satname}</li>
    {/each}
  </ul> -->
</main>

<style>
  :global(*) {
    background-color: #1c1c2d;
    color: white;
  }
  main {
    /* padding: 2em; */
    margin: 0;
    font-family: Arial, sans-serif;
    background-color: #1c1c2d;
    color: white;
  }
</style>
