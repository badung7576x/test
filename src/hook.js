import React, { useState } from 'react';

function useCustomHook(props) { 
  const [ list, setList ] = useState(props)

  const add = (element) => {
    setList([...list, element])
  }

  return [list, add];
}

export default useCustomHook;
