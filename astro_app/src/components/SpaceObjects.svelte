<script>
    import { onMount } from "svelte";
    import { satelliteStore } from "../store.js";

    let data;

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
