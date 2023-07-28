import { useState } from "react";
import { evaluate } from "mathjs";

export const rows = [[7, 8, 9], [4, 5, 6], [1, 2, 3], [0]];

export const operations = ["+", "-", "*", "/"];

export const equalSign = "=";

export const Calculator = () => {
  const [value, setValue] = useState("");

  const createHandleClick = (newValue) => setValue(value + newValue);

  const list = (row) =>
    row.map((number) => (
      <button onClick={() => createHandleClick(number)} key={number}>
        {number}
      </button>
    ));

  return (
    <section>
      <h1>Calculator</h1>
      <input type="text" value={value} readOnly />
      <div role="grid">
        {rows.map((row, index) => (
          <div role="row" key={index}>
            {list(row)}
          </div>
        ))}
        {operations.map((operation) => (
          <button onClick={() => createHandleClick(operation)} key={operation}>
            {operation}
          </button>
        ))}
        <button onClick={() => setValue(eval(value))}>{equalSign}</button>
      </div>
    </section>
  );
};
