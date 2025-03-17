import React from 'react';

const Filter = ({ setFilter }) => (
  <div className="mb-4">
    <label htmlFor="filter" className="block font-medium mb-1">Filter Data:</label>
    <select
      id="filter"
      className="p-2 rounded-md border border-gray-300 w-full"
      onChange={(e) => setFilter(e.target.value)}
    >
      <option value="all">All Data</option>
      <option value="high">High Values (&gt;= 400)</option>
      <option value="low">Low Values (&lt; 400)</option>
    </select>
  </div>
);

export default Filter;
