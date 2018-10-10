import * as React from "react";
import {Route, Switch} from 'react-router-native'
import UserListScene from "./UserListScene";
import {Text} from "native-base";
import WithUser from "../../components/WithUser";
import UserDetailComponent from "./components/UserDetailComponent";

class UserListRoutes extends React.Component {
    render() {
        return (
            <Switch>
                <Route path="/users/:userId" render={({match}) => {
                    return <WithUser uuid={match.params.userId} render={user => {
                        return <UserDetailComponent user={user}/>
                    }
                    }/>
                }} />
                <Route path="/users" component={UserListScene}/>
            </Switch>
        );
    }
}

export default UserListRoutes;
