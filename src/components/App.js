import React from 'react'
import Pagination from './Pagination'

class App extends React.Component {
  constructor() {
    super();

    // an example of array of 150 items to be paged
    var exampleItems = [...Array(150).keys()].map(i => ({ id: (i+1), name: 'Item ' + (i+1) }));

    this.state = {
      exampleItems: exampleItems,
      pageOfItems: []
    };

    // bind function in constructor instead of render
    this.onChangePage = this.onChangePage.bind(this);
  }

  onChangePage(pageOfItems) {
    // update state with new page of items
    this.setState({ pageOfItems: pageOfItems });
  }

  render() {
    return (
      <div>
        <div className='container'>
          <div className='text-center'>
            <h1>React - Pagination</h1>
            {this.state.pageOfItems.map(item =>
              <div key={item.id}>{item.name}</div>
            )}
            <Pagination items={this.state.exampleItems} onChangePage={this.onChangePage} />
          </div>
        </div>
        <hr />
        <div className='credits text-center'>
          <p>
            <a href='#'>XXX</a>
          </p>
        </div>
      </div>
    );
  }
}

export default App;