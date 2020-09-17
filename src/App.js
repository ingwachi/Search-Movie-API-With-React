/* eslint-disable jsx-a11y/alt-text */
import React, { Component } from "react";
import "./App.css";
import Axios from "axios";
import MovieItem from "./MovieItem";

class App extends Component {

  constructor(props) {
    super(props)

    this.state = { row: [] }
  }

  search = (keyyword) => {
    console.log(keyyword);
    var dataArray = [];
    var url = 'https://api.themoviedb.org/3/search/movie?api_key=c54596f832ec4470043a1836df39f075&query=' + keyyword;
    Axios.get(url).then(res => {
      console.log(JSON.stringify(res.data.results));
      res.data.results.forEach(item=>{
        item.poster_src = "http://image.tmdb.org/t/p/w185" + item.poster_path
        dataArray.push(item)
      });
      this.setState({row: dataArray});
    });
  };

  componentDidMount() {
    this.search('her');
  }

  render() {
    return (
      <div className="App">
        {/* JSX (JavaScript + XML)*/}
        <table className="navbar">
          <tbody>
            <tr>
              <td>
                <img src={require("./assets/logo.svg")} width="50"></img>
              </td>
              <td>React Brush Up</td>
            </tr>
          </tbody>
        </table>
        <input
          style={{ fontSize: 20, display: "block", marginTop: "3%", width: "30%", marginLeft: "35%", marginBottom: "4%"}}
          placeholder="Enter your movie keyword"
          onChange={(event) => {
            this.search(event.target.value);
          }}
        />
        { this.state.row.map(item => (
          <MovieItem movie={item}/>
        ))}
      </div>
    );
  }
}

export default App;
