import "./App.css";
import "./App1";

function App1(props) {
  const clickHandler = () => {
    console.log("this props from react  app");
  };
  return (
    <div style={{ textAlign: "center" }}>
      <h1 style={{ color: "white", backgroundColor: "purple" }}>
        Demo Application
      </h1>
      <div
        style={{
          alignContent: "center",
          justifyContent: "center",
          display: "flex",
          backgroundColor: "darkcyan",
          // float: "unset",
          padding: "30px",
        }}
      >
        <first-component
          componentTitle="My component in react"
          clickHandler={clickHandler}
        ></first-component>
      </div>
    </div>
  );
}

export default App1;
