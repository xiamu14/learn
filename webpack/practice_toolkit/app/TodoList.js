import React from 'react';
import {findDOMNode} from 'React-dom';

class ExampleComponent extends React.Component {
    constructor (props) {
        super (props);
    }

    ComponentWillReceiveProps(nextProps){
        if (nextProps.visible !== this.this.props.visible){
            if(nextProps.visible) {
                $(findDOMNode(this)).stop(true,true).fadeIn('slow');
            }else{
                $(findDOMNode(this)).stop(true,true).fadeOut('slow');
            }
        }
    }

    render() {
        return (
            <div className="example-component"></div>
        )
    }
}

export default ExampleComponent;
