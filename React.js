// REACT - Javascript Framework - by Beumsk



/**/




// BASICS

// use those import everytime! They are needed in all examples
import React from "react";
import ReactDOM from "react-dom";


// write JSX elements just as HTML
const h1 = <h1>React JS</h1>;

// define element attribute just as in HTML
const a = <a href="#0">What a link!</a>;

// multiline element are possible using parenthesis ()
const ah1 = (
  <a href="#0">
    <h1>
      What a big link!
    </h1>
  </a>
);

// a JSX expression must have exactly one outermost element
// good habit is to have a div wrapping everything
const blog = (
  <div>
    <h1>Main title</h1>
    <p>Subtitle</p>
  </div>
);




// render your HTML; first argument is the JSX element and the second points to the HTML where it will be rendered -> <div id="app"></diV>
ReactDOM.render(<h1>Hello world</h1>, document.getElementById("app"));

// you can use variable of course
const myElt = <h1>Render me!</h1>;
ReactDOM.render(myElt, document.getElementById("app"));

// or create it without JSX
const myElt = React.createElement("h1", null, "Hello world");
ReactDOM.render(myElt, document.getElementById("app"));


// class property is special, contrary to HTML, JSX need it to be called className
const myDiv = <div className="big"></div>;

// self closing tags as well, they NEED the back slash
const myImg = <img src="img.jpg" />;
const myBr = <br />;

// javascript into JSX thanks to curly braces {}
const text = "The result of 2 + 3 is:";
const myJS = <p>{text + " " + 2 + 3}</p>;

// you can have comments that way
const myCom = (
  <div>
    <h1>Comment</h1>
    {/* here is a commented text */}
  </div>
);


// create event listeners
function myFunc() {
  alert("Click on this image");
}
<img onClick={myFunc} />


// if else are not possibile inside JSX --> use ternary operator
const isTrue = <p>{1 === 1 ? "true" : "false"}</p>;

// JSX conditionals; will render the HTML only if the JS is true
const shouldBeEmpty = true;
const myDiv = (
  <div>
    {!shouldBeEmpty && <p>Not Empty</p>} 
  </div>
);


// map method and JSX; React understand it needs to make a list out of the array; use key attribute to make list item identifiable!
const numbers = ["one", "two", "three"];
const list = numbers.map((number, i) => <li key={"number_"+i}>{number}</li>);
ReactDOM.render(<ul>{list}</ul>, document.getElementById("app"));




// COMPONENTS

// React Components
class MyComponentClass extends React.Component {
  render() {
    return <h1>Hello world</h1>;
  }
};
ReactDOM.render(<MyComponentClass />, document.getElementById('app'));


// React Component multiline
class QuoteMaker extends React.Component {
  render() {
    return (
      <blockquote>
        <p>The world is full of objects, more or less interesting; I do not wish to add any more.</p>
        <cite>Douglas Huebler</cite>
      </blockquote>
    );
  }
};
ReactDOM.render(<QuoteMaker />, document.getElementById('app'));


// React Component with variables
const owl = {
  title: 'Excellent Owl',
  src: 'https://s3.amazonaws.com/codecademy-content/courses/React/react_photo-owl.jpg'
};
class Owl extends React.Component {
  render() {
    return (
      <div>
        <h1>{owl.title}</h1>
        <img src={owl.src} alt={owl.title} />
      </div>
    );
  }
}
ReactDOM.render(<Owl />, document.getElementById('app'));


// React Component render with logic
class Random extends React.Component {
  render() {
    const n = Math.floor(Math.random() * 10 + 1);
    return <h1>The number is {n}!</h1>;
  }
}
ReactDOM.render(<Random />, document.getElementById('app'));


// conditionals in components
const fiftyFifty = Math.random() < 0.5;
class TonightsPlan extends React.Component {
  render() {
    if (fiftyFifty) {
      return <h1>Tonight I'm going out WOOO</h1>;
    }
    else {
      return <h1>Tonight I'm going to bed WOOO</h1>;
    }   
  }
}
ReactDOM.render(<TonightsPlan />, document.getElementById('app'));


// Components and this
class MyName extends React.Component {
  get name() {
    return 'Einstein';
  }
  render() {
    return <h1>My name is {this.name}.</h1>;
  }
}
ReactDOM.render(<MyName />, document.getElementById('app'));


// Event listener in Component
class Button extends React.Component {
  scream() {
    alert('AAAAAAAAHHH!!!!!');
  }
  render() {
    return <button onClick={this.scream}>AAAAAH!</button>;
  }
}
ReactDOM.render(<Button />, document.getElementById('app'));




// COMPONENTS RENDER OTHER COMPONENTS

// Component render another component
class OMG extends React.Component {
  render() {
    return <h1>Whooaa!</h1>;
  }
}
class Crazy extends React.Component {
  render() {
    return (
      <OMG />
      <p>Amazing.</p>
    );
  }
}


// Import a component from another file
// exported OMG class in file OMG.js
export class OMG extends React.Component {
  render() {
    return <h1>Whooaa!</h1>;
  }
}
// import OMG class form OMG.js
import { OMG } from './OMG.js';
class Crazy extends React.Component {
  render() {
    return (
      <OMG />
      <p>Amazing.</p>
    );
  }
}


