import React, { Component, PropTypes } from 'react';
import moment from 'moment';

export default class Day extends Component {
  handleOnClick (e) {
    if (this.props.disabled) return;

    this.props.selectDay(e);
  }

  render () {
    const { day, disabled, dayNextMonth, dayPrevMonth, active } = this.props;

    let classes = ['day'];

    if (day.isSame(active, 'day')) {
      classes.push('activeDate');
    }

    if (disabled) {
      classes.push('dayDisabled');
    }

    if (dayPrevMonth || dayNextMonth) {
      classes.push('dayFromOtherMonth');
    }

    return (
      <td className={classes.join(' ')} onClick={this.handleOnClick.bind(this)}>{ day.date() }</td>
    );
  }
}

Day.propTypes = {
  disabled: React.PropTypes.bool,
  dayNextMonth: React.PropTypes.bool,
  dayPrevMonth: React.PropTypes.bool
};
