import React from 'react';
import DatePicker from 'react-simple-datepicker';
import 'react-simple-datepicker/dist/index.css';
import './index.css';

export default class App extends React.Component {
  render() {
    return (
      <div>
        <h3>Default</h3>
        <DatePicker />

        <h3>Custom onClick</h3>
        <DatePicker clickOnDate={date => alert(date)} />

        <h3>Date Range</h3>
        <DatePicker date={new Date('03.15.16')} minDate={new Date('03.10.16')} maxDate={new Date('03.20.16')} />

        <h3>Custom classNames</h3>
        <DatePicker monthClassName='month' prevMonthClassName='prev' nextMonthClassName='next' />
      </div>
    );
  }
}
