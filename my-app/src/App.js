import React from 'react';
import { MainPage } from "./pages/MainPage.js";
import { Route, Switch, BrowserRouter as Router, NavLink } from 'react-router-dom';
import { Films } from './pages/films/Films.js';
import { People } from "./pages/people/People.js"
import { Planets } from './pages/planets/Planets.js';
import { Starsips } from './pages/starships/Starships.js';

export const pagesLinks = {
  main: "/",
  films: "/films",
  people: "/people",
  planets: "/planets",
  starships: "/starships",
}

console.log(pagesLinks.planets);

export const App = () => {
  return (
    <div>
      <Router>
      {/* <div><NavLink to={"/"}>main</NavLink></div> */}
      <Nav/>
        <Switch>
          <Route exact path={pagesLinks.main} component={MainPage} />
          <Route path={pagesLinks.films} component={Films} />
          <Route path={pagesLinks.people} component={People} />
          <Route path={pagesLinks.planets} component={Planets} />
          <Route path={pagesLinks.starships} component={Starsips} />
        </Switch>
      </Router>
    </div> 
  )
}

const Nav = () => (
  <div>
    <NavLink to={pagesLinks.main}>На главную </NavLink>
    <NavLink to={pagesLinks.films}>Фильмы </NavLink>
    <NavLink to={pagesLinks.people}>Люди </NavLink>
    <NavLink to={pagesLinks.planets}>Планеты </NavLink>
    <NavLink to={pagesLinks.starships}>Корабли</NavLink>
  </div>
  )
