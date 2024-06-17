<script>
    let data;
    let satelliteData;

    async function fetchData() {
        try {
            const response = await fetch(
                "https://api.n2yo.com/rest/v1/satellite/above/48/9/0/10/0/&apiKey=H5W4P7-C4NVAN-VVAXWF-59LC",
            );
            data = await response.json();
            console.log(data); // Print the data to the console
        } catch (error) {
            console.error("Error fetching data:", error);
        }
    }

    fetchData();
</script>
