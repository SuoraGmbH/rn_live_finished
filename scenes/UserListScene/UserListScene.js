import * as React from "react";
import UserList from "./components/UserList";
import WithUsers from "../../components/WithUsers";

class UserListScene extends React.Component {
    render() {
        return (
            <WithUsers render={users => <UserList users={users}/>}/>
        );
    }
}

export default UserListScene;
