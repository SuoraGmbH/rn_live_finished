import * as React from "react";
import PropTypes from 'prop-types';
import {Body, Card, CardItem, Left, Text, Thumbnail} from "native-base";
import {MapView} from 'expo'
import MainLayout from "../../../components/MainLayout";
import {View} from 'react-native'


class UserDetailComponent extends React.Component {
    static propTypes = {
        user: PropTypes.object.isRequired,
    };

    render() {
        const {user} = this.props;

        let coordinates = {
            latitude: parseFloat(user.location.coordinates.latitude),
            longitude: parseFloat(user.location.coordinates.longitude),
        };
        return (
            <MainLayout title={user.name.first}>
                <Card>
                    <CardItem>
                        <Left>
                            <Thumbnail source={{uri: user.picture.medium}}/>
                            <Body>
                            <Text>{user.name.first} {user.name.last}</Text>
                            <Text note>{user.login.username}</Text>
                            </Body>
                        </Left>
                    </CardItem>
                    <CardItem cardBody>
                        <View style={{flex: 1, minHeight: 150}}>
                            <MapView
                                style={{flex: 1}}
                                initialRegion={coordinates}
                            >
                                <MapView.Marker coordinate={coordinates}/>
                            </MapView>

                        </View>
                    </CardItem>
                    <CardItem footer>
                    </CardItem>
                </Card>
                {/*<Text>{user.login.uuid}</Text>*/}
            </MainLayout>
        );
    }
}

export default UserDetailComponent;
