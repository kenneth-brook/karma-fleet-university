import React from "react";
import Card from "./Card";
import staffData from "./staffData";

function Staff() {
  return (
    <div className="staff">
      <h1>Staff</h1>
      <div className="cardWrap">
        {staffData.map((staff) => {
          return (
            <Card
              key={staff.id}
              name={staff.name}
              image={staff.image}
              role={staff.role}
            />
          );
        })}
      </div>
    </div>
  );
}

export default Staff;
