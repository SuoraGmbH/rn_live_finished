import * as React from "react";
import PropTypes from 'prop-types';
import WithUsers from "./WithUsers";
import {Text} from "native-base";


class WithUser extends React.Component {
    static propTypes = {
        uuid: PropTypes.string.isRequired,
        render: PropTypes.func.isRequired
    };

    render() {
        return <WithUsers render={(users) => {
            const user = users.find(u => u.login.uuid === this.props.uuid);
            if (!user) {
                return <Text>User not found :(</Text>
            }
            return this.props.render(user);
        }}/>
    }
}

export default WithUser;
