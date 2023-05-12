import React from 'react';

export const Components = () => {
  return (
    <>
      <Components1 x={1} />
      <Components1 />

      <br />

      <Components2 />

      <br />

      <Components3 />
    </>
  );
};

// TODO: What does this component do?
//this component takes in a variable called props and assigns that vatiable to x and it returns jsx that shows component 1 and shows the x *2
const Components1 = (props) => {
  const x = props.x;
  return <div>Components1: {x * 2}</div>;
};

// TODO: What does this component show?
//it shows hte jsx returned by a component which takes in a string and returns that string in a span tag all uppercased
const Components2 = () => {
  return (
    <div>
      Components2: <WelcomeLoudly name={'Jared'} />
    </div>
  );
};
const WelcomeLoudly = (props) => {
  const name = props.name ?? '';
  return <span>WELCOME {name.toUpperCase()}</span>;
};
// ?? if something is undefined or null the value will be defined to the vlaue you put after
// TODO: Make some more basic components, and render them after "Components3".
const Components3 = () => {
  return (
    <div>
      Components3:
      <Goodbyesilently name={'AMIR'} />
    </div>
  );
};
const Goodbyesilently = (props) => {
  let name = props.name;
  return <span> {name.toLowerCase()}</span>;
};
