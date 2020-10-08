import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import CardView from 'src/components/Card';
import Card from 'src/models/Card';
import CardBackImage from 'src/assets/images/card-back.jpg';
import { AppState } from 'src/redux/reducer';
import { suffleCardsCreator, dealCardsCreator } from 'src/redux/card/actions';

const Preview: React.FC<{}> = (): JSX.Element => {
  const dispatch = useDispatch();
  const [hostCard, setHostCard] = useState<Card>();
  const [botCard, setBotCard] = useState<Card>();

  const { deckId, cards } = useSelector((state: AppState) => state.card);

  useEffect(() => {
    dispatch(suffleCardsCreator());
    // eslint-disable-next-line
  }, []);

  useEffect(() => {
    console.log('123123', deckId, cards);
    if (cards) {
      setHostCard(cards[0]);
      setBotCard(cards[1]);
    }
  }, [deckId, cards]);

  const handleDeal = () => {
    dispatch(dealCardsCreator(deckId));
  };

  return (
    <div className="">
      <CardView width={100} imageSource={hostCard?.image || CardBackImage} />
      <CardView width={100} imageSource={botCard?.image || CardBackImage} />
      <button onClick={handleDeal}>Deal</button>
    </div>
  );
};

export default Preview;
