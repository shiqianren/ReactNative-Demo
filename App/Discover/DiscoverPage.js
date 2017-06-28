/**
 * Created by admin on 2017/6/28.
 */

import React, {Component} from "react";
import {ListView, Text, RefreshControl, StyleSheet, View, Image} from "react-native";
export  default  class  DiscoverPage extends  Component{

    render(){
        return(
            <View style={[styles.flex,styles.center,{backgroundColor: 'white'}]}>
                <Text style={{fontSize: 40}}>探索</Text>
            </View>
        );
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