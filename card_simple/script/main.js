$(document).ready(function () {
    const wrapper = $('#wrapper');
    const imagePaths = ["images/falcon_heavy.jpeg", "images/saturn_v.jpeg", "images/ariane_5.jpeg", "images/long_march_5.jpeg"];

    rocketData.forEach((rocket, index) => {
        const card =
            $(`<div class="card">
        <div class="card-content">
        <div class="card-number">${rocket.group_letter}${rocket.number}</div>
        <div class="card-title">
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