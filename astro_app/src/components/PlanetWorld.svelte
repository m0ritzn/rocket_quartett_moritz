<script>
</script>

<div class="planet-container">
    <div class="earth"></div>
</div>

<style>
    .planet-container {
        position: relative;
        width: 100%;
        height: 100%; /* Full container height */
        overflow: hidden;
        background-color: #1c1c2d;
    }

    .earth {
        position: absolute;
        top: 0; /* Align the top edge */
        left: 50%;
        transform: translateX(-50%);
        width: 100%; /* Full width */
        height: 100%; /* Full height */
        border-radius: 50%; /* Make it a circle */
        background-color: #a3a092;
        background-size: cover;
        background-repeat: no-repeat;
        background-position: center;
    }
</style>
