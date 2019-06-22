import React, { useState } from 'react';
import PropTypes from 'prop-types';

export default function SearchBar(props) {
  
  const [inputVal, setInputVal] = useState(null);

  const handleInputChange = (e) => { 
    setInputVal(e.target.value);
    if(props.searchOnInputChange) {
      props.onSearch(e.target.value);
    } 
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    if(inputVal !== null)
      props.onSearch(e.target.value);
  }
  
  return (
    <form
      onSubmit={handleSubmit}
    >
      <div className='input-group'>
        <input 
          type='text'
          className='form-control'
          onChange = {handleInputChange} 
          placeholder='Search users by ID, name, address, pincode and items'
        />
        <div className='input-group-append'>
          <input className='btn btn-outline-dark' type='submit' value='Search'/>
        </div>
      </div>
    </form>
  )
}

SearchBar.propTypes = {
  onSearch: PropTypes.func.isRequired,
  searchOnInputChange: PropTypes.bool
}

SearchBar.defaultProps = {
  searchOnInputChange: true
}