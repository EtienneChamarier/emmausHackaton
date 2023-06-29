/* eslint-disable react/prop-types */
export const DonateSummary = ({ data }) => {
  return (
    <>
      {data.map(
        (e, index) =>
          e.value > 0 && (
            <div key={index}>
              <p>{e.name}</p>
              <p>{e.value}</p>
            </div>
          )
      )}
    </>
  );
};
