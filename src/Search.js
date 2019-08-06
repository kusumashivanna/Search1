import React, { Component } from "react";
import MovieList from "./MovieList.js";
import SearchInput from "./SearchInput.js";
import "./App.css";

/*
 * Main component.
 * Notes:
 * The main state is kept here and passed down to other components using props.
 */
class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      ui: {
        isLoading: true
      },
      data: {},
      dataFiltered: {}
    };

    this.filterData = this.filterData.bind(this);
  }
  filterData(value) {
    // filter movies by title
    let data = Object.assign({}, this.state.data);
    console.log(data);
    let dataFiltered = Object.values(data).filter(k1 =>
      k1.title.match(new RegExp(value, "i"))
    );
    this.setState({ dataFiltered });
  }
  componentDidMount() {
    // load data source
    fetch("http://jsonplaceholder.typicode.com/todos")
      .then(response => {
        if (response.status !== 200) {
          console.log(
            "Looks like there was a problem. Status Code: ",
            response.status
          );
          return;
        }
        response.json().then(data => {
          console.log(data);
          this.setState({
            ui: {
              isLoading: false
            },
            data,
            dataFiltered: data
          });
        });
      })
      .catch(error => {
        console.log("Error with fetch", error);
      });
  }
  render() {
    return (
      <div className="App">
        <div className="app__header">
          <SearchInput filterData={this.filterData} />
        </div>
        <div className="app__body">
          {this.state.dataFiltered &&
            this.state.dataFiltered.length > 1 &&
            this.state.dataFiltered.map((k1,index) => <div key={index}> {k1.title}</div>)}
        </div>
      </div>
    );
  }
}

export default App;
