# react-component-chatter-example
Example react app that uses multiple components, props, and lifting state to demonstrate various react concepts.

- Child components use a callback function passed down via props from top level app container component.
- The callback function will then add them to message queue in state for the component sent a message.
- The top level app container will then pass any messages in the queue down to the destination component via props.

![Example Screen](./2020-03-17_225837.png)
