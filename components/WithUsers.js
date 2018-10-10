import * as React from "react";
import PropTypes from 'prop-types';
import {Spinner} from 'native-base'


class WithUsers extends React.Component {
    static propTypes = {
        render: PropTypes.func.isRequired
    };

    state = {
        users: null,
    };

    async componentDidMount() {
        console.log('foo')
        const response = await fetch("https://randomuser.me/api/?results=50&seed=jsdays");
        const data = await response.json();
        this.setState({users: data.results})
    }

    render() {
        if(!this.state.users) {
            return <Spinner/>
        }
        return this.props.render(this.state.users);
    }
}

export default WithUsers;
