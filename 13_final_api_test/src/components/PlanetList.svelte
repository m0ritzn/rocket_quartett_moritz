<script>
    let planets = [];

    async function fetchPlanetData() {
        try {
            const response = await fetch(
                "https://api.le-systeme-solaire.net/rest/bodies?filter[]=bodyType,eq,planet&data=id,englishName,semimajorAxis,meanRadius,gravity,sideralOrbit",
            );
            const data = await response.json();
            planets = data.bodies;
        } catch (error) {
            console.error("Error fetching planet data:", error);
        }
    }

    fetchPlanetData();
</script>

<table>
    <thead>
        <tr>
            <th>Planet</th>
            <th>Semimajor Axis</th>
            <th>Mean Radius</th>
            <th>Gravity</th>
            <th>Sideral Orbit</th>
        </tr>
    </thead>
    <tbody>
        {#each planets as planet}
            <tr>
                <td>
                    <a href="#/planet/{planet.id}">{planet.englishName}</a>
                </td>
                <td>{planet.semimajorAxis}</td>
                <td>{planet.meanRadius}</td>
                <td>{planet.gravity}</td>
                <td>{planet.sideralOrbit}</td>
            </tr>
        {/each}
    </tbody>
</table>
