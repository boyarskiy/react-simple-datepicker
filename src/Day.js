import React from 'react';

export default class Day extends React.Component {
  render () {
    const { day, disabled, dayNextMonth, dayPrevMonth, inRange } = this.props;

    let classes = ['day'];

    if (disabled) {
      classes.push('dayDisabled');
    }

    if (dayPrevMonth || dayNextMonth) {
      classes.push('dayFromOtherMonth');
    }

    if (inRange) {
      classes.push('dayInRange');
    }

    return (
      <td className={classes.join(' ')}>{ day }</td>
    );
  }
}
