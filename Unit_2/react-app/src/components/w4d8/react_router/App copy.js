import React, { Suspense } from "react";
// import { Route, Switch, Redirect } from "react-router-dom";
import { Router, Route, Navigate } from "react-router-dom";
import { Container, Row, Col } from "react-bootstrap";
import Main from "./pages/Main";
import NavBar from "./components/NavBar";
import Details from "./pages/Details";
import LoadingSpinner from "../../w4d6/loading_spinner/components/LoadingSpinner";

// import PageOne from "./pages/PageOne";
// import PageTwo from "./pages/PageTwo";
// import PageThree from "./pages/PageThree";

const PageOne = React.lazy(() => import("./pages/PageOne"));
const PageTwo = React.lazy(() => import("./pages/PageTwo"));
const PageThree = React.lazy(() => import("./pages/PageThree"));

const App = () => {
  return (
    <Container>
      <NavBar />
      <main>
        {/* <Suspense
          fallback={
            <div className="centered">
              <LoadingSpinner />
            </div>
          }
        > */}
        {/* <Switch>
        <Route exact path="/">
          <Main />
        </Route>
        <Route exact path="/page-one">
          <PageOne />
        </Route>
        <Route path="/page-one/:item">
          <Details />
        </Route>
        <Route path="/page-one/page-two">
          <PageTwo />
        </Route>
        <Route exact path="/page-three">
          <PageThree />
        </Route>
        <Route exact path="/main">
          <Redirect to="/" />
        </Route>
        </Switch> */}

        <Router>
          <Route path="/main" element={<Navigate replace to="/" />} />
          <Route path="/" element={<Main />} />
          <Route path="/page-one" element={<PageOne />} />
          <Route path="/page-one/:item" element={<Details />} />
          <Route path="/page-two" element={<PageTwo />} />
          <Route path="/page-three" element={<PageThree />} />
        </Router>
        {/* </Suspense> */}
      </main>
    </Container>
  );
};

export default App;
