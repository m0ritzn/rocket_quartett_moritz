<script>
  import Router from "svelte-spa-router";
  import PlanetDetail from "./components/PlanetDetail.svelte";
  import PlanetList from "./components/PlanetList.svelte";

  const routes = {
    "/": PlanetList,
    "/planet/:planetId": PlanetDetail,
  };
</script>

<main>
  <Router {routes} />
</main>

<style>
</style>
