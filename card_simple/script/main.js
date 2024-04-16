$(document).ready(function () {
    const wrapper = $('#wrapper');
    const imagePaths = ["images/falcon_heavy.jpeg", "images/saturn_v.jpeg", "images/ariane_5.jpeg", "images/falcon_heavy.jpeg", "images/electron.jpeg", "images/vega.jpeg", "images/falcon_1.webp", "images/pegasus.jpeg", "images/voyager_1.jpeg", "images/dart.jpeg", "images/new_horizons.webp", "images/juno.jpeg", "images/hubble.jpeg", "images/jwst.jpeg", "images/kepler.jpeg", "images/gps.jpeg", "images/curiosity.jpeg", "images/perseverance.webp", "images/zhurong.png", "images/opportunity.jpeg", "images/insight.jpeg", "images/change_4.png", "images/venera_10.jpeg", "images/hayabusa_2.webp", "images/iss.jpeg", "images/tiangong.jpeg", "images/mir.jpeg", "images/skylab.jpeg", "images/crew_dragon.webp", "images/apollo.jpeg", "images/space_shuttle.webp", "images/soyuz.webp"];

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

    rocketData.forEach((rocket, index) => {
        const groupColor = getColorByGroupLetter(rocket.group_letter); 


        const card =
            $(`<div class="card">
        <div class="card-content">
        <div class="card-number" style="background-color: ${groupColor};">${rocket.group_letter}${rocket.number}</div>
        <div class="card-title" style="background-color: ${groupColor};">
        <div class="card-name">${rocket.name}</div>
        <div class="card-group">${rocket.group}</div>
        </div>
        
            <div class="rocket-image">
                <img src="${imagePaths[index]}" alt="${rocket.name}">
            </div>
            <div class="goal-icon">
                <img src="images/goal.svg" alt="mission goal">
            </div>
            <div class="rocket-info">${rocket.mission_goal}</div>
    
            <div class="stat-icon">
                <img src="images/year_built.svg" alt="year built">
            </div>
            <div class="stat-value">${rocket.year_built}</div>
    
            <div class="stat-icon">
                <img src="images/mission_duration.svg" alt="mission duration">
            </div>
            <div class="stat-value">${rocket.mission_duration}</div>
    
            <div class="stat-icon">
                <img src="images/max_speed.svg" alt="max speed">
            </div>
            <div class="stat-value">${rocket.max_speed}</div>
    
            <div class="stat-icon">
            <img src="images/distance_to_earth.svg" alt="max distance to earth">
            </div>
            <div class="stat-value">${rocket.max_earth_distance}</div>
    
            <div class="stat-icon">
                <img src="images/development_cost.svg" alt="development cost">
            </div>
            <div class="stat-value">${rocket.development_cost}</div>
    
            <div class="stat-icon">
                <img src="images/weight.svg" alt="weight">
            </div>
            <div class="stat-value">${rocket.weight}</div>
    
        </div>
    </div>`);
        wrapper.append(card);
    });
});