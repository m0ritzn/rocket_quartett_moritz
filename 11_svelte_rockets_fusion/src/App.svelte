<script>
  import rocketData from "./data/data.js";
  import Card from "./components/Card.svelte";
  import Header from ".components/Header.svelte";
</script>

<Header />
<main>
  {#each rocketData as rocket, index}
    <Card {rocket} {index} />
  {/each}
</main>

<style>
</style>
