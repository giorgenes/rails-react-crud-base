import React, { useState, useEffect } from 'react';
import axios from 'axios';

const App = (props) => {
  const [items, setItems] = useState([]);
  const [fetching, setFetching] = useState(false);
  const [fetched, setFetched] = useState(false);


  useEffect(() => {
    if (!fetched && !fetching) {
      setFetching(true);

      // Update the document title using the browser API
      axios.get('/api/v1/items').then(res => {
        setFetched(true)
        setItems(res.data);
      });
    }

  }, [fetched, fetching]);

  const itemList = items.map(item => {
    return (<li key={item.id}>{item.name}</li>);
  });

  return (<React.Fragment>
    <div className="max-w-lg mx-auto mt-16 text-center max-w-sm rounded overflow-hidden shadow-lg p-10">
      <h1 className="mb-4 text-3xl font-black">Here are all our users!</h1>
      <p className="text-lg leading-snug">If this looks nice, it means Tailwind is set up properly.</p>
    </div>


    <ul>{itemList}</ul>
  </React.Fragment>);
}


export default App;


