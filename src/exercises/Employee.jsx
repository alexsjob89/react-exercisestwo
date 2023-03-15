import React from "react";

export const Employee = (props) => {
  const { name, id } = props;

  return (
    <div>
      <h6>{`Name: ${name}  Gendre: ${id}`}</h6>
    </div>
  );
};

export default Employee;
