import React, {Component} from 'react';
import {Text,View} from 'react-native';

export default class HomeScreen extends React.Component{
    render(){
        return(
            <View style={{flex:1, justifycontent:'center', alignItems:'center'}}>
                <Text>Home Screen</Text>
            </View>
        );
    }
}