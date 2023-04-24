import { HashRouter, Switch, Route, Redirect } from "react-router-dom";
import { Movies } from "../Movie/Movies";
import { People } from "../People/People";
import { SearchBar } from "./SearchBar";
import {
  Header,
  NavBar,
  NavItem,
  NavList,
  StyledNavLink,
  StyledNavLinkTitle,
  StyledVideoIcon,
  Title,
} from "./styled";
import { toActor, toMovie, toMovies, toPeople } from "./route";
import { MoviePage } from "../Movie/MoviePage";
import { ActorPage } from "../People/ActorPage/ActorPage";

export const NavigationBar = ({ id }) => {
  return (
    <HashRouter>
      <Header>
        <NavBar>
          <NavList>
            <StyledNavLinkTitle to={toMovies()}>
              <StyledVideoIcon />
              <Title>Movies Browser</Title>
            </StyledNavLinkTitle>
            <NavItem>
              <StyledNavLink to={toMovies()}>MOVIES</StyledNavLink>
            </NavItem>
            <NavItem>
              <StyledNavLink to={toPeople()}>PEOPLE</StyledNavLink>
            </NavItem>
          </NavList>
          <SearchBar />
        </NavBar>
      </Header>
      <Switch>
        <Route path={toMovies()}>
          <Movies />
        </Route>
        <Route path={toMovie()}>
          <MoviePage />
        </Route>
        <Route path={toPeople()}>
          <People />
        </Route>
        <Route path={toActor(":id")}>
          <ActorPage />
        </Route>
        <Route path="/">
          <Redirect to={toMovies()} />
        </Route>
      </Switch>
    </HashRouter>
  );
};