import React, { Component, PropTypes } from 'react';
import moment from 'moment';

const Day = ({
  day,
  active,
  disabled,
  dayNextMonth,
  dayPrevMonth,
  selectDay,
  dayClassName,
  dayActiveClassName,
  dayDisabledClassName,
  dayFromOtherMonthClassName
}) => {

  const handleOnClick = (e) => {
    if (disabled) return;
    selectDay(e);
  };

  let classes = [dayClassName];

  if (day.isSame(active, 'day')) {
    classes.push(dayActiveClassName);
  }

  if (disabled) {
    classes.push(dayDisabledClassName);
  }

  if (dayPrevMonth || dayNextMonth) {
    classes.push(dayFromOtherMonthClassName);
  }

  return <td className={classes.join(' ')} onClick={handleOnClick}>{ day.date() }</td>;
};

Day.propTypes = {
  disabled: PropTypes.bool,
  dayNextMonth: PropTypes.bool,
  dayPrevMonth: PropTypes.bool,
  selectDay: PropTypes.func,
  day: PropTypes.instanceOf(moment),
  active: PropTypes.instanceOf(moment),  
  dayClassName: PropTypes.string,
  dayActiveClassName: PropTypes.string,
  dayDisabledClassName: PropTypes.string,
  dayFromOtherMonthClassName: PropTypes.string,
};

Day.defaultProps = {
  dayClassName: 'calendar__day',
  dayActiveClassName: 'calendar__activeDay',
  dayDisabledClassName: 'calendar__disabledDay',
  dayFromOtherMonthClassName: 'calendar__dayFromOtherMonth'
};

export default Day;
