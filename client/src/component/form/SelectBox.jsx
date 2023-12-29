import { useState } from "react";

export default function SelectBox({
  datas = [],
  className,
  action,
  children,
  img,
}) {
  const [item, setItem] = useState(datas[0]);
  const [toggle, setToggle] = useState(false);
  const handler = (e, value) => {
    if (action) {
      action(value);
    }
    setItem(value);
    setToggle(!toggle);
  };
  return (
    <>
      {datas.length > 0 && (
        <div className={`my-select-box ${className || ""}`}>
          <button
            onClick={() => setToggle(!toggle)}
            type="button"
            className="my-select-box-btn"
          >
            {children ? children({ item }) : <span>{item}</span>}
            <span className={toggle ? "rotate" : ""}>{img}</span>
          </button>
          {toggle && (
            <div
              className="click-away"
              onClick={() => setToggle(!toggle)}
            ></div>
          )}
          <div className={`my-select-box-section ${toggle ? "open" : ""}`}>
            <ul className="list">
              {datas.map((value) => (
                <li
                  className={item === value ? "selected" : ""}
                  key={Math.random() + value}
                  onClick={(e) => handler(e, value)}
                >
                  {value}
                </li>
              ))}
            </ul>
          </div>
        </div>
      )}
    </>
  );
}
