import React, { Component } from "react";
import { StyleSheet, View, Text, FlatList, TouchableOpacity } from "react-native";
import { DEVICE_HEIGHT, DEVICE_WIDTH, PADDING_CONTENT, TEXTSIZE } from "../constant/Constant";

import Login from './Login';
import ProfileDetails from './ProfileDetails';
import global from "../global";
import saveToken from "../api/saveToken";

class Profile extends Component {
    constructor( props ) {
        super(props);
    }

    logout() {
        global.onSignIn = null;
        saveToken('');
        this.props.navigation.navigate("Login");
    }

    gotoLink(item) {
        this.props.navigation.navigate(item.toGo);
    }

    factory(item) {
        item.id == 1 ? this.logout() : this.gotoLink(item)
    }

    render() {
        const nav = this.props.navigation;

        const items = [
            {
                id: 0,
                key: 'Thông tin cá nhân',
                toGo: "ProfileDetails"
            },
            {
                id: 1,
                key: 'Đăng xuất',
                toGo: "Login"
            }
        ];
        
        return(
            <View style={ styles.container }>
                <FlatList
                    data={ items }
                    renderItem={({ item }) =>
                        <TouchableOpacity
                            style = { styles.rect }
                            onPress = {() => this.factory(item)}
                        >
                            <Text style = { styles.textButton }>{ item.key }</Text>
                        </TouchableOpacity>
                    }
                >
                </FlatList>
            </View>
        );
    }
}

export default Profile;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
        width: DEVICE_WIDTH,
        height: DEVICE_HEIGHT,
    },

    rect: {
        borderColor: "#000",
        borderWidth: 1,
        flexDirection: "column",
        width: DEVICE_WIDTH,
        height: 48,
        padding: PADDING_CONTENT,
    },

    textButton: {
        color: "#000",
        fontSize: TEXTSIZE
    },
});