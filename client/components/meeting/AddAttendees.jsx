import React, { useState, useEffect } from 'react'
import { connect } from 'react-redux'
import { selectedUsers } from '../../actions/users'

const AddAttendees = (props) => {

    useEffect(() => {
        props.dispatch(selectedUsers(props.usersInMeeting))
    }, [props.usersInMeeting])

    useEffect(() => {
        props.setUsersInMeeting([props.user])
    }, [])

    const handleClick = (e, user) => {

        let arr = [...props.usersInMeeting]
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
            <div className="columns">
                {props.users.map((user, i) => {

                    const isSelected = props.currentUsers.map(e => e.username).includes(user.username)

                    return (
                        <div
                            key={i}
                            className={isSelected ? "user user--selected" : "user"}
                            type='button'
                            onClick={(e) => handleClick(e, user)}
                        >
                            <h3 className={isSelected 
                                ? "user__first-last user__first-last--selected" 
                                : "user__first-last"}>
                                {user.first_name}  {user.last_name}
                            </h3>
                            <p className={isSelected 
                                ? "user__username user__username--selected" 
                                : "user__username"}>
                                @{user.username}
                            </p>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

const mapStateToProps = (globalState) => {
    return {
        users: globalState.users,
        user: globalState.auth.user,
        currentUsers: globalState.currentUsers
    }
}

export default connect(mapStateToProps)(AddAttendees)
