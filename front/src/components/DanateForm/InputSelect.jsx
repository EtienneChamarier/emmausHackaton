/* eslint-disable react/prop-types */
export const InputSelect = ({ setter, value, data }) => {
  return (
    <>
      <label htmlFor="mySelect">{data.question}</label>
      <select
        className="selectInput"
        value={value}
        onChange={(event) => setter(event.target.value)}
      >
        {data.answers.map((answer, index) => (
          <option key={index} value={index}>
            {answer}
          </option>
        ))}
      </select>
    </>
  );
};
