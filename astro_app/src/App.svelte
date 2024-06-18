<script>
  import Navbar from "./components/Navbar.svelte";

  import { onMount } from "svelte";

  let data;

  async function fetchData() {
    try {
      const response = await fetch(
        // `/api/rest/v1/satellite/above/48/9/0/10/0/&apiKey=${import.meta.env.VITE_API_KEY}`,
        `/api/rest/v1/satellite/above/48/9/0/10/0/&apiKey=H5W4P7-C4NVAN-VVAXWF-59LC`,
      );
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
      data = await response.json();
      console.log(data); // Print the data to the console
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  }

  onMount(() => {
    fetchData();
  });
</script>

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
