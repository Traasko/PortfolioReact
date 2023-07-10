// import logo from "../assets/img/logo.svg";
import About from "../components/about";
import Home from "../components/home";
import DarkModeToggle from "../components/DarkModeToggle";
import "../styles/App.css";

const Main = () => {
  return (
    <>
      <div className="App">
        <Home
          nom="Yalap"
          prenom="Thomas"
          formation="Bachelor Développeur FullStack & DevOps"
        />
        <About
          description="Je suis un passionné du développement web. Mon esprit créatif et mon amour pour la technologie 
        se rejoignent dans ce domaine fascinant. Je suis constamment à l'affût des dernières tendances et des nouvelles 
        technologies pour créer des expériences en ligne innovantes et conviviales. Le développement web est ma passion et ma 
        vocation, et j'ai hâte de continuer à repousser les limites de ce domaine en constante évolution."
        />
        <DarkModeToggle/>
      </div>
    </>
  );
};

export default Main;
