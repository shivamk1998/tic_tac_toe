import React from 'react'
import './ScoreBoard.css'

function ScoreBoard({xScore, oScore, tieScore}) {
  return (
    <div className='scoreboard'>
      <span className="x-score">X-{xScore}</span>
      <span className="o-score">O-{oScore}</span>
      <span className="tie-score">tie-{tieScore}</span>

    </div>
  )
}

export default ScoreBoard