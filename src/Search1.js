import React, { Component } from "react";
import List from "./List";
export default class Search1 extends Component {
  constructor(props) {
    super(props);

    this.state = {
      initialItems: [
        {
          userId: 1,
          id: 1,
          title: "delectus aut autem",
          completed: false
        },
        {
          userId: 1,
          id: 2,
          title: "quis ut nam facilis et officia qui",
          completed: false
        },
        {
          userId: 1,
          id: 3,
          title: "fugiat veniam minus",
          completed: false
        },
        {
          userId: 1,
          id: 4,
          title: "et porro tempora",
          completed: true
        }
      ],
      items: []
    };
    this.filterList = this.filterList.bind(this);
  }
  filterList(event) {
    var updatedList = this.state.initialItems;
    updatedList = updatedList.filter(function(item) {
      return (
        item.title.toLowerCase().search(event.target.value.toLowerCase()) !== -1
      );
    });
    this.setState({ items: updatedList });
  }
  componentWillMount() {
    this.setState({ items: this.state.initialItems });
  }

  render() {
    return (
      <div className="filter-list">
        <input type="text" placeholder="Search" onChange={this.filterList} />
        <List items={this.state.items} />
      </div>
    );
  }
}
