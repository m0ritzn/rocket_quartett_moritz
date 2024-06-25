<script>
    import { onMount } from "svelte";
    import { satelliteStore } from "../store.js";

    let data;

    // async function fetchData() {
    //     try {
    //         const response = await fetch(
    //             // API-Link mit .env-Datei fixen
    //             `https://api.n2yo.com/rest/v1/satellite/above/48/9/0/10/0/&apiKey=H5W4P7-C4NVAN-VVAXWF-59LC`,
    //         );
    //         if (!response.ok) {
    //             throw new Error(`HTTP error! Status: ${response.status}`);
    //         }
    //         data = await response.json();
    //         satelliteStore.set(data.above || []); // Speichere die Daten im Store
    //         console.log(data);
    //     } catch (error) {
    //         console.error("Error fetching data:", error);
    //     }
    // }

    async function fetchData() {
        try {
            const response = await fetch(
                `/api/rest/v1/satellite/above/48/9/0/10/0/&apiKey=${import.meta.env.VITE_API_KEY}`,
            );
            if (!response.ok) {
                throw new Error(`HTTP error! Status: ${response.status}`);
            }
            data = await response.json();
            satelliteStore.set(data.above || []); // Save the data in the store
            // console.log(data); // Print the data to the console
        } catch (error) {
            console.error("Error fetching data:", error);
        }
    }

    onMount(() => {
        fetchData();
    });
</script>

{#if $satelliteStore.length === 0}
    <p>Loading...</p>
{:else}
    <ul>
        {#each $satelliteStore as satellite}
            <li>{satellite.satname}</li>
        {/each}
    </ul>
{/if}
