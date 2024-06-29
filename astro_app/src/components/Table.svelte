<script>
    import { satelliteStore } from "../store.js";
</script>

{#if $satelliteStore.length === 0}
    <p>Loading...</p>
{:else}
    <table>
        <thead>
            <tr>
                <th>Name</th>
                <th>Int. Designator</th>
                <th>ID</th>
                <th>Launch Date</th>
                <th>Altitude</th>
                <th>Latitude</th>
                <th>Longitude</th>
            </tr>
        </thead>
        <tbody>
            {#each $satelliteStore as satellite}
                <tr>
                    <td>{satellite.satname}</td>
                    <td>{satellite.intDesignator}</td>
                    <td>{satellite.satid}</td>
                    <td>{satellite.launchDate}</td>
                    <td>{satellite.satalt}</td>
                    <td>{satellite.satlat}</td>
                    <td>{satellite.satlng}</td>
                </tr>
            {/each}
        </tbody>
    </table>
{/if}

<style>
    table {
        width: 100%;
        border-collapse: collapse;
    }
    th,
    td {
        border: 1px solid white;
        padding: 8px;
        text-align: left;
    }
    th {
        background-color: #333;
    }
</style>
