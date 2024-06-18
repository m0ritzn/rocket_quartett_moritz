<script>
  import Navbar from "./components/Navbar.svelte";
  import SpaceObject from "./components/SpaceObject.svelte";
  import data from "./components/SpaceObject.svelte";
</script>

<SpaceObject {data} />

<!-- {#if data}
  <ul>
    {#each data.above as satellite}
      <li>{satellite.satname}</li>
    {/each}
  </ul>
{:else}
  <p>Loading...</p>
{/if} -->

<main>
  <Navbar />
  <!-- <section id="visualisierung">
    <h2>Visualisierung</h2>

  </section>
  <section id="tabelle">
    <h2>Tabelle</h2>

  </section> -->
</main>

<style>
  main {
    padding: 2em;
  }
</style>
