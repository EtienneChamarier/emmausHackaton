import "./Impact.scss";
import Social from "../../assets/icones/Social.png";
import Ecosystem from "../../assets/icones/Ecosystem.png";
import Economy from "../../assets/icones/Economy.png";

function Impact() {
  return (
    <section id="impact">
      <h2>
        Grâce à <span className="red">vos</span> dons, <span className="red">vous</span> participez à l’impact :
      </h2>
      <div className="pillars">
      <div>
        <img src={Social} alt="hand heart"></img>
        <figcaption>
          <h3 className="red">Social</h3>
          <p>Permet à des personnes âgées ou en difficultés d’avoir accès au numérique et à des accompagnements.</p>
        </figcaption>
      </div>
      <div>
        <img src={Ecosystem} alt="plant heart"></img>
        <figcaption>
          <h3 className="green">Environnemental</h3>
          <p>
            Offre une seconde vie à des appareils souvent jetés alors qu’ils peuvent être réparés et utilisés à
            nouveaux.
          </p>
        </figcaption>
      </div>
      <div>
        <img src={Economy} alt="coin"></img>
        <figcaption>
          <h3 className="yellow">Économique</h3>
          <p>Propose des produits fonctionnels à moindre coûts et contribue à notre démarche dans toute la France.</p>
        </figcaption>
      </div>
      </div>
    </section>
  );
}

export default Impact;
