// import React from 'react'

const InputElement = (props) => {
  return (
    <>
      {props.select ? (
        <div className={props.className}>
          <label htmlFor={props.id}>{props.name}</label>
          <select id={props.id} value={props.value} onChange={props.onChange}>
            <option value=""></option>
            {props.nullElement && <option value="null">-/-</option>}
            {props.optionArray.map((element, index) => (
              <option
                key={props.optionArray[index]}
                value={props.optionArray[index]}
              >
                {props.optionArray[index]}
              </option>
            ))}
          </select>
        </div>
      ) : (
        <div>
          <label htmlFor={props.id}>{props.name}</label>
          <input
            type={props.type}
            value={props.value}
            onChange={props.onChange}
            placeholder={props.placeholder}
          />
        </div>
      )}
    </>
  );
};

export default InputElement;
