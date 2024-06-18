<script>
    let data;
    export { data };
    import { onMount } from "svelte";

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
