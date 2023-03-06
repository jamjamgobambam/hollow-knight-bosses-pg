const currentBossId = window.location.pathname.substring(8,9)
console.log(currentBossId)

// fetch(`http://localhost:8081/bosses/${currentBossId}`)
//     .then(res => res.json())
//     .then((data) => populateBoss(data))

fetch(`https://hollow-knight-bosses-pg-production.up.railway.app/bosses/${currentBossId}`)
    .then(res => res.json())
    .then((data) => populateBoss(data))

function populateBoss(boss) {
    document.getElementById('boss-image').src = boss.image
    document.getElementById('boss-name').textContent = boss.name
    document.getElementById('boss-health').innerHTML = `<strong><span class="fa-solid fa-heart info-icon"></span> Health:</strong> ${boss.health}`
    document.getElementById('boss-location').innerHTML = `<strong><span class="fa-solid fa-map-location-dot info-icon"></span> Location:</strong> ${boss.location}`
    document.getElementById('boss-description').textContent = boss.description

    document.title = `Hollow Knight - ${boss.name}`
}