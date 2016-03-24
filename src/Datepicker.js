import React, { Component, PropTypes } from 'react';
import ReactDOM from 'react-dom';
import moment from 'moment';
import DateInput from './DateInput';
import Calendar from './Calendar';

export default class DatePicker extends Component {
  constructor (props) {
    super(props);

    this.state = {
      date: moment(props.date),
      isCalendarOpen: false
    };
  }

  componentWillMount () {
    document.addEventListener('mousedown', this.onClickOutside.bind(this));
    document.addEventListener('touchstart', this.onClickOutside.bind(this));
  }

  componentWillUnmount () {
    document.removeEventListener('mousedown', this.onClickOutside.bind(this));
    document.removeEventListener('touchstart', this.onClickOutside.bind(this));
  }

  onClickOutside (e) {
    const calendar = ReactDOM.findDOMNode(this.refs.calendar);
    const dateInput = ReactDOM.findDOMNode(this.refs.dateInput);

    if (!calendar) return;

    if (!calendar.contains(e.target) && !dateInput.contains(e.target)) {
      this.setState({
        isCalendarOpen: false
      });
    }
  }

  toggleCalendar () {
    this.setState({
      isCalendarOpen: !this.state.isCalendarOpen
    });
  }

  renderCalendar () {
    const {
      minDate,
      maxDate,
      calendarClassName,
      dayClassName,
      dayActiveClassName,
      dayDisabledClassName,
      dayFromOtherMonthClassName,
      monthClassName,
      prevMonthClassName,
      nextMonthClassName
    } = this.props;

    if (!this.state.isCalendarOpen) {
      return null;
    }

    return <Calendar ref='calendar'
                     date={this.state.date}
                     minDate={minDate}
                     maxDate={maxDate}
                     selectDay={this.selectDay.bind(this)}
                     calendarClassName={calendarClassName}
                     dayClassName={dayClassName}
                     dayActiveClassName={dayActiveClassName}
                     dayDisabledClassName={dayDisabledClassName}
                     dayFromOtherMonthClassName={dayFromOtherMonthClassName}
                     monthClassName={monthClassName}
                     prevMonthClassName={prevMonthClassName}
                     nextMonthClassName={nextMonthClassName} />;
  }

  selectDay (date) {
    const { clickOnDate, name } = this.props;
    if (clickOnDate) {
      this.setState({
        isCalendarOpen: false
      });
      return clickOnDate(date, name);
    }

    this.setState({
      isCalendarOpen: false,
      date: date
    });
  }

  render () {
    const { datepickerClassName, inputClassName } = this.props;

    return (
      <div className={datepickerClassName}>
        <DateInput ref='dateInput'
                   inputValue={this.state.date}
                   inputOnClick={this.toggleCalendar.bind(this)}
                   inputClassName={inputClassName} />

        {this.renderCalendar()}
      </div>
    );
  }
}

DatePicker.propTypes = {
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
  clickOnDate: PropTypes.func,
  name: PropTypes.string,
  datepickerClassName: PropTypes.string,
  inputClassName: PropTypes.string,
  calendarClassName: PropTypes.string,
  monthClassName: PropTypes.string,
  prevMonthClassName: PropTypes.string,
  nextMonthClassName: PropTypes.string,
  dayClassName: PropTypes.string,
  dayActiveClassName: PropTypes.string,
  dayDisabledClassName: PropTypes.string,
  dayFromOtherMonthClassName: PropTypes.string,
};

DatePicker.defaultProps = {
  date: new Date(),
  datepickerClassName: 'datepicker'
};
