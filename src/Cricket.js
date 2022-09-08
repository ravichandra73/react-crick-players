import React from 'react'
import Players from './Players.js';
import "./Cricket.css"

const Cricket = () => {
  return (
    <div className='cricket-container'>
        <Players playername="yuvaraj" score={2131} wickets={32} jerseyno={2}></Players>
        <Players playername="dhoni" score={2131} wickets={55} jerseyno={21}></Players>
        <Players playername="ashwin" score={2131} wickets={32} jerseyno={32}></Players>
        <Players playername="ravi" score={2131} wickets={5} jerseyno={23}></Players>
        <Players playername="chandra" score={2131} wickets={9255} jerseyno={26}></Players>
        <Players playername="harbhajan" score={2131}wickets={8255} jerseyno={20}></Players>
        <Players playername="axar" score={2131} wickets={7255} jerseyno={122}></Players>
        <Players playername="panther" score={2131} wickets={6255}  jerseyno={672}></Players>
        <Players playername="natasha" score={2131}wickets={5255} jerseyno={7872}></Players>
        <Players playername="akajal" score={2131}wickets={255} jerseyno={242}></Players>

    </div>
  )
}

export default Cricket