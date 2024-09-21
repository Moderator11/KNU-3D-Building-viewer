function generatePreview(label_name, image_source) {

    const label = document.createElement("label");
    const image = document.createElement("img");
    const preview_container = document.querySelector(".preview");

    image.setAttribute("src", image_source);
    image.setAttribute("id", "preview-image");
    image.setAttribute("style", "width: 500px; height: auto;");
    
    const labelText = document.createTextNode(label_name);
    label.setAttribute("for", "preview-image");
    label.appendChild(labelText);

    preview_container.append(image);
    preview_container.appendChild(label);

}

function initializeHandlers() {

    const buildings = document.querySelectorAll(".building");
    buildings.forEach((building) => {

        // Adding hover preview
        building.addEventListener('mouseover', (event) => {
            switch(event.target.id) {
                case "415":
                    generatePreview("IT5호관", "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSSWVLgyfx-A3X4Mm4vMIhzrNLbC1fhZO-nmQ&s");
                    break;
                case "214":
                    generatePreview("청령관", "https://mblogthumb-phinf.pstatic.net/MjAyMzAyMTlfNTEg/MDAxNjc2NzkxNDg4NTYx.xrfHyMStRUu0HtTcIZzHaxIQ6Wp9yP8-uBl14u60xXUg.Orxo3KBwArWwW9pjs3fGnp9Pv8DE-ZXBcvbNCDed6eAg.JPEG.skysj2212/20230202%EF%BC%BF154043.jpg?type=w800");
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