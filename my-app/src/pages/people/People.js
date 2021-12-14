import React, { useEffect, useState } from "react";

export const People = () => {
  const [data, setData] = useState(null)

  fetch('https://swapi.dev/api/people')
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
    <div>
      People

      {
      data.map((people) => (
        <p key={people.name}>{people.name}</p>
      ))
      }
    </div>
  )
}