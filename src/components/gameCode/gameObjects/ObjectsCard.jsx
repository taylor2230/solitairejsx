import React from "react";

class ObjectsCard extends React.Component {
    constructor(props) {
        super(props);
        this.props = props;
    }

    Card() {
        const CardImg = React.createElement("img", {src: this.props.img,
        style:{width:100 + "%", height:100 + "%"}},null);
        return React.createElement("button", {id:this.props.id, className:this.props.class}, CardImg);
    }
}

export default ObjectsCard;
