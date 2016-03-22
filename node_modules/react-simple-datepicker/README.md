# React Simple Date Picker

> Simple Date Picker component for React


## Install

`npm install -save react-simple-datepicker`


## Usage

Simple example on how to use Datepicker.

```js
import React from 'react';
import ReactDOM from 'react-dom';
import DatePicker from 'react-simple-datepicker';
import 'react-simple-datepicker/dist/index.css';

class App extends React.Component {
  constructor () {
    super();

    this.state = {
      date: new Date()
    }
  }

  render () {
    return <DatePicker date={this.state.date} />;
  }
}
```


## Props

* `date`: (*Date*) — specifies the start date
* `minDate`: (*Date*) — specifies the minimal date
* `maxDate`: (*Date*) — specifies the maximal date
* `changeDate`: (*Function*) — called when the user selects a date


## License

MIT
