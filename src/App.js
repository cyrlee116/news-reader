import React, { Component } from 'react';
import './App.css';


const list = [
  {
    title: 'React',
    url: 'https://facebook.github.io/react/',
    author: 'Jordan Walke',
    num_comments: 3,
    points: 4,
    objectID: 0,
  },
  {
    title: 'Redux',
    url: 'https://github.com/reactjs/redux',
    author: 'Dan Abramov, Andrew Clark',
    num_comments: 2,
    points: 5,
    objectID: 1,
  },
];

class App extends Component {
  constructor(props) {
      super(props);
      this.state = {
        list,
      };
      this.onDismiss = this.onDismiss.bind(this);
  }

  onDismiss(id) {
      function isNotId(item) {
          return item.objectID !== id;
      }
      const updatedList = this.state.list.filter(isNotId);
      this.setState({ list: updatedList });
  }

  render() {
    return (
      <div className="App">
        <Table list={this.state.list} onDismiss={this.onDismiss}/>
      </div>
    );
  }
}

const Table = (props) =>
    <table>
      {props.list.map(item =>
          <tr key={item.objectID}>
              <td>
                <a href={item.url}>{item.title}</a>
              </td>
              <td>{item.author}</td>
              <td>{item.num_comments}</td>
              <td>{item.points}</td>
              <td>
                <button
                  onClick={() => props.onDismiss(item.objectID)}
                  type="button"> Dismiss
                </button>
              </td>
            </tr>
      )}
    </table>

const Button = (props) =>
<button type="button" onClick={props.onClick}>
    {props.children}
</button>

export default App;
