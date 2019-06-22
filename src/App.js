import React, { useState } from 'react';
import SearchBar from './components/SearchBar';
import List from './components/List';
import { getData } from './services/api';

function App() {

  const [ listItems, setListItems ] = useState(null);

  const onSearch = async (searchTerm) => {
    if(searchTerm && searchTerm.length > 0) {
      try {
        const data = await getData(searchTerm);
        setListItems(data);
      } catch(err) {
        console.log(err);
      }
    }
    else {
      setListItems(null)
    }
  }
  //console.log(listItems);
  return (
    <div className="app">
      <div className="col-md-4 offset-md-4">
        <SearchBar 
          onSearch={onSearch}
          searchOnInputChange
        />
        {listItems ? <List data={listItems}/> : null}
      </div>
    </div>
  );
}

export default App;
