import Experience from "../components/expreriences";
import "../styles/App.css";


const Projects = () => {
  return (
    <div className="App">
      <Experience 
        name="Site e-commerce"
        description="Mise en place d’une interface de gestion de fichiers clients.
        Utilisations du Framework PHP Symfony, HTML Twig et CSS ,API Stripe,
        PhpMyAdmin."
      />
      <Experience
        name="Site e-commerce"
        description="Mise en place d'une plateforme d'e-commerce pour l'entreprise.
        Utilisations du Framework PHP Symfony, HTML Twig et CSS ,API Stripe,
        PhpMyAdmin."
      />
      <Experience
        name="Site Vitrine"
        description="Création d'un site vitrine pour un restaurant.
        Utilisation d'HTML/CSS, Bootstrap."
      />
    </div>
  );
};

export default Projects;
