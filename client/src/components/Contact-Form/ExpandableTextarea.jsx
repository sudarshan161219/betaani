import React, { useState } from 'react';

const ExpandableTextarea = () => {
  const [text, setText] = useState('');
  const [rows, setRows] = useState(1);

  const handleChange = (event) => {
    const textareaLineHeight = 24; // Adjust this value based on your textarea's line-height
    const previousRows = event.target.rows;
    event.target.rows = 1; // Reset the rows to a single line to calculate the new height

    const currentRows = Math.ceil(event.target.scrollHeight / textareaLineHeight);

    if (currentRows === previousRows) {
      event.target.rows = currentRows;
    }

    setText(event.target.value);
    setRows(currentRows);
  };

  return (
    <textarea
      value={text}
      rows={rows}
      onChange={handleChange}
      placeholder='Message'
    />
  );
};

export default ExpandableTextarea;
