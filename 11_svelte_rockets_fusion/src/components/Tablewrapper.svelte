<script>
    import rocketData from "../data/data";
    import Rocketrow from "./Rocketrow.svelte";
</script>

<div id="table-wrapper">
    <h3>My favorite rocktes in a table</h3>
    <!-- Hier kommt die Tabelle -->
    <table>
        <thead>
            <tr>
                <th>#</th>
                <th>Name</th>
                <th>Speed</th>
                <th>Baujahr</th>
            </tr>
        </thead>

        <tbody>
            {#each rocketData as currentRocketItem}
                <Rocketrow rocket={currentRocketItem} />
            {/each}
        </tbody>
    </table>
</div>

<style>
    th,
    td {
        border: 1px solid white;
    }
</style>
