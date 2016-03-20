import React, { Component } from 'react';
import Day from './Day';
import {
  daysOfMonth,
  weekEnum,
  isDateFromNextMonth,
  isDateFromPrevMonth
} from './utils/';

export default class Calendar extends Component {
  constructor (props) {
    super(props);

    this.state = {
      displayedMonth: props.date.clone().startOf('month')
    };
  }

  renderWeeks () {
    const _daysOfMonth = daysOfMonth(this.state.displayedMonth);
    const _weekEnum = weekEnum(_daysOfMonth);

    return _weekEnum.map((week, key) => {
      return (
        <tr key={key}>
          {this.renderDay(_daysOfMonth, week)}
        </tr>
      );
    });
  }

  renderDay (daysOfMonth, week) {
    const days = [0, 1, 2, 3, 4, 5, 6];
    const { minDate, maxDate } = this.props;

    return days.map((day, key) => {
      let date = daysOfMonth[week * 7 + day];
      let disabled;

      if (minDate && maxDate) {
        disabled = date.isBefore(minDate, 'day') || date.isAfter(maxDate, 'day');
      } else if (minDate) {
        disabled = date.isBefore(minDate, 'day');
      } else if (maxDate) {
        disabled = date.isAfter(maxDate, 'day');
      }

      const dayNextMonth = isDateFromNextMonth(date, this.state.displayedMonth);
      const dayPrevMonth = isDateFromPrevMonth(date, this.state.displayedMonth);

      return (
        <Day key={key}
             day={date}
             selectDay={this.selectDay.bind(this, date)}
             disabled={disabled}
             dayPrevMonth={dayPrevMonth}
             dayNextMonth={dayNextMonth}
             active={this.props.date} />
      );
    });
  }

  moveDisplayedMonth (delta) {
    const dm = this.state.displayedMonth;
    this.setState({
      displayedMonth: dm.clone().add(delta, 'months')
    });
  }

  selectDay (date) {
    this.props.selectDay(date);
  }

  render () {
    return (
      <table className='calendar'>
        <thead>
          <tr className='displayedMonth'>
            <td className='nav prev'
                onClick={this.moveDisplayedMonth.bind(this, -1)}>
            </td>
            <td className='monthName' colSpan='5'>
              {this.state.displayedMonth.format('MMMM YYYY')}
            </td>
            <td className='nav next'
                onClick={this.moveDisplayedMonth.bind(this, 1)}>
            </td>
          </tr>
        </thead>
        <tbody>
          {this.renderWeeks()}
        </tbody>
      </table>
    );
  }
}
