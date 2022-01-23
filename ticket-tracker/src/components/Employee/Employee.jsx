import React from "react";
import "./Employee.scss";

const EmployeeCard = (props) => {
  const { name, role } = props;

  return (
    <>
      <h2 className="employeeCard__name">{name}</h2>
      <h3>{role}</h3>
    </>
  );
};

export default EmployeeCard;