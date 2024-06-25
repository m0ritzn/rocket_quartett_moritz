<!-- Satellite.svelte -->
<script>
    export let satellite;
</script>

<!-- <div>
    <h3>{satellite.satname}</h3>
    <p>satname: {satellite.satname}</p>
    <p>intDesignator: {satellite.intDesignator}</p>
    <p>satid: {satellite.satid}</p>
    <p>Launch Date: {satellite.launchDate}</p>
    <p>satalt: {satellite.satalt}</p>
    <p>satlat: {satellite.satlat}</p>
    <p>satlng: {satellite.satlng}</p>
</div> -->

<!-- <div class="dot" title={satellite.satname}></div> -->

<div class="dot">
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
        display: inline-block;
        margin: 2px;
        position: relative;
    }

    .tooltip {
        visibility: hidden;
        width: 200px;
        background-color: white;
        color: black;
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
