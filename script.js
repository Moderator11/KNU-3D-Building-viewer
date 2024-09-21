function generatePreview(label_name, model_source) {

    const label = document.createElement("label");
    const model = document.createElement("model-viewer");
    const preview_container = document.querySelector(".preview");

    model.setAttribute("src", model_source);
    model.setAttribute("shadow-intensity", "1");
    model.setAttribute("auto-rotate", "");

    label.appendChild(model);
    
    const labelText = document.createTextNode(label_name);
    label.appendChild(labelText);

    preview_container.appendChild(label);

}

function initializeHandlers() {

    const buildings = document.querySelectorAll(".building");
    buildings.forEach((building) => {

        // Adding hover preview
        building.addEventListener('mouseover', (event) => {
            switch(event.target.id) {
                case "415":
                    generatePreview("IT5호관", "Buildings/IT5/IT5_fullModel.glb");
                    break;
                case "214":
                    generatePreview("청룡관", "Buildings/BlueDragon/BlueDragon_fullModel.glb");
                    break;
            }
        })

        building.addEventListener('mouseout', () => {
            const preview_container = document.querySelector(".preview");
            while(preview_container.firstChild) {
                preview_container.removeChild(preview_container.lastChild);
            }
        })


        // Adding click behavior
        building.addEventListener('click', (event) => {
            switch(event.target.id) {
                case "415":
                    window.open("Buildings/IT5/Building_415_IT5.html", "_blank");
                    break;
                case "214":
                    window.open("Buildings/BlueDragon/Building_214_BlueDragon.html", "_blank");
                    break;
            }
        })
        
    })
}

initializeHandlers();