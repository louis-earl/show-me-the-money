import React, { useState } from 'react'
import { connect } from 'react-redux'

const mockData = [{username: 'Jack'},{username: 'seb'},{username: 'dianne'},{username: 'louis'},{username: 'marni'}]

const DisplayUsers = (props) => {
    const [usersInMeeting, setUsersInMeeting] = useState([])

    const handleClick = (e, username) => {
        const styleClass = "userList-buttonin-meeting"
        let arr = usersInMeeting
        if(e.target.className == styleClass) { e.target.className = "userList-button" }
        else { e.target.className = styleClass }

        if(arr.find(el => el === username) !== undefined){
            const index = arr.indexOf(username)
            arr.splice(index, 1)
            setUsersInMeeting(arr)
        }
        else { setUsersInMeeting([...usersInMeeting, username]) }
        
    }
    console.log(usersInMeeting);
    return (
        <div>
            <h1> Users:</h1>
            <ul>
                {mockData.map((user, i) => {
                    return <li key={i}>
                        <button className="userList-button" type='button' onClick={(e) => handleClick(e, user.username)}>
                            {user.username}
                        </button>
                    </li>
                })}
            </ul>
        </div>
    )
}

// will need map state to props

export default connect()(DisplayUsers)
