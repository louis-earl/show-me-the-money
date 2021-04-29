import React, { useState, useEffect } from 'react'
import { connect } from 'react-redux'
import { selectedUsers } from '../actions/users'

const mockData = [{username: 'Jack'},{username: 'seb'},{username: 'dianne'},{username: 'louis'},{username: 'marni'}]

const DisplayUsers = (props) => {
    const [usersInMeeting, setUsersInMeeting] = useState([])

    useEffect (() => {
        console.log('dispatching');
        props.dispatch(selectedUsers(usersInMeeting))
    }, [usersInMeeting])

    const handleClick = (e, user) => {
        const styleClass = "userList-button-in-meeting"
        let arr = [...usersInMeeting]
        if(e.target.className == styleClass) { e.target.className = "userList-button" }
        else { e.target.className = styleClass }

        const foundUser = arr.find(el => el.username === user.username) !== undefined
        if(foundUser){ 
            const index = arr.indexOf(user.username)
            arr.splice(index, 1)
            setUsersInMeeting(arr)
            console.log("removed a user")
        } else { 
            setUsersInMeeting([...usersInMeeting, user]) 
            console.log('added a user')
        }
    }


    console.log(usersInMeeting)
    return (
        <div>
            <h1> Users:</h1>
            <ul>
                {props.users.map((user, i) => {
                    return <li key={i}>
                        <button className="userList-button" type='button' onClick={(e) => handleClick(e, user)}>
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
