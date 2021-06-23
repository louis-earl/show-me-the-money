import React, { useState, useEffect } from 'react'
import { connect } from 'react-redux'
import { selectedUsers } from '../actions/users'

const DisplayUsers = (props) => {

    useEffect(() => {
        props.dispatch(selectedUsers(props.usersInMeeting))
    }, [props.usersInMeeting])

    useEffect(() => {
        props.setUsersInMeeting([props.user])
    }, [])

    const handleClick = (e, user) => {
        const styleClass = "button--user-selected"
        let arr = [...props.usersInMeeting]
        if (e.target.className == styleClass) { e.target.className = "button--user" }
        else { e.target.className = styleClass }

        const foundUser = arr.find(el => el.username === user.username) !== undefined
        if (foundUser) {
            const index = arr.indexOf(user.username)
            arr.splice(index, 1)

            props.setUsersInMeeting(arr)
        } else {
            props.setUsersInMeeting([...props.usersInMeeting, user])
        }
    }


    return (
        <div className="users">
            <p>Who would you like to invite to your meeting? Click to add attendees.</p>

            <div className="columns">
                <div>
                    {props.users.map((user, i) => {
                        return (
                            <button
                                key={i}
                                className={user.username === props.user.username ? "button--user-selected" : "button--user"}
                                type='button'
                                onClick={(e) => handleClick(e, user)}
                            >
                                {user.username}
                            </button>
                        )

                    })}
                </div>
            </div>

        </div>
    )
}

// will need map state to props
const mapStateToProps = (globalState) => {
    return {
        users: globalState.users,
        user: globalState.auth.user
    }
}


export default connect(mapStateToProps)(DisplayUsers)
