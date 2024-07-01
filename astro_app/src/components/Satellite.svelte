<script>
    export let satellite;

    // Maximum altitude for scaling purposes (you can adjust this based on your data)
    const maxAltitude = 40000; // example maximum altitude in kilometers
    let top = 100 - (satellite.satalt / maxAltitude) * 100 + "%"; // Inverse because CSS top starts from the top
    let left = Math.random() * 90 + "%"; // Keep random left positioning
</script>

<div class="dot" style="top: {top}; left: {left};">
    <div class="tooltip">
        <h3>{satellite.satname}</h3>
        <div class="info-group">
            <p><span>ID:</span> <span>{satellite.satid}</span></p>
            <p>
                <span>intDesignator:</span>
                <span>{satellite.intDesignator}</span>
            </p>
        </div>
        <h5>Position</h5>
        <div class="info-group">
            <p><span>Launch Date:</span> <span>{satellite.launchDate}</span></p>
            <p><span>Altitude:</span> <span>{satellite.satalt} km</span></p>
            <p><span>Latitude:</span> <span>{satellite.satlat}</span></p>
            <p><span>Longitude:</span> <span>{satellite.satlng}</span></p>
        </div>
    </div>
</div>

<!-- /* .tooltip {

    display: inline-flexbox;
    flex-direction: column;
    justify-content: space-between;
    width: 200px;
    color: black !important;
    background-color: white;
    text-align: left;
    border-radius: 8px;
    padding: 20px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
    position: absolute;
    z-index: 1;
    bottom: 125%;
 left: 50%;
    margin-left: -100px;
    opacity: 0;
    transition: opacity 0.3s;
} */ -->

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
        display: inline-block;
        justify-content: center;
        align-items: center;
        margin: 0;
        background-color: #f5f5f5;
        color: black;
        border-radius: 10px;
        padding: 20px;
        box-shadow: 0px 0px 10px rgb(255, 255, 255);
        width: 200px;
        position: absolute; /* Position tooltip relative to .dot */
        z-index: 1;
    }

    .info-group {
        margin-top: 10px;
    }

    .tooltip h3 {
        margin: 0;
        font-size: 22px;
    }

    .tooltip h5 {
        margin-top: 10px;
        font-size: 18px;
        margin-bottom: 10px;
    }

    .tooltip .info-group p {
        margin: 5px 0;
        display: flex;
        justify-content: space-between;
    }

    .dot:hover .tooltip {
        visibility: visible;
        opacity: 1;
    }
</style>
