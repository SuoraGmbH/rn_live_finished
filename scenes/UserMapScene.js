import * as React from "react";
import MainLayout from "../components/MainLayout";
import {View} from "native-base";
import WithUsers from "../components/WithUsers";
import {MapView} from "expo";

class UserMapScene extends React.Component {
    render() {
        return (
            <MainLayout title="Map" growContent={true}>
                <WithUsers render={users =>
                    <MapView
                        style={{flex: 1}}
                    >
                        {users.map(user => (
                            <MapView.Marker key={user.login.uuid} coordinate={{
                                latitude: parseFloat(user.location.coordinates.latitude),
                                longitude: parseFloat(user.location.coordinates.longitude),
                            }}
                            />))}
                    </MapView>
                }/>
            </MainLayout>
        );
    }
}

export default UserMapScene;
