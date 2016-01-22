import React from 'react';
import Day from './Day';
import {
  daysOfMonth,
  weekEnum,
  isDateInRange,
  isDateFromNextMonth,
  isDateFromPrevMonth
} from './utils/';

export default class Calendar extends React.Component {
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
    const { startDate, endDate } = this.props;

    return days.map((day, key) => {
      let date = daysOfMonth[week * 7 + day];
      let disabled;

      if (startDate) {
        disabled = date.isAfter(startDate, 'day');
      }

      if (endDate) {
        disabled = date.isBefore(endDate, 'day');
      }

      const dayNextMonth = isDateFromNextMonth(date, this.state.displayedMonth);
      const dayPrevMonth = isDateFromPrevMonth(date, this.state.displayedMonth);
      const inRange = isDateInRange(this.props.date, date, startDate, endDate, disabled);

      return (
        <Day key={key}
             day={date.date()}
             selectDay={this.selectDay.bind(this, date)}
             disabled={disabled}
             dayPrevMonth={dayPrevMonth}
             dayNextMonth={dayNextMonth}
             inRange={inRange} />
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
            <td className='nav'
                onClick={this.moveDisplayedMonth.bind(this, -1)}>
                Nav
            </td>
            <td className='monthName' colSpan='5'>
              {this.state.displayedMonth.format('MMMM YYYY')}
            </td>
            <td className='nav'
                onClick={this.moveDisplayedMonth.bind(this, 1)}>
                Prev
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
