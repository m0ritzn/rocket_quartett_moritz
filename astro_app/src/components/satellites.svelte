<!-- Hier werden die Daten aus dem Store, den ich noch anlegen muss, in einzelne
Satelliten unterteils und an die SpaceObject-Komponente weitergegeben. Diese
Komponente rendert dann die einzelnen Satelliten als Punkte auf der Karte. -->

<!-- Satellites.svelte -->
<script>
    import { satelliteStore } from "../store.js";
    import Satellite from "./Satellite.svelte";
</script>

{#if $satelliteStore.length === 0}
    <p>Loading...</p>
{:else}
    <div class="satellite-container">
        {#each $satelliteStore as satellite}
            <Satellite {satellite} />
        {/each}
    </div>
{/if}

<style>
    .satellite-container {
        position: relative;
        width: 100%;
        height: 100%; /* Full container height */
        /* overflow: auto; Scroll if content overflows */
        overflow-y: hidden; /* Scroll if content overflows vertically */
        overflow-x: hidden; /* Prevent horizontal scrolling */
    }
</style>
