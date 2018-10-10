import * as React from "react";
import {Content, List, ListItem, Text} from "native-base";
import PropTypes from 'prop-types';
import {Link} from "react-router-native";
import MainLayout from "../../../components/MainLayout";

class UserList extends React.Component {
    static propTypes = {
        users: PropTypes.array,
    }

    render() {
        return (
            <MainLayout title="User">
                <List>
                    {this.props.users.map(user => (
                        <Link component={ListItem} key={user.email} to={`/users/${user.login.uuid}`}>
                            <Text>{user.name.first} {user.name.last}</Text>
                        </Link>
                    ))}
                </List>
            </MainLayout>

        );
    }
}

export default UserList