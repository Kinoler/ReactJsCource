import './Counter.css';

const React = require('react');

class Counter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
        count: props.startValue,
    };
  }

  render() {
    return React.createElement(
        'div',
        { className: 'div-counter' },
        React.createElement('p', null, `Counter: `),
        React.createElement('button', { onClick: this.decCount.bind(this) }, '-'),
        React.createElement('p', null, `${this.state.count}`),
        React.createElement('button', { onClick: this.incCount.bind(this) }, '+')
    );
  }

  incCount() {
    this.setState((prevState) => ({
      count: prevState.count + 1,
    }));
  }

  decCount() {
    this.setState((prevState) => ({
      count: prevState.count - 1,
    }));
  }
}

export default Counter;