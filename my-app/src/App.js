// import React from 'react';
// import { MainPage } from "./pages/MainPage.js";
// import { Route, Switch, BrowserRouter as Router, NavLink } from 'react-router-dom';
// import { Films, Film } from './pages/films/Films.js';
// // import { FilmInfo } from './pages/films/FilmInfo.js';
// import { People } from "./pages/people/People.js"
// import { Planets, Planet } from './pages/planets/Planets.js';
// // import { PlanetInfo } from './pages/planets/PlanetInfo.js';
// import { Starsips } from './pages/starships/Starships.js';

// export const pagesLinks = {
//   main: "/",
//   films: "/films",
//   people: "/people",
//   planets: "/planets",
//   starships: "/starships",
// }

// console.log(pagesLinks.planets);

// export const App = () => {
//   return (
//     <div>
//       <Router>
//       {/* <div><NavLink to={"/"}>main</NavLink></div> */}
//       <Nav/>
//         <Switch>
//           <Route exact path={pagesLinks.main} component={MainPage} />
//           <Route exact path={pagesLinks.films} component={Films} />
//           <Route path={`${pagesLinks.films}/:id`} component={Film} />
//           <Route exact path={pagesLinks.people} component={People} />
//           <Route exact path={pagesLinks.planets} component={Planets} />
//           <Route path={"/planets/:id"} component={Planet} />
//           <Route exact path={pagesLinks.starships} component={Starsips} />
//         </Switch>
//       </Router>
//     </div> 
//   )
// }

// const Nav = () => (
//   <div>
//     <NavLink to={pagesLinks.main}>На главную </NavLink>
//     <NavLink to={pagesLinks.films}>Фильмы </NavLink>
//     <NavLink to={pagesLinks.people}>Люди </NavLink>
//     <NavLink to={pagesLinks.planets}>Планеты </NavLink>
//     <NavLink to={pagesLinks.starships}>Корабли</NavLink>
//   </div>
//   )

import React from 'react';
import { MainPage } from "./pages/MainPage.js";
// import {CommentsApp} from '../comments-app/CommentsApp';
import {Planets, Planet} from './pages/planets/Planets';
// import {ClicksCounter} from './parts/clicks-counter/ClicksCounter';
// import {CommentsAppFunc} from '../comments-app/CommentsAppFunc';
import {BrowserRouter, Switch, Route, NavLink} from 'react-router-dom';
require('react-dom');
window.React2 = require('react');
console.log(window.React1 === window.React2);

export const paths = {
    main: '/',
    clicksCounter: '/clicks-counter',
    products: '/products',
    planets: '/planets',
    comments: {
        comments: '/comments',
        commentsAdd: '/comments/add',
        commentsNew: '/comments/new'
    }
};

export const App = () => (
    <div>
        <BrowserRouter>
            <Nav/>
            <Switch>
                <Route exact path={paths.main} component={MainPage} />
                {/* <Route path={paths.clicksCounter} component={MainPage} />
                <Route path={paths.comments.comments} component={MainPage} />
                <Route path={`${paths.products}`} component={MainPage} /> */}
                <Route exact path={paths.planets} component={Planets} />
                <Route path={`${paths.planets}/:id`} component={Planet} />
            </Switch>
        </BrowserRouter>
    </div>
);

const activeStyle = {
    fontWeight: 'bold',
    color: 'red'
};

const Nav = () => (
    <div>
        <NavLink exact activeStyle={activeStyle} to={paths.main}> на главную</NavLink>
        {/* <NavLink activeStyle={activeStyle} to={paths.clicksCounter}> clicks-counter</NavLink>
        <NavLink activeStyle={activeStyle} to={paths.comments.comments}> comments</NavLink>
        <NavLink activeStyle={activeStyle} to={paths.products}> products</NavLink> */}
        <NavLink activeStyle={activeStyle} to={paths.planets}> planets</NavLink>
    </div>
);