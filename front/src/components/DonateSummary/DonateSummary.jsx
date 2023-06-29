/* eslint-disable react/prop-types */
export const DonateSummary = ({ data }) => {
  return <>{data.map((e, index) => e > 0 && <h3 key={index}>{e}</h3>)}</>;
};
