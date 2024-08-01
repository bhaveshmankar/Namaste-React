// ## `Coding assignments solution` :

// Que: Create a Nested header Element using `React.createElement`(h1,h2,h3 inside a div with class "title")

const heading = React.createElement("div" , "className:title", [
  React.createElement("h1", "key:h1" , "heading1"),
  React.createElement("h2", "key:h2" , "heading2"),
  React.createElement("h3", "key:h3" , "heading3")
]);

// Create the same element using JSX

const heading2 = (
  <div className="title">
    <h1 key='h1'>Heading 1</h1>
    <h2 key='h2'>Heading 2</h2>
    <h3 key='h3'>Heading 3</h3>
  </div>
);

// Que: Create a functional component of the same with JSX

const header3 = () => {
    return (
        <div className='Title' key='title'>
            <h1 key='h1'>This is h1 tag</h1>
            <h2 key='h2'>This is h2 tag</h2>
            <h3 key='h3'>This is h3 tag</h3>
        </div>
    );
};

// Que: Pass attribute into the tag in JSX

const heading3 = (
  <div className="title">
    <h1 key='h1' style={{color:"red"}}>Heading 1</h1>
    <h2 key='h2' style={{color:"green"}}>Heading 2</h2>
    <h3 key='h3'style={{color:"blue"}}>Heading 3</h3>
  </div>
);

// Que: Composition of Component (Add a component inside another)

const Comp1=<h1>Namaste React</h1>;

  const Comp2 =() =>{    
    return(
    <div className="title">
      {Comp1}
        <h1 key='h1' style={{color:"red"}}>Heading 1</h1>
        <h2 key='h2' style={{color:"green"}}>Heading 2</h2>
       <h3 key='h3'style={{color:"blue"}}>Heading 3</h3>
      </div>
    );
  };

/*
Q: Create a Header Component from scratch using Functional Component with JSX
- Add a Logo on Left
- Add a search bar in middle
- Add User icon on right
- Add CSS to make it look nice
*/

import React from 'react'
import logo from './logo.png';
import './Header.css';
import userIcon from './userIcon.png';

const Header = () => {
  return (
    <header className="header">
      <div className="logo">Logo</div>
      <div className="search-bar">
        <input type="text" placeholder="Search..." />
      </div>
      <div className="user-icon">
        <img src="./" alt="User Icon" />
      </div>
    </header>
  );
};

export default Header;
