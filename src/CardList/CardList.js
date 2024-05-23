import React from 'react';
import { Card } from '../Card/Card';
import { withGlobalState } from '../hoks/withGlobalState';

import './CardList.css';

class CardListNoState extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      orderBy: 'desc',
    };
    this.handleOnChange = this.handleOnChange.bind(this);
  }

  handleOnChange(event) {
    this.setState({
      orderBy: event.target.value,
    });
  }

  render() {
    const { orderBy } = this.state;
    const { citiesList } = this.props.state;
    const sortedCitiesList = citiesList.sort();
    if (orderBy === 'desc') {
      sortedCitiesList.reverse();
    }

    return (
      <>
        <select
          className="select"
          value={orderBy}
          onChange={this.handleOnChange}>
          <option value="asc">By name asc</option>
          <option value="desc">By name desc</option>
        </select>
        <div className="card--list">
          {sortedCitiesList.map((city) => (
            // @ts-ignore
            <Card key={city} city={city} />
          ))}
        </div>
      </>
    );
  }
}

export const CardList = withGlobalState(CardListNoState);
