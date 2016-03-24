import React, { Component, PropTypes } from 'react';
import Day from './Day';
import {
  daysOfMonth,
  weekEnum,
  isDateFromNextMonth,
  isDateFromPrevMonth
} from './utils/';
import moment from 'moment';

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
             active={this.props.date}
             dayClassName={this.props.dayClassName}
             dayActiveClassName={this.props.dayActiveClassName}
             dayDisabledClassName={this.props.dayDisabledClassName}
             dayFromOtherMonthClassName={this.props.dayFromOtherMonthClassName} />
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
    const { calendarClassName, monthClassName, prevMonthClassName, nextMonthClassName } = this.props;

    return (
      <table className={calendarClassName}>
        <thead>
          <tr>
            <td className={prevMonthClassName}
                onClick={this.moveDisplayedMonth.bind(this, -1)}>
            </td>
            <td className={monthClassName} colSpan='5'>
              {this.state.displayedMonth.format('MMMM YYYY')}
            </td>
            <td className={nextMonthClassName}
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

Calendar.propTypes = {
  date: PropTypes.oneOfType([
    PropTypes.instanceOf(moment),
    PropTypes.instanceOf(Date)
  ]),
  minDate: PropTypes.oneOfType([
    PropTypes.instanceOf(moment),
    PropTypes.instanceOf(Date)
  ]),
  maxDate: PropTypes.oneOfType([
    PropTypes.instanceOf(moment),
    PropTypes.instanceOf(Date)
  ]),
  calendarClassName: PropTypes.string,
  selectDay: PropTypes.func,
  monthClassName: PropTypes.string,
  prevMonthClassName: PropTypes.string,
  nextMonthClassName: PropTypes.string,
  dayClassName: PropTypes.string,
  dayActiveClassName: PropTypes.string,
  dayDisabledClassName: PropTypes.string,
  dayFromOtherMonthClassName: PropTypes.string,
};

Calendar.defaultProps = {
  calendarClassName: 'calendar',
  prevMonthClassName: 'calendar__prevMonth',
  nextMonthClassName: 'calendar__nextMonth',
  monthClassName: 'calendar__month'
};
