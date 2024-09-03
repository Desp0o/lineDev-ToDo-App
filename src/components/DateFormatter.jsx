import React from 'react';

export const DateFormatter = ({ dateProp }) => {
  const date = new Date(dateProp);

  // Extract day, month, and year
  const day = String(date.getDate()).padStart(2, '0');
  const month = String(date.getMonth() + 1).padStart(2, '0'); // Months are zero-based
  const year = date.getFullYear();

  // Format the date as DD/MM/YYYY
  const formattedDate = `${day}/${month}/${year}`;

  return <span>{formattedDate}</span>; // Return JSX
};
