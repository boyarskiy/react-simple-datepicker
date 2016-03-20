
export function daysOfMonth (displayedMonth) {
  let _i, d;
  let results = [];
  let startAt = -displayedMonth.weekday() % 7;
  let endAt = Math.ceil((displayedMonth.daysInMonth() - startAt) / 7) * 7 + startAt - 1;

  for (d = _i = startAt; startAt <= endAt ? _i <= endAt : _i >= endAt; d = startAt <= endAt ? ++_i : --_i) {
    results.push(displayedMonth.clone().add(d, 'days'));
  }

  return results;
}

export function weekEnum (daysOfMonth) {
  let results = [];

  for (let _i = 0, _ref = daysOfMonth.length / 7; 0 <= _ref ? _i < _ref : _i > _ref; 0 <= _ref ? _i++ : _i--) {
    results.push(_i);
  }
  return results;
}

export function isDateFromNextMonth (date, displayedMonth) {
  return date.year() > displayedMonth.year() || date.year() ===
         displayedMonth.year() && date.month() > displayedMonth.month();
}

export function isDateFromPrevMonth (date, displayedMonth) {
  return date.year() < displayedMonth.year() || date.year() ===
         displayedMonth.year() && date.month() < displayedMonth.month();
}
