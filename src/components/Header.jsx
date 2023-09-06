import React from 'react'
import '../Styles/Header.css'

const Header = ({ search, setSearch, setNumResult }) => {
  return (
    <div className='container'>
        <div className="icon"><b className='colorIcon'>F</b>itness <b className='colorIcon'>P</b>ro</div>
        <div className="search-box">
            <input type="text" placeholder='Enter your search querry' value={search} onChange={(e)=> setSearch(e.target.value)}/>
            <select className="numResult" onChange={(e)=> setNumResult(e.target.value)}>
              <option value="5">5</option>
              <option value="10">10</option>
              <option value="20">20</option>
              <option value="40">40</option>
              <option value="80">80</option>
              <option value="100">100</option>
            </select>
        </div>
        <div className="profile-icon">
            <img src="img_avatar.png" alt="Profile" />
        </div>
    </div>
  )
}

export default Header