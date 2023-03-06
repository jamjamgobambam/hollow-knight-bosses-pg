fetch('hollow-knight-bosses-pg-production.up.railway.app/bosses')
    .then(res => res.json())
    .then((data) => populateBosses(data))

function populateBosses(bosses) {
  const mainContent = document.getElementById('main-content')

  for (const boss of bosses) {
    const bossCard = document.createElement('article')
    bossCard.style.background = `url(${boss.image})`
    bossCard.style.backgroundRepeat = 'no-repeat'
    bossCard.style.backgroundSize = 'cover'
    bossCard.style.backgroundPosition = 'center center'

    const bossCardOverlay = document.createElement('div')
    bossCardOverlay.className = 'boss-card-overlay'
    bossCard.appendChild(bossCardOverlay)

    const bossNameDiv = document.createElement('div')
    bossNameDiv.classList.add('boss-brief', 'boss-card-name')
    bossCardOverlay.appendChild(bossNameDiv)

    const bossNameHeading = document.createElement('h3')
    bossNameHeading.textContent = boss.name
    bossNameDiv.appendChild(bossNameHeading)

    const bossNameLine = document.createElement('hr')
    bossNameDiv.appendChild(bossNameLine)

    const bossLocationDiv = document.createElement('div')
    bossLocationDiv.classList.add('boss-brief', 'boss-card-location')
    bossCardOverlay.appendChild(bossLocationDiv)

    const bossLocation = document.createElement('p')
    bossLocation.textContent = boss.location
    bossLocationDiv.appendChild(bossLocation)

    const bossReadMoreDiv = document.createElement('div')
    bossReadMoreDiv.classList.add('boss-brief', 'boss-card-link')
    bossCardOverlay.appendChild(bossReadMoreDiv)

    const bossNameLink = document.createElement('a')
    bossNameLink.textContent = 'Read More'
    bossNameLink.setAttribute("role", "button")
    bossNameLink.href = `/bosses/${boss.id}/${boss.name}`
    bossReadMoreDiv.appendChild(bossNameLink)

    mainContent.appendChild(bossCard)
  }
}