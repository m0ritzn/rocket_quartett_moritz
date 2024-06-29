<!-- Satellite.svelte -->
<script>
    export let satellite;

    // Maximum altitude for scaling purposes (you can adjust this based on your data)
    const maxAltitude = 40000; // example maximum altitude in kilometers
    let top = 100 - (satellite.satalt / maxAltitude) * 100 + "%"; // Inverse because CSS top starts from the top
    let left = Math.random() * 90 + "%"; // Keep random left positioning

    // Generate random values for left and top separately for each dot
    // const randomizePosition = () => {
    //     top = Math.random() * 100 + "%";
    //     left = Math.random() * 100 + "%";
    // };
</script>

<div class="dot" style="top: {top}; left: {left};">
    <div class="tooltip">
        <h3>{satellite.satname}</h3>
        <p>satname: {satellite.satname}</p>
        <p>intDesignator: {satellite.intDesignator}</p>
        <p>satid: {satellite.satid}</p>
        <p>Launch Date: {satellite.launchDate}</p>
        <p>satalt: {satellite.satalt}</p>
        <p>satlat: {satellite.satlat}</p>
        <p>satlng: {satellite.satlng}</p>
    </div>
</div>

<style>
    .dot {
        height: 50px;
        width: 50px;
        background-image: url("../assets/satellite.png");
        background-size: cover;
        position: absolute;
        animation: float 3s infinite ease-in-out alternate;
    }

    @keyframes float {
        0% {
            transform: translate(0, 0);
        }
        100% {
            transform: translate(10px, -10px);
        }
    }

    .tooltip {
        visibility: hidden;
        width: 200px;
        background-color: white;
        /* color: black; */
        text-align: left;
        border-radius: 6px;
        padding: 10px;
        box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
        position: absolute;
        z-index: 1;
        bottom: 125%; /* Position the tooltip above the dot */
        left: 50%;
        margin-left: -100px;
        opacity: 0;
        transition: opacity 0.3s;
    }

    .dot:hover .tooltip {
        visibility: visible;
        opacity: 1;
    }
</style>
