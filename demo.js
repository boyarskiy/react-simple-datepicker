import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import DatePicker from 'react-simple-datepicker';
import 'react-simple-datepicker/dist/index.css';

const DatePickerDemo = () => {
  return (
    <ul className='demos'>
      <li>
        <h3>Default</h3>
        <DatePicker />
      </li>

      <li>
        <h3>Custom onClick</h3>
        <DatePicker clickOnDate={date => alert(date)} />
      </li>

      <li>
        <h3>Date Range</h3>
        <DatePicker date={new Date('03.15.16')} minDate={new Date('03.10.16')} maxDate={new Date('03.20.16')} />
      </li>

      <li>
        <h3>Custom classNames</h3>
        <DatePicker monthClassName='month' prevMonthClassName='prev' nextMonthClassName='next' />
      </li>
    </ul>
  );
}

ReactDOM.render(<DatePickerDemo />, document.getElementById('example'));

module.exports = DatePickerDemo;
