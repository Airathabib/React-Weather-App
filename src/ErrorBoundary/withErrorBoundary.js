import React from 'react';

export class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { error: null };
  }
  componentDidCatch(error, errorInfo) {
    this.setState({ error: errorInfo });
    console.log(error);
  }
  render() {
    if (this.state.error) {
      return <div>Что-то сломалось, извините!</div>;
    }
    return this.props.children;
  }
}
