// src/MainTable.js

import React, { useState } from "react";
import { AgGridReact } from "ag-grid-react";
import { rowData } from "../data/data";
import DetailView from "./DetailRenderer";
import "ag-grid-community/styles/ag-grid.css";
import "ag-grid-community/styles/ag-theme-alpine.css";

const MainTable = () => {
  const [selectedRow, setSelectedRow] = useState(null);

  // Pagination settings
  const paginationPageSize = 10;

  const columnDefs = [
    { headerName: "ID", field: "research_assistant_id", filter: true },
    { headerName: "First Name", field: "first_name", filter: true },
    { headerName: "Last Name", field: "last_name", filter: true },
    { headerName: "Email", field: "email", filter: true },
  ];

  const onRowClicked = (event) => {
    setSelectedRow(event.data);
  };

  return (
    <div style={{ display: "flex" }}>
      <div className="ag-theme-alpine" style={{ height: 800, width: "70%" }}>
        <AgGridReact
          rowData={rowData}
          columnDefs={columnDefs}
          onRowClicked={onRowClicked}
          domLayout="autoHeight"
          pagination={true}
          paginationPageSize={paginationPageSize}
          // Optionally, you can enable sorting and filtering at the grid level
          defaultColDef={{
            sortable: true,
            filter: true,
          }}
        />
      </div>
      {selectedRow && (
        <div
          style={{
            width: "30%",
            padding: "10px",
            borderLeft: "1px solid #ddd",
          }}
        >
          <DetailView data={selectedRow} />
        </div>
      )}
    </div>
  );
};

export default MainTable;
