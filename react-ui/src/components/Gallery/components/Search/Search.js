import React, { Component } from 'react';
import SearchWrapper from './styles/Search';

class Search extends Component {
  constructor() {
    super();

    this.state = {
      searchString: ''
    };
  }

  handleChange = e => {
    const { onSearchChange } = this.props;

    const { value } = e.target;

    this.setState({ searchString: value }, () => { onSearchChange(value); });
  };

  render() {
    const { searchString } = this.state;

    return (
      <SearchWrapper>
        <input 
          type="text" onChange={this.handleChange}
          placeholder="Search"
          value={searchString}
        />
      </SearchWrapper>
    );
  }
}

export default Search;