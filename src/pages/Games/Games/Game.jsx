import React, { PureComponent } from 'react';
import HeaderGames from '../../../components/HeaderGames';
import Update from '../../../components/Update';
import Bonus from '../../../components/Bonus';
import GameTables from '../../../components/GameTables';
import GamesInfo from '../../../components/GamesInfo';
import "../css/games.scss"
import GamesFooter from '../../../components/GamesFooter';

export class Game extends PureComponent {
  render() {
    return (
      <div className='games'>
        <HeaderGames/>
        <Update/>
        <Bonus/>
        <GameTables/>
        <GamesInfo/>
        <GamesFooter/>
      </div>
    )
  }
}

export default Game
