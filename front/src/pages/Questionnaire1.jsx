import React from 'react';



function Questionnaire1() {
  return (
    <>
    <h1>Remplissez les champs ci-dessous pour évaluer le smartphone :</h1>
      <p> Marque: </p>
    <div className='container'>
    <select class="form-select" >
        <option selected disabled = {true}> sélectionnez </option>
        <option value="1">Samsung</option>
        <option value="2">Iphone</option>
        <option value="3">Blackberry</option>
    
     </select>
      <p>Famille: </p>
      <select class="form-select" >
        <option selected disabled = {true}> sélectionnez </option>
        <option value="1">Galaxi S</option>
        <option value="2">Iphone14</option>
        <option value="3">Blackberry S10</option>
     </select>

      <p>Modèle exact: </p>
      <select class="form-select" >
        <option selected disabled = {true}> sélectionnez </option>
        <option value="1">Galaxi S22 ultra </option>
        <option value="2">Two</option>
        <option value="3">Three</option>
     </select>

    <p>Capacité de stockage: </p>
      <select class="form-select" >
        <option selected disabled = {true}> sélectionnez </option>
        <option value="1">128 Go</option>
        <option value="2">256</option>
        <option value="3">1t</option>
     </select>   
    </div>
  </>
     )
}

export default Questionnaire1;