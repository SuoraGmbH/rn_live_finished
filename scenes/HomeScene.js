import * as React from "react";
import {Button, Text} from "native-base";
import MainLayout from "../components/MainLayout";
import {Link} from "react-router-native";

class HomeScene extends React.Component {
    render() {
        return (
            <MainLayout title="Home">
                <Link
                    to='/users'
                    component={Button}
                    primary
                    full>
                    <Text>User List</Text>
                </Link>

                <Link
                    to='/usersMap'
                    component={Button}
                    info
                    full>
                    <Text>User Map</Text>
                </Link>

            </MainLayout>
        );
    }
}

export default HomeScene