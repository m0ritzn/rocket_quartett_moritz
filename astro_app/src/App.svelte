<script>
  import Navbar from "./components/Navbar.svelte";
  import SpaceObjects from "./components/SpaceObjects.svelte";
  import { satelliteStore } from "./store.js";
  // import data from "./components/SpaceObjects.svelte";
  // import satellite from "./components/SpaceObject.svelte";

  // Daten hier aus API Laden
  $: console.log($satelliteStore);
</script>

<!-- <SpaceObject {data} /> -->

<main>
  <Navbar />
  <SpaceObjects />
  <!-- <ul>
    {#each $satelliteStore as satellite}
      <li>{satellite.satname}</li>
    {/each}
  </ul> -->
</main>

<style>
  main {
    padding: 2em;
  }
</style>
