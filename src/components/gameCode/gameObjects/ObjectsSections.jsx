import React from "react";

class ObjectsSections extends React.Component{
    constructor(props) {
        super(props);
        this.props = props;
    }

    Columns() {
        return React.createElement("div", {id: this.props.id, className: this.props.class, key: this.props.key});
    }
}

export default ObjectsSections;
