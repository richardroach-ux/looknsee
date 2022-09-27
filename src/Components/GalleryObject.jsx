import React from "react";

class GalleryObject extends React.Component {
    componentDidMount() {
        // Sets the position of the element randomly when it loads.
        // Sets the elements as javascript objects.
        const galleryWrapper = document.getElementById("redBox");
        const displayArea = document.getElementById("gallery-container");
        // Takes the height and width of the gallery element as a percentage of the proportion of the container it's displayed within.
        let percentHeight = (galleryWrapper.offsetHeight / displayArea.offsetHeight) * 100;
        let percentWidth = (galleryWrapper.offsetWidth / displayArea.offsetWidth) * 100;
        // Sets the position value for horizontal and vertical placement by getting a random value.
        // To ensure the element is not placed so that it bleeds off the page, the range of random values is limited by an amount equal to the elements proportions.
        // In this setup, even if the maximum value is randomly generated, the element will be given enough of a margin to fully display.
        let verticalPosition = Math.floor(Math.random() * (100 - percentHeight));
        let horizontalPosition = Math.floor(Math.random() * (100 - percentWidth));
        // Sets the CSS styling of the element by taking the values above and converting them into percentages.
        galleryWrapper.style.top = `${verticalPosition}` + '%';
        galleryWrapper.style.left = `${horizontalPosition}` + '%';
        
    }
    render() {
        return <div id="redBox">
            <img id="gallery-image" src=""/>
            <p id="caption">Display</p>
        </div>
    }
}

export default GalleryObject;