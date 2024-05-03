
import React from 'react';
import './Sidebarr.css';

const Sidebarr = ({ items, onDelete }) => {
  const getInitials = (name) => {
    const words = name.split(' ');
    return words.map((word) => word[0]).join('').toUpperCase();
  };

  return (
    <div className="sidebar"> 
      <h3>Pocket Notes</h3>
      <div className="items">
        {items.map((item, index) => (
          <div key={index} className="item" style={{ backgroundColor: 'white' }}>
            <div className="icon" style={{ backgroundColor: item.groupColor }}>
              {getInitials(item.groupName)}
            </div>
            <p>{item.groupName}</p>
            <button className="delete-btn" onClick={() => onDelete(index)}>
              Delete
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Sidebarr;
