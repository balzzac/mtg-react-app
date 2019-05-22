import React from 'react';
import PropTypes from 'prop-types';

import Card from './Card/Card';

import './Cards.css';

/**
 * Cards react component
 * @param {object} props - properties sent through Main component
 * @return {jsx}
 */
export default function Cards(props) {
  return (
    <div className="l-cards">
      {props.cards.map((card) => (
        <Card key={card.id} card={card} />
      ))}
    </div>
  );
}

Cards.propTypes = {
  card: PropTypes.object,
  cards: PropTypes.array,
};
