import React from 'react';


// every component is a class
class StorePicker extends React.Component {
  // what DOM element do I return to the page
  render(){
    return <p> I am a store Picker</p>
  }
}

// Alternative to jsx
// return React.createElement('p', {className: 'hey'}, 'Heyyyyooo');
export default StorePicker;
