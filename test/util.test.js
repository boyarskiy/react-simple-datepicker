import expect from 'expect';
import moment from 'moment';
import {
  daysOfMonth,
  weekEnum,
  isDateFromNextMonth,
  isDateFromPrevMonth
} from '../util/';

describe('Calendar utils', function () {

  const mockDate = moment('2016-01-17');
  const mockDisplayedMonth = mockDate.clone().startOf('month');

  beforeEach(function (done) {
    expect.restoreSpies();
    done();
  });

  describe('#daysOfMonth', function () {
    it('should return array of days of month', function (done) {
      const _daysOfMonth = daysOfMonth(mockDisplayedMonth);

      expect(_daysOfMonth.length).toEqual(42);
      expect(_daysOfMonth).toExclude(moment('2015-12-26'));
      expect(_daysOfMonth).toExclude(moment('2016-02-07'));
      done();
    });
  });

  describe('#weekEnum', function () {
    it('should return numbers of weeks when passed array of days of month', function (done) {
      const _daysOfMonth = daysOfMonth(mockDisplayedMonth);
      const _weekEnum = weekEnum(_daysOfMonth);

      expect(_weekEnum.length).toEqual(6);
      expect(_weekEnum).toInclude(0);
      expect(_weekEnum).toInclude(5);
      done();
    });
  });

  describe('#isDateFromNextMonth', function () {
    it('should return true when the passed date from next month', function (done) {
      const _isDateFromNextMonth = isDateFromNextMonth(moment('2016-02-01'), mockDate);

      expect(_isDateFromNextMonth).toBe(true);
      done();
    });

    it('should return false when the passed date from current month', function (done) {
      const _isDateFromNextMonth = isDateFromNextMonth(moment('2016-01-02'), mockDate);

      expect(_isDateFromNextMonth).toBe(false);
      done();
    });
  });

  describe('#isDateFromPrevMonth', function () {
    it('should return true when the passed date from prev month', function (done) {
      const _isDateFromPrevMonth = isDateFromPrevMonth(moment('2015-12-31'), mockDate);

      expect(_isDateFromPrevMonth).toBe(true);
      done();
    });

    it('should return false when the passed date from current month', function (done) {
      const _isDateFromPrevMonth = isDateFromPrevMonth(moment('2016-01-02'), mockDate);

      expect(_isDateFromPrevMonth).toBe(false);
      done();
    });
  });
});
