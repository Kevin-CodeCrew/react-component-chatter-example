import React, {Component} from 'react';

class TinyChildComponent extends Component
{
    // Note this component just displays any message passed down through props so no component state to track
    // Each tiny nested component gets passed down any messages it's parent component receives
    render()
    {
        return (
            <div className={'tiny-component'}>
                {this.props.msg}
            </div>
        );
    }
}

export default TinyChildComponent;
