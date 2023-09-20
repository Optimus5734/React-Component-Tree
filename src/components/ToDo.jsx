import React, { useState } from "react";
function ToDo(event1) {
  return (
    <div>
      <li
        onClick={() => {
          event1.onChecked(event1.id);
        }}
      >
        {event1.data};
      </li>
    </div>
  );
}
export default ToDo;
