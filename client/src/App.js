import React, { Component } from 'react';
import SearchForm from './SearchForm';
import WeatherListBox from './WeatherListBox';
import CommentsListBox from './CommentsListBox';
import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    //bind this to functions 
    this.onSubmitSearchForm = this.onSubmitSearchForm.bind(this);    
    //Declare local state
    this.state = {
      boxes: [],
    }

  } 

  onSubmitSearchForm(data) { 
    this.setState(prevState => ({
      boxes: prevState
        .boxes
        .concat(data)
    }), function(){
      console.log('just did stuff to state after onSubmit Search For,')
      console.log(this.state.boxes);
    });
  };

  render() {
    return (
      <div>
        <div className="page-header">
          <h2>Weather app</h2>
          <SearchForm onSubmitSearchForm={this.onSubmitSearchForm}/>
        </div>
        <WeatherListBox
          boxes={this.state.boxes}/>
      </div>
    );
  }
}

export default App;