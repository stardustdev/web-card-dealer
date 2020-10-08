import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import CardView from 'src/components/Card';
import Card from 'src/models/Card';
import CardBackImage from 'src/assets/images/card-back.jpg';
import { AppState } from 'src/redux/reducer';
import { suffleCardsCreator, dealCardsCreator } from 'src/redux/card/actions';
import './styles.css';

const Preview: React.FC<{}> = (): JSX.Element => {
  const dispatch = useDispatch();
  const [isDealed, setIsDealed] = useState<boolean>(true);
  const [hostCard, setHostCard] = useState<Card>();
  const [botCard, setBotCard] = useState<Card>();

  const { deckId, cards } = useSelector((state: AppState) => state.card);

  useEffect(() => {
    setHostCard(cards[0]);
    setBotCard(cards[1]);
  }, [cards]);

  const handleDeal = () => {
    if (isDealed) {
      dispatch(suffleCardsCreator());
    } else {
      dispatch(dealCardsCreator(deckId));
    }
    setIsDealed(!isDealed);
  };

  return (
    <div className="preview">
      <div className="card-group">
        <CardView width={200} imageSource={hostCard?.image || CardBackImage} />
        <CardView width={200} imageSource={botCard?.image || CardBackImage} />
      </div>
      <button className="deal-button" onClick={handleDeal}>
        {isDealed ? 'Shuffle' : 'Deal'}
      </button>
    </div>
  );
};

export default Preview;
