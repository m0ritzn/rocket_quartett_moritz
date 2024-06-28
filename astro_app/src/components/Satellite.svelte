<!-- Satellite.svelte -->
<script>
    export let satellite;

    // Maximum altitude for scaling purposes (you can adjust this based on your data)
    const maxAltitude = 40000; // example maximum altitude in kilometers
    let top = 100 - (satellite.satalt / maxAltitude) * 100 + "%"; // Inverse because CSS top starts from the top
    let left = Math.random() * 90 + "%"; // Keep random left positioning

    // Define category classes based on the category ID
    // let categoryClass;
    // switch (satellite.category) {
    //     case "Amateur radio":
    //         categoryClass = "category-amateur-radio";
    //         break;
    //     case "Beidou Navigation System":
    //         categoryClass = "category-beidou";
    //         break;
    //     // Add cases for other categories as needed
    //     default:
    //         categoryClass = "category-default";
    //         break;
    // }
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
        height: 10px;
        width: 10px;
        background-color: red;
        border-radius: 50%;
        position: absolute; /* Absolute Positionierung innerhalb des Containers */
    }

    .category-amateur-radio {
        background-color: red;
    }

    .category-beidou {
        background-color: blue;
    }

    /* Add styles for other categories as needed */
    .category-default {
        background-color: gray;
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
