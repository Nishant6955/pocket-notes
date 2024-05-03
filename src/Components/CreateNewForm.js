// CreateNewForm.js
import React, { useState } from 'react';
import './CreateNewForm.css';

const CreateNewForm = ({ toggleForm, showForm, onSubmit }) => {
  const [groupName, setGroupName] = useState('');
  const [groupColor, setGroupColor] = useState('#000000'); 

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(groupName, groupColor);
    setGroupName('');
    setGroupColor('#000000'); 
  };

  return (
    <div>
      {showForm && (
        <div className='form-popup'>
          <div className='form-card'>
            <form onSubmit={handleSubmit}>
              <p>Create New Group</p>
              <table>
                <tbody>
                  <tr>
                    <td><label htmlFor='groupname'>Group Name</label></td>
                    <td><input  
                      id="groupname"
                      type="text"
                      placeholder='Enter group name'
                      value={groupName}
                      onChange={(e) => setGroupName(e.target.value)}
                    /></td>
                  </tr>
                  <tr>
                    <td><label htmlFor='choosecolor'>Choose Color</label></td>
                    <td><input  
                      id="choosecolor"
                      type="color"
                      value={groupColor}
                      onChange={(e) => setGroupColor(e.target.value)}
                    /></td>
                  </tr>
                </tbody>
              </table>
              <button type="submit">Submit</button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default CreateNewForm;
