import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import DatePicker from 'react-simple-datepicker';
import 'react-simple-datepicker/dist/index.css';

class DatePickerDemo extends Component {
    constructor () {
      super();

      this.state = {
        date: new Date()
      };
    }

    render () {
      return <DatePicker date={this.state.date} />;
    }
}

ReactDOM.render(<DatePickerDemo />, document.getElementById('example'));

module.exports = DatePickerDemo;
