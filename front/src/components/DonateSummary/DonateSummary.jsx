/* eslint-disable react/prop-types */
export const DonateSummary = ({ data }) => {
  return (
    <>
      {data.map((e, index) => (
        <h3 key={index}>{e}</h3>
      ))}
    </>
  );
};
