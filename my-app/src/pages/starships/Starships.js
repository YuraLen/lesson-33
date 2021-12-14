import React, {useState, useEffect} from "react";

export const Starsips = () => {
  const [data, setData] = useState(null)

  fetch('https://swapi.dev/api/starships')
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
      starships

      {
      data.map((starships) => (
        <p key={starships.name}>{starships.name}</p>
      ))
      }
    </div>
  )
}