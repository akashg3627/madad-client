import React, { useState } from 'react';
import { Input, Label } from 'reactstrap';



function AutoSuggest({ text, setText, sug, placeHolder }) {

  const [suggest, setSuggest] = useState([]);


  const onTextChange = (e) => {
    const value = e.target.value;
    let temp = [];
    if (value.length > 0) {
      temp = sug.filter(v => v.toLowerCase().startsWith(value.toLowerCase()));
    }
    setSuggest(temp);
    setText(value);
  }

  function suggestionSelected(value) {
    setText(value);
    setSuggest([]);

  }
  const list = suggest.slice(0, 5).map((s) => {
    return (
      <li className="search-li" onClick={() => suggestionSelected(s)}>{s}</li>
    )
  })
  return (

    <div>
      <Input required value={text} onChange={onTextChange} placeholder={placeHolder} />
      <Label>
          {suggest.length>0 
          ?
          <ul className="search">
           {list} 
         </ul>
         :  null
         }
      </Label>

    </div>
  );
}

export default AutoSuggest;