// accurate and full example of imported component
// file NavBar.js
import React from 'react';
export class NavBar extends React.Component {
  render() {
    const pages = ['home', 'blog', 'pics', 'bio', 'art', 'shop', 'about', 'contact'];
    const navLinks = pages.map(page => {
      return (
        <a href={'/' + page}>{page}</a>
      )
    });
    return <nav>{navLinks}</nav>;
  }
}
// file ProfilePage.js
import React from 'react';
import ReactDOM from 'react-dom';
import { NavBar } from './NavBar';
class ProfilePage extends React.Component {
  render() {
    return (
      <div>
        <NavBar />
        <h1>All About Me!</h1>
        <p>I like movies and blah blah blah blah blah</p>
        <img src="https://s3.amazonaws.com/codecademy-content/courses/React/react_photo-monkeyselfie.jpg" />
      </div>
    );
  }
}
ReactDOM.render(<ProfilePage />, document.getElementById('app'));




// THIS.PROPS

// access component properties
class PropsDisplayer extends React.Component {
  render() {
    <p>{JSON.stringify(this.props)}</p>
  }
}
ReactDOM.render(<PropsDisplayer name="Rem" age={26} alive={true} />, document.getElementById('app'));

// show a specific property
class Greeting extends React.Component {
  render() {
    return <h1>Hi there, {this.props.firstName}!</h1>;
  }
}
ReactDOM.render(<Greeting firstName='Rem' />, document.getElementById('app'));


// imported component with props
import React from 'react';
export class Greeting extends React.Component {
  render() {
    return <h1>Hi there, {this.props.name}!</h1>;
  }
}
import React from 'react';
import ReactDOM from 'react-dom';
import { Greeting } from './Greeting';
class App extends React.Component {
  render() {
    return (
      <div>
        <h1>Hello and Welcome to The Newzz!</h1>
        <Greeting name="Rem" />
      </div>
    );
  }
}
ReactDOM.render(<App />, document.getElementById('app'));


// conditionals with props
import React from 'react';
export class Welcome extends React.Component {
  render() {
    if (this.props.name == 'Wolfgang Amadeus Mozart') {
      return (
        <h2>hello sir it is truly great to meet you here on the web</h2>
      );
    } else {
      return (
        <h2>WELCOME "2" MY WEB SITE BABYYY!!!!!</h2>
      );
    }
  }
}
import React from 'react';
import ReactDOM from 'react-dom';
import { Welcome } from './Welcome';
class Home extends React.Component {
  render() {
    return <Welcome name='Ludwig van Beethoven' />;
  }
}
ReactDOM.render(<Home />, document.getElementById('app'));


// imported event handler
import React from 'react';
export class Button extends React.Component {
  render() {
    return (
      <button onClick={this.props.onClick}>Click me!</button>
    );
  }
}
import React from 'react';
import ReactDOM from 'react-dom';
import { Button } from './Button';
class Talker extends React.Component {
  handleClick() {
    let speech = '';
    for (let i = 0; i < 10000; i++) {
      speech += 'blah ';
    }
    alert(speech);
  }
  render() {
    return <Button onClick={this.handleClick} />;
  }
}
ReactDOM.render(<Talker />, document.getElementById('app'));


// props children
import React from 'react';
export class List extends React.Component {
  render() {
    let titleText = `Favorite ${this.props.type}`;
    if (this.props.children instanceof Array) {
      titleText += 's';
    }
    return (
      <div>
        <h1>{titleText}</h1>
        <ul>{this.props.children}</ul>
      </div>
    );
  }
}
import React from 'react';
import ReactDOM from 'react-dom';
import { List } from './List';
class App extends React.Component {
  render() {
    return (
      <div>
        <List type='Living Musician'>
          <li>Sachiko M</li>
          <li>Harvey Sid Fisher</li>
        </List>
        <List type='Living Cat Musician'>
          <li>Nora the Piano Cat</li>
        </List>
      </div>
    );
  }
}
ReactDOM.render(<App />, document.getElementById('app'));


// default props; of props doesn't exist, it will take the default value
import React from 'react';
import ReactDOM from 'react-dom';
class Button extends React.Component {
  render() {
    return (
      <button>
        {this.props.text}
      </button>
    );
  }
}
Button.defaultProps = {text: 'I am a button'};
ReactDOM.render(<Button text="heya" />, document.getElementById('app'));




// THIS.STATE


// setting and accessing a state
import React from 'react';
import ReactDOM from 'react-dom';
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { title: 'Best App' };
  }
  render() {
    return (
      <h1>
        {this.state.title}
      </h1>
    );
  }
}
ReactDOM.render(<App />, document.getElementById('app'));


// update state; don't forget to bind 'this' !; setState automatically calls render !
import React from 'react';
import ReactDOM from 'react-dom';
const green = '#39D1B4';
const yellow = '#FFD712';
class Toggle extends React.Component {
  constructor(props) {
    super(props);
    this.state = {color: green};
    this.changeColor = this.changeColor.bind(this);
  }
  changeColor() {
    const newColor = this.state.color == green ? yellow : green;
    this.setState({ color: newColor });
  }
  render() {
    return (
      <div style={{background: this.state.color}}>
        <h1>Change my color</h1>
        <button onClick={this.changeColor}>Change color</button>
      </div>
    );
  }
}
ReactDOM.render(<Toggle />, document.getElementById('app'));



