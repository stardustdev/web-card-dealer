import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import Player from 'src/containers/Player';
import Card from 'src/models/Card';
import { AppState } from 'src/redux/reducer';
import { suffleCardsCreator, dealCardsCreator } from 'src/redux/card/actions';
import UserAvatar from 'src/assets/images/avatar.jpg';
import BotAvatar from 'src/assets/images/bot.png';
import './styles.css';

const initialCard = {
  image: '',
  value: '',
  suit: '',
  code: '',
};

const Preview: React.FC<{}> = (): JSX.Element => {
  const dispatch = useDispatch();
  const [isDealed, setIsDealed] = useState<boolean>(true);
  const [hostCard, setHostCard] = useState<Card>(initialCard);
  const [botCard, setBotCard] = useState<Card>(initialCard);

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
        <Player
          user={{ name: 'You', avatar: UserAvatar }}
          avatarWidth={100}
          cardInfo={hostCard}
          cardWidth={200}
        />
        <Player
          user={{ name: 'You', avatar: BotAvatar }}
          avatarWidth={100}
          cardInfo={botCard}
          cardWidth={200}
        />
      </div>
      <div className="buttons">
        <button className="deal-button" onClick={handleDeal}>
          {isDealed ? 'Shuffle' : 'Deal'}
        </button>
      </div>
    </div>
  );
};

export default Preview;
