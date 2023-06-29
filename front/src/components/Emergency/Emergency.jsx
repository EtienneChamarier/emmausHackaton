import "./Emergency.scss";
import Meeting from "../../assets/illustration/Meeting_3_characters.svg";

function Emergency() {
  return (
    <section id="emergency">
      <div className="emergencyText">
        <h2>
          Répondre à <span className="red">l’urgence</span> numérique et sociale
        </h2>
        <p>
          Il faut désormais se connecter pour accéder à la plupart des services du quotidien ( logements, médecin,
          papiers, droits sociaux ), alors même que 48% éprouvent au moins un frein qui les empêche d’utiliser pleinement
          les outils numériques et internet
        </p>
      </div>
      <img src={Meeting} alt="characters meetings"/>
    </section>
  );
}

export default Emergency;
