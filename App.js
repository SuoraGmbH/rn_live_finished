import * as React from "react";
import UserListRoutes from "./scenes/UserListScene";
import HomeScene from "./scenes/HomeScene";
import {NativeRouter, Route, Switch} from "react-router-native";
import UserMapScene from "./scenes/UserMapScene";
import Expo from "expo";
import {AppLoading} from "expo";

class App extends React.Component {
    state = {
        isReady: false,
    }
    async componentWillMount() {
        await Expo.Font.loadAsync({
            'Roboto': require('native-base/Fonts/Roboto.ttf'),
            'Roboto_medium': require('native-base/Fonts/Roboto_medium.ttf'),
        });
        this.setState({isReady: true});
    }

    render() {
        if (!this.state.isReady) {
            return (
                <AppLoading/>
            )

        }
        return (
            <NativeRouter>
                <Switch>
                    <Route exact path="/" component={HomeScene}/>
                    <Route path="/users" component={UserListRoutes}/>
                    <Route path="/usersMap" component={UserMapScene}/>
                </Switch>
            </NativeRouter>
        );
    }
}

export default App