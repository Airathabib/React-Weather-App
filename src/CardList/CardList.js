import React from 'react';
import { Card } from '../Card/Card';
import { withGlobalState } from '../hocs/withGlobalState';

import './CardList.css';

class CardListNoState extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      orderBy: 'ask',
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

    const chekIdentCityes = citiesList.filter((item, idx) => {
      return citiesList.indexOf(item) === idx;
    });

    const sortedCitiesList = chekIdentCityes.sort();
    if (orderBy === 'desc') {
      sortedCitiesList.reverse();
    }

    return (
      <>
        <div className="select-descr">Сортировать карточки города</div>
        <select
          className="select"
          value={orderBy}
          onChange={this.handleOnChange}>
          <option value="asc">По алфавиту «А-Я»</option>
          <option value="desc">Обратный порядок «Я-А»</option>
        </select>
        <div className="text-descr">
          Нажмите на карточку города, чтобы узнать прогноз на пять дней
        </div>
        <div className="card--list">
          {sortedCitiesList.map((city) => (
            <Card key={city} city={city} />
          ))}
        </div>
      </>
    );
  }
}

export const CardList = withGlobalState(CardListNoState);
