import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ListItem from './ListItem';

export default class List extends Component {
  
  state = {
    selectedIndex: null
  }

  handleMouseEnter = (index) => {
    this.setState({selectedIndex: index});
  }

  handleMouseLeave = (index) => {
    this.setState({selectedIndex: null});
  }

  componentDidMount() {
    document.addEventListener('keydown', this.handleKeypress);
  }

  handleKeypress = (e) => {
    if(this.props.data && this.props.data.length !== 0) {
      if(e.keyCode === 40) {
        if(this.state.selectedIndex === null || this.state.selectedIndex === this.props.data.length-1) {
          this.setState({selectedIndex: 0});
          this.scrollToSelected(this.state.selectedIndex);
  
        }
        else {
          this.setState((prevState) => ({selectedIndex: (prevState.selectedIndex+1)}));
          this.scrollToSelected(this.state.selectedIndex);
        } 
      }
      else if(e.keyCode === 38) {
        if(this.state.selectedIndex === null || this.state.selectedIndex === 0) {
          this.setState({selectedIndex: this.props.data.length-1});
          this.scrollToSelected(this.state.selectedIndex);
        }
        else {
          this.setState((prevState) => ({selectedIndex: (prevState.selectedIndex-1)}));
          this.scrollToSelected(this.state.selectedIndex);
        } 
      }
    }
  }

  scrollToSelected = (index) => {
    if(document.getElementById(`card-item-index-${index}`) !== null)
      document.getElementById(`card-item-index-${index}`).scrollIntoView(false);
  }

  renderList = () => this.props.data.map((item, index) => {
    return (
      <ListItem
      {...item}
      index={index}
      selectedIndex={this.state.selectedIndex}
      onMouseEnterHandler={this.handleMouseEnter}
      onMouseLeaveHandler={this.handleMouseLeave}
      />
    )
  });

  render() {
    if(this.props.data.length > 0) {
      return (
        <div className="card-list-scroll" id="scrollableList">
          {this.renderList()}
        </div>
      );
    }
    else {
      return (
        <div className="card-no-result">
          <p>No User Found</p>
        </div>
      )
    }
  }
}

List.propTypes = {
  data: PropTypes.array.isRequired
}

