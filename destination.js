
function destination_page() {

this.css = "styles/destination.css"

this.html = `
<h2><span>01</span>  Pick your destination </h2>

    <section class="container">
    <img src="" width="350" style="margin:0 15%">
    <div class="destination">
      <nav><ul>
        <li>
          <input type="radio" id="moon" name="nav">
          <label for="moon">Moon</label>
        </li>
        <li class="selected">
          <input type="radio" id="mars" name="nav">
          <label for="mars">Mars</label>
        </li>
        <li>
          <input type="radio" id="europa" name="nav">
          <label for="europa">Europa</label>
        </li>
        <li>
          <input type="radio" id="titan" name="nav">
          <label for="titan">Titan</label>
        </li>
      </ul></nav>

      <div class="display-text"></div>
      
    </div></section>

`

this.script = function() {

    let section = document.querySelector('.destination')
    let container= document.querySelector('.container')
    let ul = section.children[0].children[0]
    let destinations = [ 
{
  name: "Moon",
  description: `See our planet as you’ve never seen it before. A perfect relaxing trip away to help 
  regain perspective and come back refreshed. While you’re there, take in some history 
  by visiting the Luna 2 and Apollo 11 landing sites.`,
  distance: "384,400 km",
  travel_time: "3 days",
  img: "assets/destination/image-moon.png",
},

{
  name: "Mars",
  description: `Don’t forget to pack your hiking boots. You’ll need them to tackle Olympus Mons, 
          the tallest planetary mountain in our solar system. It’s two and a half times 
          the size of Everest!`,
  distance: "225 mil. km",
  travel_time: "9 months",
  img: "assets/destination/image-mars.png"
},

{
  name: "Europa",
  description: `The smallest of the four Galilean moons orbiting Jupiter, Europa is a 
  winter lover’s dream. With an icy surface, it’s perfect for a bit of 
  ice skating, curling, hockey, or simple relaxation in your snug 
  wintery cabin.`,
  distance: "628 mil. km",
  travel_time: "3 years",
  img: "assets/destination/image-europa.png"
},

{
  name: "Titan",
  description: `The only moon known to have a dense atmosphere other than Earth, Titan 
  is a home away from home (just a few hundred degrees colder!). As a 
  bonus, you get striking views of the Rings of Saturn.`,
  distance: "1.6 bil. km",
  travel_time: "7 years",
  img: "assets/destination/image-titan.png"
},

]


      ul.children[0].children[1].onclick = (res) => nav(res.target)
      ul.children[1].children[1].onclick = (res) => nav(res.target)
      ul.children[2].children[1].onclick = (res) => nav(res.target)
      ul.children[3].children[1].onclick = (res) => nav(res.target)


      function nav(target) { 
        let filter = destinations.find(indice => {  return indice.name.includes(target.textContent) ;})

        resetAnim(section.children[1]) ; resetAnim(container.children[0])
        section.children[1].innerHTML = `
              <h1>${filter.name}</h1>

              <p>${filter.description}</p>
      

              <div class="info">
                  <p>Avg. distance <br>
                    ${filter.distance}</p>

                  <p>Est. travel time <br>
                    ${filter.travel_time}</p>
              </div>`
        container.children[0].src = filter.img

        resetAnim(section.children[1].children[2])

      }



}

}


