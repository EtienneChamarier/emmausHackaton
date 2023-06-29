import { useState } from "react";
import { InputSelect } from "./InputSelect";
import { DonateSummary } from "../DonateSummary/DonateSummary";
import { dataDonateNbTel, dataAverageYear } from "../../assets/data";
import "./DonateForm.scss";

export const DonateForm = () => {
  const [numberOfPhone, setNumberOfPhone] = useState("");
  const [averageYear, setAverageYear] = useState(0);

  return (
    <>
      <div className="donatePage">
        <div className="form">
          <div className="content">
            <h2>1/2 Appareils</h2>
            <h3>Remplissez les champs ci-dessous :</h3>
            <form action="">
              <InputSelect
                setter={setNumberOfPhone}
                value={numberOfPhone}
                data={dataDonateNbTel}
              />
              <InputSelect
                setter={setAverageYear}
                value={averageYear}
                data={dataAverageYear}
              />
            </form>
          </div>
        </div>
        <div className="summary">
          <DonateSummary data={[numberOfPhone, averageYear]} />
        </div>{" "}
      </div>
    </>
  );
};
