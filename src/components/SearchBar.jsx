import React, { Component } from "react";

class SearchBar extends Component {
  state = {
    term: "",
  };

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.onSubmit(this.state.term);
    this.setState({ term: "" });
  };

  render() {
    return (
      <div className="ui segment">
        <form className="ui form" onSubmit={this.handleSubmit}>
          <div className="field">
            <label htmlFor="">Image Search</label>
            <input
              type="text"
              value={this.state.term}
              onChange={(e) => {
                this.setState({ term: e.target.value });
              }}
            />
          </div>
        </form>
      </div>
    );
  }
}
export default SearchBar;
