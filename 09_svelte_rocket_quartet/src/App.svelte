<script>
  import rocketData from "./data/data.js";
  import Card from "./Card.svelte";
  import Header from "./Header.svelte";
</script>

<Header />
<main>
  {#each rocketData as rocket, index}
    <Card {rocket} {index} />
  {/each}
</main>