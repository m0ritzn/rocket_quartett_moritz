<script>
    let planetName;
    let moons = [];

    async function fetchPlanetData() {
        const urlParams = new URLSearchParams(window.location.hash.slice(1));
        planetName = urlParams.get("planet");

        const response = await fetch(
            `https://api.le-systeme-solaire.net/rest/bodies/${planetName}`,
        );
        const data = await response.json();
        moons = data.moons;
    }

    fetchPlanetData();
</script>

<h1>Moons of {planetName}</h1>

<ul>
    {#each moons as moon}
        <li>{moon.name}</li>
    {/each}
</ul>
