<script>
    export let rocket;
    export let index;
    // export const imagePaths = ["images/falcon_heavy.jpeg", "images/saturn_v.webp", "images/ariane_5.webp", "images/long_march_5.jpeg", "images/electron.jpeg", "images/vega.jpeg", "images/falcon_1.webp", "images/pegasus.jpeg", "images/voyager_1.jpeg", "images/dart.jpeg", "images/new_horizons.webp", "images/juno.jpeg", "images/hubble.jpeg", "images/jwst.jpeg", "images/kepler.jpeg", "images/gps.jpeg", "images/curiosity.jpeg", "images/perseverance.webp", "images/zhurong.png", "images/opportunity.jpeg", "images/insight.jpeg", "images/change_4.png", "images/venera_10.jpeg", "images/hayabusa_2.webp", "images/iss.jpeg", "images/tiangong.jpeg", "images/mir.jpeg", "images/skylab.jpeg", "images/crew_dragon.webp", "images/apollo.jpeg", "images/space_shuttle.webp", "images/soyuz.webp"];
    export const imagePaths = ["src/images/falcon_heavy.jpeg", "src/images/saturn_v.webp", "src/images/ariane_5.webp", "src/images/long_march_5.jpeg", "src/images/electron.jpeg", "src/images/vega.jpeg", "src/images/falcon_1.webp", "src/images/pegasus.jpeg", "src/images/voyager_1.jpeg", "src/images/dart.jpeg", "src/images/new_horizons.webp", "src/images/juno.jpeg", "src/images/hubble.jpeg", "src/images/jwst.jpeg", "src/images/kepler.jpeg", "src/images/gps.jpeg", "src/images/curiosity.jpeg", "src/images/perseverance.webp", "src/images/zhurong.png", "src/images/opportunity.jpeg", "src/images/insight.jpeg", "src/images/change_4.png", "src/images/venera_10.jpeg", "src/images/hayabusa_2.webp", "src/images/iss.jpeg", "src/images/tiangong.jpeg", "src/images/mir.jpeg", "src/images/skylab.jpeg", "src/images/crew_dragon.webp", "src/images/apollo.jpeg", "src/images/space_shuttle.webp", "src/images/soyuz.webp"]


    function getColorByGroupLetter(groupLetter) {
        switch (groupLetter) {
            case 'A':
                return '#023059';
            case 'B':
                return '#046FCD';
            case 'C':
                return '#430E17';
            case 'D':
                return '#290147';
            case 'E':
                return '#8C331F';
            case 'F':
                return '#D99559';
            case 'G':
                return '#132999';
            case 'H':
                return '#494F50';
            
            default:
                return '#000000'; // Standardfarbe Schwarz
        }
    }

</script>


<div class="card">
    <div class="card-content">
        <!-- <div class="card-number">{rocket.group_letter}{rocket.number}</div> -->
        <div class="card-number" style="background-color: {getColorByGroupLetter(rocket.group_letter)};">
            {rocket.group_letter}{rocket.number}
          </div>
        <!-- <div class="card-title"> -->
            <div class="card-title" style="background-color: {getColorByGroupLetter(rocket.group_letter)};">
            <div class="card-name">{rocket.name}</div>
            <div class="card-group">{rocket.group}</div>
        </div>

        <div class="rocket-image">
            <img src={imagePaths[index]} alt={rocket.name} />
        </div>

        <div class="goal-icon">
            <img src="src/images/goal.svg" alt="mission goal">
        </div>
        <div class="rocket-info">{rocket.mission_goal}</div>

        <div class="stat-icon">
            <img src="src/images/year_built.svg" alt="year built">
        </div>
        <div class="stat-value">{rocket.year_built}</div>

        <div class="stat-icon">
            <img src="src/images/mission_duration.svg" alt="mission duration">
        </div>
        <div class="stat-value">{rocket.mission_duration}</div>

        <div class="stat-icon">
            <img src="src/images/max_speed.svg" alt="max speed">
        </div>
        <div class="stat-value">{rocket.max_speed}</div>

        <div class="stat-icon">
        <img src="src/images/distance_to_earth.svg" alt="max distance to earth">
        </div>
        <div class="stat-value">{rocket.max_earth_distance}</div>

        <div class="stat-icon">
            <img src="src/images/development_cost.svg" alt="development cost">
        </div>
        <div class="stat-value">{rocket.development_cost}</div>

        <div class="stat-icon">
            <img src="src/images/weight.svg" alt="weight">
        </div>
        <div class="stat-value">{rocket.weight}</div>

    </div>
</div>

<style>
    .card {
    height: 400px;
    width: 285px;
    background-color: rgb(255, 255, 240);
    border-radius: 15px;
    padding: 12px;
        color: #222;
    }

    .card-content {
    /* border: 3px solid #222; */
    height: 100%;
    border-radius: 10px;
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-template-rows: 1fr 4fr 1fr 1fr 1fr 1fr;
    }   

    .card-number {
    /* border-style: none none dashed none; */
    display: flex;
    justify-content: center ; /* Horizontales Zentrieren des Inhalts */
    align-items: center; /* Vertikales Zentrieren des Inhalts */
    background-color: #A65424;
    color: white;
    font-size: x-large;
    border-radius: 10px 0 0 0;
    }

    .card-title {
    grid-column: span 3;
    background-color: #A65424;
    color: white;
    border-radius: 0 10px 0 0;
    padding: 5px;
    /* color: white; */
    /* border: 3px dashed #222; */
    /* border-style: none none dashed dashed; */
    }

    .card-name {
    font-size: large;
    color: white;
    font-family: "Bebas Neue", sans-serif;
    }

    .card-group {
    font-size: small;
}

.rocket-image {
    grid-column: span 4;
    max-width: 100%;
    max-height: 170px;
}

.rocket-image img {
    object-fit: cover;
    height: 100%;
    width: 100%;
    border-radius: 0 0 10px 10px;
}

.rocket-info {
    grid-column: span 3;
    display: flex;
    justify-content: left; 
    align-items: center;
    border-style: none none solid none;
}

.goal-icon {
    /* border-style: dashed dashed dashed none; */
    display: flex;
    justify-content: center;
    align-items: center; 
    border-style: none none solid none;
}

.goal-icon img {
    width: 25px;
    height: 25px;
}

.stat-icon {
    border-style: none none solid none;
    display: flex;
    justify-content: center; 
    align-items: center; 
}

.stat-icon img {
    width: 25px;
    height: 25px;
}

.stat-value {
    border-style: none none solid none;
    display: flex;
    justify-content: left; 
    align-items: center; 
}
</style>
