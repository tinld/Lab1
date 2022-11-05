import React from 'react';
import './styles/App.css';
import Exercise2 from './Exercise2/Exercise2';
import Exercise2_2 from './Exercise2/Exercise2_2';
import MyInput from './Exercise3/Exercise3';
function App() {
  return (
    <MyInput />
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
