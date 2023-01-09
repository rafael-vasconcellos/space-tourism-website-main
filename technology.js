
function technology_page() {

this.css = "styles/technology.css"

this.html = `
<h2> <span>03</span> Space launch 101 </h2>
    <div class="container">


        <div class="display-text">
          <h2> The terminology... </h2>
          <h1> Space capsule </h1>

          <p> A space capsule is an often-crewed spacecraft that uses a blunt-body reentry 
          capsule to reenter the Earth's atmosphere without wings. Our capsule is where 
          you'll spend your time during the flight. It includes a space gym, cinema, 
          and plenty of other activities to keep you entertained.</p>
        </div>

        <div><ul>
          <li>
            <input type="radio" id="n1" name="nav">
            <label for="n1">1</label>
          </li>
          <li>
            <input type="radio" id="n2" name="nav">
            <label for="n2">2</label>
          </li>
          <li>
            <input type="radio" id="n3" name="nav">
            <label for="n3">3</label>
          </li>
        </ul></div>

        <div class="img">
            <img src="assets/technology/image-space-capsule-portrait.jpg">
        </div>


    </div>

`

this.script = function() {

    let container = document.querySelector('.container')
    let ul = document.querySelector('.container ul')
    let i=0 ; ul.children[0].children[0].checked = true

ul.children[0].children[0].onchange = () => {

    i=0; resetAnim(container.children[0]) ; resetAnim(container.children[2])
    if (window.innerWidth<=1000) {variavel="landscape"} else {variavel="portrait"}
    container.children[0].innerHTML = `
          <h2> The terminology... </h2>
          <h1> Space capsule </h1>

          <p> A space capsule is an often-crewed spacecraft that uses a blunt-body reentry 
          capsule to reenter the Earth's atmosphere without wings. Our capsule is where 
          you'll spend your time during the flight. It includes a space gym, cinema, 
          and plenty of other activities to keep you entertained.</p>  `

          container.children[2].children[0].src = `assets/technology/image-space-capsule-${variavel}.jpg`
    }
ul.children[1].children[0].onchange = () => {

    i=1; resetAnim(container.children[0]) ; resetAnim(container.children[2])
    if (window.innerWidth<=1000) {variavel="landscape"} else {variavel="portrait"}
    container.children[0].innerHTML = `
          <h2> The terminology... </h2>
          <h1> Spaceport </h1>

          <p> A spaceport or cosmodrome is a site for launching (or receiving) spacecraft, 
          by analogy to the seaport for ships or airport for aircraft. Based in the 
          famous Cape Canaveral, our spaceport is ideally situated to take advantage 
          of the Earth’s rotation for launch. </p>  `

          container.children[2].children[0].src = `assets/technology/image-spaceport-${variavel}.jpg`
}
ul.children[2].children[0].onchange = () => {

    i=2; resetAnim(container.children[0]) ; resetAnim(container.children[2])
    if (window.innerWidth<=1000) {variavel="landscape"} else {variavel="portrait"}
    container.children[0].innerHTML = `
          <h2> The terminology... </h2>
          <h1> Launch vehicle </h1>

          <p> A launch vehicle or carrier rocket is a rocket-propelled vehicle used to carry a 
          payload from Earth's surface to space, usually to Earth orbit or beyond. Our 
          WEB-X carrier rocket is the most powerful in operation. Standing 150 metres tall, 
          it's quite an awe-inspiring sight on the launch pad! </p>  `

          container.children[2].children[0].src = `assets/technology/image-launch-vehicle-${variavel}.jpg`
}

    window.onresize = () => ul.children[i].children[0].onchange()
    window.onload = () => ul.children[i].children[0].onchange()

}

}

