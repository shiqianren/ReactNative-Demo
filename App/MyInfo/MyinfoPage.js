/**
 * Created by admin on 2017/6/28.
 */

import React, {Component} from "react";

import {ListView, Text, RefreshControl, StyleSheet, View, Image,TouchableHighlight,Alert,TouchableWithoutFeedback} from "react-native";
import ProfileSet from  '../MyInfo/ProfileSet'
/**
 * 个人中心，头像，昵称部分
 */
class Header extends Component {
    render() {
        return (
            <View style={ProfilePageStyle.container}>
                <View style={{alignItems: 'flex-end'}}>
                    <TouchableWithoutFeedback onPress={this.props.onSettingClick}>
                        <Image
                            source={require('../../images/ic_menu_more.png')}
                            style={ProfilePageStyle.btn_setting}/>
                    </TouchableWithoutFeedback>

                </View>
                <View style={ProfilePageStyle.container_avater}>
                    <TouchableWithoutFeedback onPress={this.props.onAvatarClick}>
                        <Image
                            style={ProfilePageStyle.img_avatar}
                            source={require('../../images/avatar.png')}
                        /></TouchableWithoutFeedback>
                    <Text onPress={this.props.onNameClick}>Marno</Text>
                </View>
                <View style={ProfilePageStyle.container_favority_and_reply}>
                    <TouchableWithoutFeedback onPress={this.props.onFavorityClick}>
                        <View style={ProfilePageStyle.container_favority}>
                            <Image
                                style={ProfilePageStyle.img_favority}
                                source={require('../../images/ic_action_favorites_grey.png')}/>
                            <Text style={ProfilePageStyle.tv_favority}>收藏</Text>
                        </View>
                    </TouchableWithoutFeedback>
                    <TouchableWithoutFeedback onPress={this.props.onReplyClick}>
                        <View style={ProfilePageStyle.container_reply}>
                            <Image
                                style={ProfilePageStyle.img_reply}
                                source={require('../../images/ic_action_reply_grey.png')}/>
                            <Text style={ProfilePageStyle.tv_reply}>评论</Text>
                        </View>
                    </TouchableWithoutFeedback>
                </View>
            </View>
        )
    }
}
export  default  class  MyinfoPage extends  Component{

    render(){
        return(
            <View>
                <Header
                    onSettingClick={()=>this._onSettingClick()}
                    onAvatarClick={()=>this._onAvatarClick()}
                    onNameClick={()=>this._onNameClick()}
                    onFavorityClick={()=>this._onFavorityClick()}
                    onReplyClick={()=>this._onReplyClick()}
                />

            </View>

        );

    }

    //点击跳转设置界面
    _onSettingClick() {
        const {navigator} = this.props;
        if (navigator) {
            navigator.push({
                name: 'ProfileSet',
                component: ProfileSet,
                // params: {
                //     rowData: this.props.rowData,
                // }
            })
        }
    }

    //头像点击事件
    _onAvatarClick() {
        alert('点击了头像')
        // ToastUtil.show("点击了头像");
    }

    //昵称点击事件
    _onNameClick() {
        alert('点击了昵称')
        // ToastUtil.show("点击了昵称");
    }

    //收藏点击事件
    _onFavorityClick() {
        alert('点击了收藏')
        // ToastUtil.show("点击了收藏");
    }

    //评论点击事件
    _onReplyClick() {
        alert('点击了评论')
        // ToastUtil.show("点击了评论");
    }




}
const ProfilePageStyle = StyleSheet.create({
    container: {
        paddingBottom: 20,
        borderBottomWidth: 0.5,
        borderBottomColor: '#B5B5B5',
        backgroundColor: 'white',
    },
    container_favority_and_reply: {
        flexDirection: 'row',
    },
    container_favority: {
        flexDirection: 'row',
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        borderRightWidth: 0.5,
        borderRightColor: '#B5B5B5'
    },
    container_reply: {
        flexDirection: 'row',
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    container_avater: {
        alignItems: 'center',
        marginBottom: 32,
    },
    header: {
        backgroundColor: '#333333',
        height: 240,
    },
    btn_setting: {
        marginTop:10,
        height: 40,
        width: 40,
    },
    img_avatar: {
        borderRadius: 40,
        height: 80,
        width: 80,
        marginBottom: 16,
    },
    tv_favority: {
        color: '#888888',
    },
    tv_reply: {
        color: '#888888',
    },
    img_favority: {
        height: 20,
        width: 20,
        resizeMode: 'contain',
        marginRight: 8,
    },
    img_reply: {
        height: 20,
        width: 20,
        resizeMode: 'contain',
        marginRight: 8,
    },
    tv_myItem: {
        height: 80,
        textAlign: 'center',
        textAlignVertical: 'center'
    },
})