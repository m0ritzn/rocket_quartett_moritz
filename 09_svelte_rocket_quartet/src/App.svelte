<script>
  import rocketData from "./data/data.js";
  import Card from "./Card.svelte";
  import Header from "./Header.svelte";
</script>

<Header />
<main>
  <div id="rocket-card-container">
    {#each rocketData as rocket, index}
      <Card {rocket} {index} />
    {/each}
  </div>
</main>

<style>
  #rocket-card-container {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 10px;
  }
</style>
