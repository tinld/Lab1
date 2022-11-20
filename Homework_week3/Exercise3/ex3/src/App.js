import avatar from "./images/luffy-modified.png";
import discussion from "./images/discussion.png";
import vector from "./images/vector.png"
import './App.css';

function App() {
  return (
    <div>
      <div className="top-container" id="home">
        <img className="top-cloud" src={"https://cdn.glitch.me/0bce4a09-c806-418b-8506-6de60673f633/%E2%80%94Pngtree%E2%80%94white%20clouds_5925281.png?v=1639749980949"} alt=""/>
          <h1>Hi. I'm Tin</h1>
          <h2>Business Analysis</h2>
          <img className="bot-cloud" src="https://cdn.glitch.me/0bce4a09-c806-418b-8506-6de60673f633/%E2%80%94Pngtree%E2%80%94white%20clouds_5925281.png?v=1639749980949" alt=""/>
          <img className="moutain" src="https://cdn.glitch.me/0bce4a09-c806-418b-8506-6de60673f633/%E2%80%94Pngtree%E2%80%94blue%20creative%20distant%20mountain%20landscape_4487121.png?v=1639749491244" alt=""/>
      </div>
      <div className="mid-container">
          <ul>
              <li><a href="#home">Home</a></li>
              <li><a href="#contact">Contact</a></li>
              <li><a href="#about">About</a></li>
            </ul>
          <img style={{width: "200px", height: "200px"}} src={avatar} alt=""/>
          <div className="skill-row-1">
              <h2>Experience</h2>
              <img className="experience-img" src={vector} alt=""/>
              <h3>Business Analysis</h3>
              <p>4 years for Microsoft</p>
              <h3>Programmer</h3>
              <p>5 years for Google</p>
          </div>
          <div className="skill-row-2">
              <br/>
              <hr/>
              <h2 id="contact">Contact</h2>
              <img className= "contact-img" src={discussion} alt=""/><br/>
              <button onclick="location.href='mailto:leductin.9e@gmail.com';">Contact me</button>
          </div>
      </div>
      <div className= "bottom-container" id="about">
          <a className= "footer-link" href="http://facebook.com/leductin1412/">Facebook</a>
          <a className= "footer-link" href="https://discord.gg/8CCFpAUGtw">Discord</a>
      </div>
    </div>
  );
}

export default App;
