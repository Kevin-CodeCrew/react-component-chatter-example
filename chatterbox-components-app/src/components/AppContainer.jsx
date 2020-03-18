import React, {Component} from 'react';
import BigChildComponent from "./BigChildComponent";
import LittleChildComponent from "./LittleChildComponent";
import NestedChildComponent from "./NestedChildComponent";

class AppContainer extends Component
{
    constructor(props)
    {
        super(props);
        // The message_queue property in state will hold all the messages being sent around.
        // Example of a message_queue with 2 message objects in it.
        // One sent to component 3 and one sent to component 6
        /*
            {
                message_queue: [
                    {3: '(2) Well howdy!'},
                    {6: '(5) How ya doin?}'
                ]
         */
        this.state = {
            message_queue: []
        }
    }

    // Callback function for any child component to send message to another component
    // Comp_from = name of sending component. comp_to = name of component to send msg to. message = The message to send
    sendMessage = (comp_from, comp_to, message) =>
    {
        // The method will create a new message object using the 'to' id passed in
        // and add it to the msq queue state
        console.log(`Sending ${message} to ${comp_to}`);
        this.setState(
            {
                // Example message object from component 1 to 2 {2: '(1) Well Hello There!'}
                message_queue: {[comp_to]: `${comp_from}: ${message}`}
            }
        );
    };

    render()
    {
        // In render we pass down the current message queue for each component by it's component name/number
        // Note we are combining components of different types. Some components like NestedChildComponent
        // Has their own child components.
        return (
            <div className={'wrapper'}>
                <BigChildComponent component_name='1' msg={this.state.message_queue[1]} sendMessage={this.sendMessage}/>
                <BigChildComponent component_name='2' msg={this.state.message_queue[2]} sendMessage={this.sendMessage}/>
                <NestedChildComponent component_name='3' msg={this.state.message_queue[3]}
                                      sendMessage={this.sendMessage}/>
                <LittleChildComponent component_name='4' msg={this.state.message_queue[4]}
                                      sendMessage={this.sendMessage}/>
                <LittleChildComponent component_name='5' msg={this.state.message_queue[5]}
                                      sendMessage={this.sendMessage}/>
                <LittleChildComponent component_name='6' msg={this.state.message_queue[6]}
                                      sendMessage={this.sendMessage}/>
            </div>
        )
    }
}

export default AppContainer;
