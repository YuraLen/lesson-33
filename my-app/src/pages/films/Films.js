// import React, { useState, useEffect } from "react";

// export const Films = () => {

//   const [data, setData] = useState(null)

//   fetch('https://swapi.dev/api/films')
//   .then((res) => res.json())
//   .then(({results}) => {
//       console.log('data', results);

//           setData(results);
//   });

//   useEffect(() => {
//     return () => {

//     }
//   }, [])

//   if(!data) return <div>loading...</div>
//   return(
//     <div>
//       films

      // {
      // data.map((films) => (
      //   <p key={films.title}>{films.title}</p>
      // ))
      // }
//     </div>
//   )
// }

import React, {useEffect, useState} from 'react';
import {NavLink, Route, Switch, useParams} from 'react-router-dom';
// import {ClicksCounterFunc} from '../clicks-counter-func/ClicksCounterFunc';
import {pagesLinks} from '../../App';

export const Films = () => {
    const [data, setData] = useState(null);

    useEffect(() => {

        fetch('https://swapi.dev/api/films')
            .then((res) => res.json())
            .then(({results}) => {
                console.log('data', results);

                setData(results);
            });

        return () => {
        };
    }, []);

    if (!data) return <div>loading...</div>;

    return (
        <div>
            Films:
            {
      data.map((films) => (
        <p key={films.title}>{films.title}</p>
      ))
      }
        </div>
    );
};

export const Film = () => {
    const {id} = useParams();
    const [data, setData] = useState(null);

    useEffect(() => {
        fetch(`https://swapi.dev/api/films/${id}`)
            .then((res) => res.json())
            .then((data) => {
                console.log('data', data);

                setData(data);
            });

        return () => {
        };
    }, []);

    if (!data) return <div>loading...</div>;

    const {title} = data;

    return (
        <div>
            film {id}
            <p>title: {title}</p>
        </div>
    );
};