import React from 'react';


// every component is a class
class StorePicker extends React.Component {
  // what DOM element do I return to the page
  // from render you can only return one element
  // or
  // <React.Fragment> tag, <div> <> or
  // import React, {Fragment} from 'react';
  // then use Fragment instead of React.Fragment
  myInput =React.createRef();

  // arrow functions binding
goToStore = (event) => {
  event.preventDefault();
  // get text from input
  const storeName = this.myInput.current.value;
  // change page to whatever was entered

  this.props.history.push(`/store/${storeName}`)

}
  render(){
    return (
      // no sibling elements
      <form action="" className="store-selector"
      onSubmit={this.goToStore}>
      <h2> Please Enter A Store  </h2>
      <input
      type="text"
      ref={this.myInput}
      required
      placeholder="Store Name"
       />
      <button type="submit"> Visit Store --> </button>
    </form>
  )
  }
}

// Alternative to jsx
// return React.createElement('p', {className: 'hey'}, 'Heyyyyooo');
export default StorePicker;
