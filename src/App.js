import logo from "./logo.svg";
import "./App.css";

function App() {
  const name = "Dev_brij";
  const Currentdate = new Date().toLocaleDateString();
  const Currenttime = new Date().toLocaleTimeString();

  let curDate = new Date();
  curDate = curDate.getHours();
  let Greetings = "";
  const cssStyle = {};

  if (curDate >= 6 && curDate <= 12) {
    Greetings = "Good Morning";
    cssStyle.color = "green";
  } else if (curDate >= 12 && curDate <= 17) {
    Greetings = "Good AfterNoon";
    cssStyle.color = "Orange";
  } else if (curDate >= 17 && curDate <= 21) {
    Greetings = "Good Evening";
    cssStyle.color = "blue";
  } else {
    Greetings = "Good Night";
    cssStyle.color = "black";
  }

  const img1 = "https://picsum.photos/200/300";
  const img2 = "https://picsum.photos/220/300";
  const img3 = "https://picsum.photos/230/300";
  const img4 = "https://picsum.photos/240/300";
  const img5 = "https://picsum.photos/250/300";

  return (
    <div className="App">
      <h1 className="heading">hello, this is {name} </h1>
      <div className="para">
        <p>Today's date is - {Currentdate} </p>
        <p>Current Time is - {Currenttime}</p>
      </div>

      <div className="flx">
        <h1 className="Greeting">
          hello Sir, <span style={cssStyle}>{Greetings}</span>
        </h1>
      </div>

      <div>
        <img className="mr-3" src={img1} />
        <img className="mr-3" src={img2} />
        <img className="mr-3" src={img3} />
        <img className="mr-3" src={img4} />
        <img src={img5} />
      </div>
    </div>
  );
}

export default App;
