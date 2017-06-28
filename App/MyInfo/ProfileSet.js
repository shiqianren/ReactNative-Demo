/**
 * Created by admin on 2017/6/28.
 */
import React, {Component} from "react";
import {ListView, Text, RefreshControl, StyleSheet, View, Image} from "react-native";
import NavigationBar from "../NavigationBar"
export  default  class  ProfileSet extends  Component {
    constructor(props){
        super(props);
    }

    render(){
        return(
            <View style={[styles.flex,{backgroundColor: 'white',flexDirection:'column'}]}>
                <NavigationBar title='个人设置修改' leftImage={require('../../images/ic_back.png') }
                               leftAction={ this._handleBack.bind(this)}/>
                {/*<Text style={{fontSize: 40}}>个人设置</Text>*/}
            </View>
        );
    }

    _handleBack(){

        const {navigator} = this.props;
        if (navigator) {
            navigator.pop();
        }

    }

}
const styles = StyleSheet.create({
    flex:{
        flex:1,
    },
    center:{
        justifyContent:'center',
        alignItems:'center'
    },
    img: {
        width: 40,
        height: 33,
    },
});
