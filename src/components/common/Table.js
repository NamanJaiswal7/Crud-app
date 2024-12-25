/**
 * Generic table component
 * @author Naman Kumar <namankumar.hk@gmail.com>
 * @created Dec 25, 2024
 * @module components/common/Table
 */


import React from "react";

/**
 * Table component renders a dynamic table with configurable columns, data, and optional action buttons.
 * It supports rendering actions like edit and delete for each row.
 * @param {Array} columns - An array of column configurations where each column has a `label` (for the header) and a `field` (for the data).
 * @param {Array} data - An array of data objects that will be displayed in the table rows.
 * @param {Array} [actions] - An optional array of action buttons (e.g., edit, delete) for each row. Each action should have a `label`, `className`, and `onClick` handler function.
 */
const Table = ({ columns, data, actions }) => {
  return (
    <div className="table-responsive">
      <table className="table table-striped">
        <thead>
          <tr>
            {columns.map((col, idx) => (
              <th key={idx}>{col.label}</th>
            ))}
            {actions && actions.length > 0 && <th>Actions</th>}
          </tr>
        </thead>
        <tbody>
          {data.length > 0 ? (
            data.map((row, rowIndex) => (
              <tr key={rowIndex}>
                {columns.map((col, colIndex) => (
                  <td key={colIndex}>{row[col.field]}</td>
                ))}
                {actions && actions.length > 0 && (
                  <td>
                    {actions.map((action, actionIndex) => (
                      <button
                        key={actionIndex}
                        className={`btn ${action.className} me-2`}
                        onClick={() => action.onClick(row)}
                      >
                        {action.label}
                      </button>
                    ))}
                  </td>
                )}
              </tr>
            ))
          ) : (
            <tr>
              <td
                colSpan={columns.length + (actions ? 1 : 0)}
                className="text-center"
              >
                No data available
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
