import React, { useState } from 'react'
import { connect } from 'react-redux'

const mockData = [{username: 'Jack'},{username: 'seb'},{username: 'dianne'},{username: 'louis'},{username: 'marni'}]

const DisplayUsers = (props) => {
    const [usersInMeeting, setUsersInMeeting] = useState([])
    
    const handleClick = (e, username) => {
        const styleClass = "userList-button-in-meeting"
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
    console.log('USERSINMEETING', usersInMeeting);
    console.log('props.users', props.users.users);
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
const mapStateToProps = (globalState) => {
    return {
        users: globalState.users
    }
}

export default connect(mapStateToProps)(DisplayUsers)
