import React, {Component} from 'react';
import TinyChildComponent from "./TinyChildComponent";

class NestedChildComponent extends Component
{
    // The nested component just passes any messages sent to it via props
    // and passes on down to multiple nested child components so we have
    // no component state to track
    render()
    {
        return (
            <div className={'nested-component'}>

                <p className={'comp-name'}>{this.props.component_name}</p>
                <p>{this.props.msg}</p>
                {/*Now render some nested child components and let props pass on down any messages received by parent*/}
                {/*Note how we are creating multiple instance of the TinyChildComponent*/}
                <TinyChildComponent msg={this.props.msg}/>
                <TinyChildComponent msg={this.props.msg}/>
                <TinyChildComponent msg={this.props.msg}/>
                <TinyChildComponent msg={this.props.msg}/>
                <TinyChildComponent msg={this.props.msg}/>
                <TinyChildComponent msg={this.props.msg}/>
                <TinyChildComponent msg={this.props.msg}/>
            </div>
        );
    }
}

export default NestedChildComponent;
