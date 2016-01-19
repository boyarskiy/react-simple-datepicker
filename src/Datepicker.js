import React from 'react';
import ReactDOM from 'react-dom';
import DateInput from './DateInput';
import Calendar from './Calendar';

export default class DatePicker extends React.Component {
  constructor (props) {
    super(props);

    this.state = {
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
    if (!this.state.isCalendarOpen) {
      return null;
    }

    return <Calendar ref='calendar'
                     date={this.props.date}
                     startDate={this.props.startDate}
                     endDate={this.props.endDate}
                     selectDay={this.selectDay.bind(this)} />;
  }

  selectDay (date) {
    this.props.changeDate(date, this.props.name);
    this.setState({
      isCalendarOpen: false
    });
  }

  render () {
    return (
      <div className='datepicker'>
        <DateInput ref='dateInput'
                   inputValue={this.props.date}
                   inputOnClick={this.toggleCalendar.bind(this)} />

        {this.renderCalendar()}
      </div>
    );
  }

}
