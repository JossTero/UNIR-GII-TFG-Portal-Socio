import React, { useState } from "react";
import DayPicker from "react-daypicker";
import "react-daypicker/lib/DayPicker.css";

function Pikaday() {
  const [active, setActive] = useState(false);
  const [day, setDay] = useState(new Date());

  return (
    <>
      <input
        onClick={() => setActive(!active)}
        type="text"
        value={day}
        id="dateInput"
        placeholder="Select date"
      />
      <div
        className="dayPiker"
        style={{ display: active ? "block" : "none" }}
        onClick={(e) => {
          if (e.target.tagName.toLowerCase() === "td") {
            setActive(!active);
          }
        }}
      >
        <DayPicker active={new Date()} onDayClick={(day) => setDay(day)} />
      </div>
    </>
  );
}

export default Pikaday;
