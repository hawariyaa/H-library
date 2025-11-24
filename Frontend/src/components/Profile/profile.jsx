import React from 'react'
import './profile.css'
import profile from '../../assets/profile/defaultprofile.gif'
import NavBar from '../navbar/NavBar'

function ProfilePage() {
  return (
    <div className='profile-page'>
      <NavBar />
       <div className="profile-edit">
         <div className="edit-profile">
            <img src={profile} alt="profile image" />
            <button>Edit profile</button>
         </div>
          <div className="edit-profile">
              <p>Username</p>
              <button>Change username</button>
          </div>     
       </div>
       <div className="Analtics">
        <div className="analtics">
          <p>Books Sold</p>
          <p>2</p>
        </div>
        <div className="analtics">
          <p>Books Bought</p>
          <p>5</p>
        </div>
        <div className="analtics">
          <p>Books in Cart</p>
          <p>4</p>
        </div>
       </div>
    </div>
  )
}

export default ProfilePage