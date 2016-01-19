import React from 'react';
import Day from './Day';

export default class Calendar extends React.Component {

  render () {
    return (
      <table className='calendar'>
        <thead>
          <tr className='displayedMonth'>
            <td className='nav'>
                Prev
            </td>
            <td className='monthName' colSpan='5'>
              Month
            </td>
            <td className='nav'>
                Next
            </td>
          </tr>
        </thead>
        <tbody>
          Weeks
        </tbody>
      </table>
    );
  }
}
