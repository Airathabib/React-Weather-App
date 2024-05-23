import React from 'react';

export class ErrorBoundary extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = { error: null };
  }
  componentDidCatch(erroe, errorInfo) {
    this.setState({ error: errorInfo });
  }
  render() {
    console.log('this.props.children', this.props.children);
    if (this.state.error) {
      return <div>Что-то сломалось, извините!</div>;
    }
    return this.props.children;
  }
}
