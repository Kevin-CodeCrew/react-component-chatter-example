import React, {Component} from 'react';

class BigChildComponent extends Component
{
    constructor(props)
    {
        super(props);
        this.state = {
            comp_from: this.props.component_name,
            comp_to: 0,
            message: ''
        }
    }

    // Short version of method to update state by extracting 'name' value information from evt.target and using as property name in state
    // Keeps message updated in state and redy to send when form submitted
    handleChangeProp = (evt) =>
    {
        const name = evt.target.name;
        const value = evt.target.value;
        // Update state property with same name
        console.log(`Value changed ${evt.target.name} ${evt.target.value}`);
        this.setState(
            {
                [name]: value
            });

    };

    // When a message submitted, use callback function to lift state (and send message) from top level component
    handleSubmit = (evt) =>
    {
        evt.preventDefault();
        console.log('Hit submit');
        this.props.sendMessage(this.state.comp_from, this.state.comp_to, this.state.message);

    };

    // Render the component and display any messages received and passed down from top level component via props
    render()
    {
        return (
            <div className={'big-component'}>
                <p className={'comp-name'}>{this.props.component_name}</p>
                {/*{this.props.children ? this.props.children : ''}*/}
                <div>
                    <form>
                        <div className={'formGroup'}>
                            <label htmlFor={'comp_to'}>To:</label>
                            <input type={'text'} id={'comp_to'} name={'comp_to'} onChange={this.handleChangeProp}
                                   size={1}/>
                        </div>
                        <label htmlFor={'message'}>Msg:</label>
                        <input type={'text'} id={'message'} name={'message'} onChange={this.handleChangeProp}/>
                        <div className={'formGroup'}>
                            <button onClick={this.handleSubmit}>Send</button>
                            <button type={'reset'}>Clear</button>
                        </div>
                    </form>
                    <p>
                        {this.props.msg}
                    </p>

                </div>
            </div>
        );
    }
}

export default BigChildComponent;
