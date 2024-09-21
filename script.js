function generatePreview() {



}

function initializeHandlers() {

    const buildings = document.querySelectorAll(".building");
    buildings.forEach((building) => {

        // Adding hover preview
        building.addEventListener('mouseover', (event) => {
            switch(event.target.id) {
                case "415":
                    console.log("You went over IT5");
                    break;
                case "214":
                    console.log("You went over the gym");
                    break;
            }
        })


        // Adding click behavior
        building.addEventListener('click', (event) => {
            switch(event.target.id) {
                case "415":
                    window.open("./KNU_3D/Buildings/IT5/Building_415_IT5.html", "_blank");
                    break;
                case "214":
                    window.open("./KNU_3D/Buildings/BlueDragon/Building_214_BlueDragon.html", "_blank");
                    break;
            }
        })
        
    })
}

initializeHandlers();