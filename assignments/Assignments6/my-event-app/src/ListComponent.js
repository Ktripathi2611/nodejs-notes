import React, { useState } from 'react';

const items = ['Apple', 'Banana', 'Orange', 'Mango']; // Sample list

const ListComponent = () => {
  const [itemList, setItemList] = useState(items); // State for the item list
  const [filterText, setFilterText] = useState(''); // State for the filter text

  const handleFilterChange = (event) => {
    setFilterText(event.target.value.toLowerCase()); // Update filter text (lowercase)
  };

  const handleAddItem = (event) => {
    event.preventDefault(); // Prevent default form submission behavior
    const newItem = event.target.newItem.value; // Get the new item value
    setItemList([...itemList, newItem]); // Add new item to the list (using spread operator)
    event.target.newItem.value = ''; // Clear the input field after adding
  };

  const filteredItems = itemList.filter((item) =>
    item.toLowerCase().includes(filterText)
  ); // Filter items based on lowercase filterText

  return (
    <div>
      <input
        type="text"
        placeholder="Filter items"
        value={filterText}
        onChange={handleFilterChange}
      />
      <ul>
        {filteredItems.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
      <form onSubmit={handleAddItem}>
        <input type="text" name="newItem" placeholder="Add new item" />
        <button type="submit">Add</button>
      </form>
    </div>
  );
};

export default ListComponent;
