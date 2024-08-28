// src/DetailView.js

import React, { useState } from "react";
import { AgGridReact } from "ag-grid-react";
import "ag-grid-community/styles/ag-grid.css";
import "ag-grid-community/styles/ag-theme-alpine.css";

const DetailView = ({ data }) => {
  const [showPersonalDetails, setPersonalDetails] = useState(false);
  const [showProjectDetails, setShowProjectDetails] = useState(false);
  const [showSupervisorDetails, setShowSupervisorDetails] = useState(false);
  const [showNetworkDetails, setShowNetworkDetails] = useState(false);

  // Personal Information columns and data
  const personalInfoColumnDefs = [
    { headerName: "Field", field: "field" },
    { headerName: "Value", field: "value" },
  ];

  const personalInfoRowData = [
    { field: "First Name", value: data.first_name },
    { field: "Last Name", value: data.last_name },
    { field: "Age", value: data.age },
    { field: "Email", value: data.email },
    { field: "Country", value: data.country },
    { field: "Postal Code", value: data.postal_code },
    { field: "Gender", value: data.gender },
    { field: "Language", value: data.language },
    { field: "Job Title", value: data.job_title },
    { field: "Ethnicity", value: data.ethnicity },
    { field: "Education Level", value: data.education_level },
    { field: "Years of Experience", value: data.years_of_experience },
    { field: "Salary", value: data.salary },
    { field: "Start Date", value: data.start_date },
    { field: "End Date", value: data.end_date },
  ];

  // Project Information columns and data
  const projectInfoColumnDefs = [
    { headerName: "Field", field: "field" },
    { headerName: "Value", field: "value" },
  ];

  const projectInfoRowData = [
    { field: "Project Name", value: data.project_name },
    { field: "Description", value: data.project_description },
    { field: "Hours Worked Per Week", value: data.hours_worked_per_week },
  ];

  // Supervisor Information columns and data
  const supervisorInfoColumnDefs = [
    { headerName: "Field", field: "field" },
    { headerName: "Value", field: "value" },
  ];

  const supervisorInfoRowData = [
    { field: "Supervisor Name", value: data.supervisor_name },
    { field: "Supervisor Email", value: data.supervisor_email },
    { field: "Supervisor Phone", value: data.supervisor_phone },
    { field: "Performance Rating", value: data.performance_rating },
    { field: "Feedback Received", value: data.feedback_received },
    {
      field: "Training Completed",
      value: data.training_completed ? "Yes" : "No",
    },
  ];

  // Network Information columns and data
  const networkInfoColumnDefs = [
    { headerName: "Field", field: "field" },
    { headerName: "Value", field: "value" },
  ];

  const networkInfoRowData = [
    { field: "Team Name", value: data.team_name },
    { field: "Team Size", value: data.team_size },
    { field: "Work Location", value: data.work_location },
    { field: "Work Schedule", value: data.work_schedule },
    { field: "Overtime Hours", value: data.overtime_hours },
    { field: "Overtime Pay Rate", value: data.overtime_pay_rate },
    { field: "IP Address (IPv4)", value: data.ip_address_four },
    { field: "IP Address (IPv6)", value: data.ip_address_six },
    { field: "MAC Address", value: data.mac },
    { field: "Domain", value: data.domain },
    { field: "User Agent", value: data.useragent },
  ];

  return (
    <div style={{ padding: "10px", display: "flex", flexDirection: "column" }}>
      <h3>
        Details for {data.first_name} {data.last_name}
      </h3>

      <div style={{ marginBottom: "20px" }}>
        <button
          onClick={() => setPersonalDetails(!showPersonalDetails)}
          style={{ marginBottom: "10px" }}
        >
          Toggle Personal Information {showPersonalDetails ? "▲" : "▼"}
        </button>
        {showPersonalDetails && (
          <div
            className="ag-theme-alpine"
            style={{ height: 200, width: "100%" }}
          >
            <AgGridReact
              rowData={personalInfoRowData}
              columnDefs={personalInfoColumnDefs}
              domLayout="autoHeight"
            />
          </div>
        )}
      </div>
      <div style={{ marginBottom: "20px" }}>
        <button
          onClick={() => setShowProjectDetails(!showProjectDetails)}
          style={{ marginBottom: "10px" }}
        >
          Toggle Project Information {showProjectDetails ? "▲" : "▼"}
        </button>
        {showProjectDetails && (
          <div
            className="ag-theme-alpine"
            style={{ height: 200, width: "100%" }}
          >
            <AgGridReact
              rowData={projectInfoRowData}
              columnDefs={projectInfoColumnDefs}
              domLayout="autoHeight"
            />
          </div>
        )}
      </div>
      <div style={{ marginBottom: "20px" }}>
        <button
          onClick={() => setShowSupervisorDetails(!showSupervisorDetails)}
          style={{ marginBottom: "10px" }}
        >
          Toggle Supervisor Information {showSupervisorDetails ? "▲" : "▼"}
        </button>
        {showSupervisorDetails && (
          <div
            className="ag-theme-alpine"
            style={{ height: 200, width: "100%" }}
          >
            <AgGridReact
              rowData={supervisorInfoRowData}
              columnDefs={supervisorInfoColumnDefs}
              domLayout="autoHeight"
            />
          </div>
        )}
      </div>
      <div>
        <button
          onClick={() => setShowNetworkDetails(!showNetworkDetails)}
          style={{ marginBottom: "10px" }}
        >
          Toggle Network Information {showNetworkDetails ? "▲" : "▼"}
        </button>
        {showNetworkDetails && (
          <div
            className="ag-theme-alpine"
            style={{ height: 300, width: "100%" }}
          >
            <AgGridReact
              rowData={networkInfoRowData}
              columnDefs={networkInfoColumnDefs}
              domLayout="autoHeight"
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default DetailView;
