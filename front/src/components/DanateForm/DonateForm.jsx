import { useState } from "react";
import { InputSelect } from "./InputSelect";
import { dataDonateNbTel, dataAverageYear } from "../../assets/data";

export const DonateForm = () => {
  const [numberOfPhone, setNumberOfPhone] = useState("");
  const [averageYear, setAverageYear] = useState(0);

  return (
    <>
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
    </>
  );
};
