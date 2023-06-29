import People from "../../assets/photos/Background_photo.png";
import Arrow from "../../assets/icones/arrow.png";
import "./Landindg.scss";

function Landing() {
  return (
    <>
      <section
        id="landing"
        style={{ backgroundImage: `url(${People})`, backgroundRepeat: "no-repeat", backgroundSize: "cover" }}
      >
        <div className="landingText">
          <h2>
            Emmaus connect <span className="yellow">accompagne</span> à l’inclusion technologique
          </h2>
          <p>Vous possédez des smartphones inutilisés ?</p>
        </div>
        <div className="landingButtons">
          <input type="button" value="Proposer un don" className="buttonRed" />
          <div className="usersSection">
            <a>Portail collaborateurs</a>
            <img src={Arrow} alt="arrow" />
          </div>
        </div>
      </section>
    </>
  );
}

export default Landing;
