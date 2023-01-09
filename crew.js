
function crew_page() {

this.css = "styles/crew.css"

this.html = `
<h2><span>02</span> Meet your crew</h2>
  <div class="container">
      <div class="display-text"></div>
      <div>
          <img>
      </div>
  </div>

<form class="inputs">
  <input type="radio" name="slide">
  <input type="radio" name="slide">
  <input type="radio" name="slide">
  <input type="radio" name="slide">
</form>

`


this.script = function() { 
    
    let form = document.querySelector('.inputs')
    let container = document.querySelector('.container')
    let i

form.children[0].onchange = (res) => { 
    resetAnim(container.children[0]) ; resetAnim(container.children[1])
    i=0
    container.children[0].innerHTML = `
      <h2> Commander </h2>
      <h1> Douglas Hurley </h1>

      <p> Douglas Gerald Hurley is an American engineer, former Marine Corps pilot 
      and former NASA astronaut. He launched into space for the third time as 
      commander of Crew Dragon Demo-2. </p>`

    container.children[1].children[0].src = "assets/crew/image-douglas-hurley.png"
    if (res) {interval.reset()}
}

form.children[1].onchange = (res) => { 
    resetAnim(container.children[0]) ; resetAnim(container.children[1])
    i=1
    container.children[0].innerHTML = `
      <h2> Flight Engineer </h2>
      <h1> Anousheh Ansari </h1>

      <p> Anousheh Ansari is an Iranian American engineer and co-founder of Prodea Systems. 
      Ansari was the fourth self-funded space tourist, the first self-funded woman to 
      fly to the ISS, and the first Iranian in space.  </p>`

    container.children[1].children[0].src = "assets/crew/image-anousheh-ansari.png"
    if (res) {interval.reset()}
}

form.children[2].onchange = (res) => { 
    resetAnim(container.children[0]) ; resetAnim(container.children[1])
    i=2
    container.children[0].innerHTML = `
      <h2> Pilot </h2>
      <h1> Victor Glover </h1>

      <p> Pilot on the first operational flight of the SpaceX Crew Dragon to the 
      International Space Station. Glover is a commander in the U.S. Navy where 
      he pilots an F/A-18.He was a crew member of Expedition 64, and served as a 
      station systems flight engineer.  </p>`

    container.children[1].children[0].src = "assets/crew/image-victor-glover.png"
    if (res) {interval.reset()}
}

form.children[3].onchange = (res) => { 
    resetAnim(container.children[0]) ; resetAnim(container.children[1])
    i=3
    container.children[0].innerHTML = `
      <h2> Mission Specialist </h2>
      <h1> Mark Shuttleworth </h1>

      <p> Mark Richard Shuttleworth is the founder and CEO of Canonical, the company behind 
      the Linux-based Ubuntu operating system. Shuttleworth became the first South 
      African to travel to space as a space tourist. </p>`

    container.children[1].children[0].src = "assets/crew/image-mark-shuttleworth.png"
    if (res) {interval.reset()}
}

    form.children[0].checked = true ; form.children[0].onchange(false)



    let interval = new timer( () => {
        if (i >= 3) {i=-1}; i++
        form.children[i].checked = true ; form.children[i].onchange(false)

    }, 5000 )}}


