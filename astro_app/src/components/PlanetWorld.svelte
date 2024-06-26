<script>
</script>

<div class="container">
    <div class="earth"></div>
</div>

<style>
    .container {
        position: relative;
        width: 100vw;
        height: 100vh;
        overflow: hidden; /* Verhindert das Scrollen */
        background-color: #1c1c2d; /* Hintergrundfarbe, die zu Ihrem Design passt */
    }

    .earth {
        position: absolute;
        bottom: -50%; /* Positioniert die Erde halb außerhalb des Bildschirms */
        left: 50%;
        transform: translateX(-50%);
        width: 150%; /* Doppelte Breite, um einen großen Kreis zu erzeugen */
        height: 100%; /* Höhe des Kreises */
        border-radius: 50%;
        background-color: #a3a092;
        /* background-image: url("/mnt/data/Bildschirmfoto 2024-06-26 um 09.11.49.png"); */
        background-size: cover;
        background-repeat: no-repeat;
        background-position: center;
    }

    
</style>
