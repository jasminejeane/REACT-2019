import React from 'react';


// every component is a class
class StorePicker extends React.Component {
  // what DOM element do I return to the page
  // from render you can only return one element
  // or
  // <React.Fragment> tag, <div> <> or
  // import React, {Fragment} from 'react';
  // then use Fragment instead of React.Fragment

  render(){
    return (
      // no sibling elements
      <form action="" className="store-selector">
      <h2> Please Enter A Store  </h2>
      <input type="text" required placeholder="Store Name" />
      <button type="submit"> Visit Store --> </button>
    </form>
  )
  }
}

// Alternative to jsx
// return React.createElement('p', {className: 'hey'}, 'Heyyyyooo');
export default StorePicker;
