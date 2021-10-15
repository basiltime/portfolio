import "./App.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
import { faReact } from "@fortawesome/free-brands-svg-icons";
import { faSass } from "@fortawesome/free-brands-svg-icons";
import { faJs } from "@fortawesome/free-brands-svg-icons";
import { faNodeJs } from "@fortawesome/free-brands-svg-icons";
import { faAws } from "@fortawesome/free-brands-svg-icons";

function App() {
  return (
    <main className="min-h-screen mb-12">
      <div className="flex flex-row justify-end">
        <a className="text-xl m-2" href="https://github.com/basiltime">
          My Work
        </a>
        <a className="text-xl m-2" href="https://github.com/basiltime">
          Resume
        </a>
        <a className="text-xl m-2" href="https://github.com/basiltime">
          Technical Skills
        </a>
        <a className="text-xl m-2 mr-5" href="https://github.com/basiltime">
          Contact
        </a>
      </div>


      <div className="flex flex-row justify-center mt-56 text-7xl">
        Krystal Canfield
      </div>
      <div className="flex flex-row justify-center mt-16 text-4xl">
        Web Developer
      </div>
      <div className="flex justify-center mt-16 text-2xl">
        I build fast, responsive, & accessible fullstack websites.
      </div>


      <div className="flex flex-col items-center justify-center mt-56 text-4xl">
        <div className="w-max">View My Work</div>
        <FontAwesomeIcon icon={faChevronDown} className="fa-2x mt-6 animate-bounce" />
      </div>

      <div className="flex flex-row mt-56 mx-24 border-2 rounded-xl overflow-hidden">
        <div className="w-1/2 border-r-2">
          <img src="groupomania.png"></img>
        </div>

        <div className="w-1/2 p-12">
          <div className="text-3xl text-center m-8"><strong>Fullstack Social Media App</strong></div>
          <div className="m-5">Social media app for sharing images and written content, as well as 
            commenting on and liking posts. The site includes secure login, account creation, and account deletion.
          </div>

          <div className="m-5">This projects utilizes React (with hooks) for the frontend, and NodeJS and Express for the
            backend. Database is MySQL and cloud storage is AWS S3.
          </div>

          <div className="m-8 text-center">
          <FontAwesomeIcon icon={faReact} className="fa-2x mx-4" />
          <FontAwesomeIcon icon={faSass} className="fa-2x mx-4" />
          <FontAwesomeIcon icon={faNodeJs} className="fa-2x mx-4" />
          <FontAwesomeIcon icon={faJs} className="fa-2x mx-4" />
          <FontAwesomeIcon icon={faAws} className="fa-2x mx-4" />

          </div>
          
          <div className="flex flex-row justify-center items-center m-5">
            <div className="text-lg my-5">Live Site</div>
            <div className="text-2xl mx-7 my-5">|</div>
            <div className="text-lg my-5">View on Github</div>
          </div>

        </div>
      </div>

    </main>
  );
}

export default App;
