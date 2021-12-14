import React, { useState, useEffect } from "react";
import {useParams} from 'react-router-dom';

export const PeopleInfo = () => {
  const {id} = useParams()

  const [data, setData] = useState(null)

  fetch('https://swapi.dev/api/films')
  .then((res) => res.json())
  .then(({results}) => {
      console.log('data', results);

          setData(results);
  });

  useEffect(() => {
    return () => {

    }
  }, [])

  if(!data) return <div>loading...</div>
  return(
    <div>People info</div>
  )
}