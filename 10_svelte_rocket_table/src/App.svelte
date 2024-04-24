<script>
  import Header from "./components/Header.svelte";
  import Tablewrapper from "./components/Tablewrapper.svelte";
</script>

<div id="wrapper">
  <Header />
  <main>
    <Tablewrapper />
  </main>
</div>

<style>
  #wrapper {
    width: 1200px;
    margin: auto;
  }
</style>
