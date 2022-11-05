import React from 'react';
import './styles/App.css';
import Exercise4_4 from './Exercise4/Exercise4_4';

function App() {
  return (
    <Exercise4_4/>
  );
}

class MyComponent extends React.Component{
  // state = {
  //   // first: false,
  //   // second: true,
  //   heading: "React Awesomesauce (Busy)",
  //   content: "Loading...",
  // };

  // constructor(){
  //   super();

  //   setTimeout(() => {
  //     this.setState({
  //       heading: "React Awesomesauce",
  //       content: "Done!",
  //     })
  //   }, 3000);
  // }

  render(){
    const { heading, content } =  this.state;
    return(
      <main>
        <h1>{ heading }</h1>
        <p>{ content }</p>
      </main>
    );
  }
}

export {MyComponent};
export default App;
