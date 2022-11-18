import React from 'react'

const Search = () => {
  return (
    <div className='search'>
      <div className="searchForm">
        <input type="text" placeholder='Find a user'/>
      </div>
      <div className="userChat">
        <img src="https://cdn.discordapp.com/attachments/794666735126052866/1013541702260244510/GOPR0595.JPG" alt="" />
        <div className="userChatInfo">
          <span>Alanis</span>
        </div>
      </div>
    </div>
  )
}

export default Search