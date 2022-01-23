import React from "react";
import "./TicketTrackerGallery.scss";
import EmployeeCard from "../../components/Employee/Employee"

const TicketTrackerGallery = (props) => {
  const { EmployeeCardArr } = props;

  const employeCards = EmployeeCardArr.map((employee, index) => {
    return (
      <div className="employeeCard">
        <EmployeeCard key={index} name={employee.name} role={employee.role} />
      </div>
    );
  });

  return <div className="employeeCard__container">{employeCards}</div>;
};

export default TicketTrackerGallery;