import { useState } from "react";
import "./styles.css";

var dictionary1 = {
  horror: "1.His House",
  action: "1.fast and furious",
  romance: "1.titanic"
};
var dictionary2 = {
  horror: "2.conjuring  ",
  action: "2.spiderman",
  romance: "2.beauty and the beast"
};
var dictionary3 = {
  horror: "3. Alive ",
  action: "3.batman",
  romance: "3.cinderelia"
};

export default function App() {
  var [movieout1, moviein1] = useState("");
  var [movieout2, moviein2] = useState("");
  var [movieout3, moviein3] = useState("");

  function clickhandlerone() {
    var movieType = "horror";
    var movieRecommad = movieType;
    var movieReccomand1 = dictionary1[movieRecommad];
    var movieReccomand2 = dictionary2[movieRecommad];
    var movieReccomand3 = dictionary3[movieRecommad];
    moviein1(movieReccomand1);
    moviein2(movieReccomand2);
    moviein3(movieReccomand3);
  }
  function clickhandlertwo() {
    var movieType = "action";
    var movieRecommad = movieType;
    var movieReccomand1 = dictionary1[movieRecommad];
    var movieReccomand2 = dictionary2[movieRecommad];
    var movieReccomand3 = dictionary3[movieRecommad];
    moviein1(movieReccomand1);
    moviein2(movieReccomand2);
    moviein3(movieReccomand3);
  }
  function clickhandlerthree() {
    var movieType = "romance";
    var movieRecommad = movieType;
    var movieReccomand1 = dictionary1[movieRecommad];
    var movieReccomand2 = dictionary2[movieRecommad];
    var movieReccomand3 = dictionary3[movieRecommad];
    moviein1(movieReccomand1);
    moviein2(movieReccomand2);
    moviein3(movieReccomand3);
  }
  return (
    <div className="App">
      <h1 style={{ textAlign: "centre" }}>Hollywood movie recomendation app</h1>

      <button
        className="btn"
        onClick={clickhandlerone}
        style={{ margin: "2rem", color: "red" }}
      >
        horror
      </button>
      <button
        className="btn"
        onClick={clickhandlertwo}
        style={{ margin: "2rem", color: "red" }}
      >
        action
      </button>
      <button
        className="btn"
        onClick={clickhandlerthree}
        style={{ margin: "2rem", color: "red" }}
      >
        romance
      </button>

      <h1 className="btn" className="box">
        {movieout1}
      </h1>
      <h1 className="box">{movieout2}</h1>
      <h1 className="box">{movieout3}</h1>
    </div>
  );
}
