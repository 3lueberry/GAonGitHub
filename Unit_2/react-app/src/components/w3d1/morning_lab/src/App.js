import React from "react";

// export default App;

function Body() {
  return (
    <>
      <div className="body">BODY</div>
    </>
  );
}

function SideBar() {
  return (
    <>
      <div className="sidebar">SIDEBAR</div>
    </>
  );
}

function Container() {
  return (
    <>
      <div className="container">
        CONTAINER
        <SideBar />
        <Body />
      </div>
    </>
  );
}

function App() {
  const [dimensions, setDimensions] = React.useState({
    height: window.innerHeight,
    width: window.innerWidth,
  });

  React.useEffect(() => {
    function handleResize() {
      setDimensions({
        height: window.innerHeight,
        width: window.innerWidth,
      });
    }

    window.addEventListener("resize", handleResize);
  });

  return (
    <>
      <h1 className="centered">Commence Dashboard Creation!</h1>
      <div>
        Rendered at {dimensions.width} x {dimensions.height}
      </div>
      <Container />
    </>
  );
}

class ReactClass extends React.Component {
  render() {
    return (
      <div>
        <h2>React Class said 'Hi'</h2>
      </div>
    );
  }
}

export { App, ReactClass };
