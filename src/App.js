import React, { Component } from 'react';
import List from './components/core/list'
import './App.css';

class App extends Component {

  itemSource = [1,2,3,4]

  renderRow = (item, index) => {
    return <h4 key={index}>{item}</h4>
  }

  render() {
    return (
      <div>
        hi long
        <List itemSource={this.itemSource} renderRow={this.renderRow} />
      </div>
    );
  }
}

export default App;
