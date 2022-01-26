import React from "react";
import "./Employee.scss";
import Counter from "../Counter/Counter"

const EmployeeCard = (props) => {
  const { name, role } = props;

  return (
    <>
      <h2 className="employeeCard__name">{name}</h2>
      <h3 className="employeeCard__role">{role}</h3>
      <Counter/>
    </>
  );
};

export default EmployeeCard;