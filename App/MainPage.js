/**
 * Created by admin on 2017/6/28.
 */
import React, {Component} from "react";
import {StyleSheet, Image} from "react-native";
import TabNavigator from "react-native-tab-navigator";
import Hompage from  "./Home/HomePage"
import FolowPage from  "./Follow/FollowPage"
import ExplorePage from  "./Discover/DiscoverPage"
import ProfilePage from  "./MyInfo/MyinfoPage"

const SELECTED_TAG = 'selected';
const SELECTED_TITLE = '精选';
const SELECTED_NORMAL = require('../images/ic_tab_strip_icon_feed.png');
const SELECTED_FOCUS = require('../images/ic_tab_strip_icon_feed_selected.png');

const EXPLORE_TAG = 'explore';
const EXPLORE_TITLE = '发现';
const EXPLORE_NORMAL = require('../images/ic_tab_strip_icon_category.png');
const EXPLORE_FOCUS = require('../images/ic_tab_strip_icon_category_selected.png');

const FOLLOW_TAG = 'follow';
const FOLLOW_TITLE = '关注';
const FOLLOW_NORMAL = require('../images/ic_tab_strip_icon_follow.png');
const FOLLOW_FOCUS = require('../images/ic_tab_strip_icon_follow_selected.png');

const PROFILE_TAG = 'profile';
const PROFILE_TITLE = '我的';
const PROFILE_NORMAL = require('../images/ic_tab_strip_icon_profile.png');
const PROFILE_FOCUS = require('../images/ic_tab_strip_icon_profile_selected.png');

export  default  class MainPage extends  Component{
    constructor(props){
        super(props)
        this.state ={
            selectedTab:SELECTED_TAG
        }
    }

    render(){
        return(
            <TabNavigator
              tabBarStyle = {MainPageStyle.tab_container}
              tabBarShadowStyle = {{height:0}}
            >
                {this._renderTabItem(SELECTED_TAG, SELECTED_TITLE, SELECTED_NORMAL, SELECTED_FOCUS)}
                {this._renderTabItem(EXPLORE_TAG, EXPLORE_TITLE, EXPLORE_NORMAL, EXPLORE_FOCUS)}
                {this._renderTabItem(FOLLOW_TAG, FOLLOW_TITLE, FOLLOW_NORMAL, FOLLOW_FOCUS)}
                {this._renderTabItem(PROFILE_TAG, PROFILE_TITLE, PROFILE_NORMAL, PROFILE_FOCUS)}
            </TabNavigator>
        )
    }
    /**
     * 渲染tab中的item
     * @param tag
     * @param title
     * @param iconNormal
     * @param iconFocus
     * @param pageView
     * @returns {XML}
     * @private
     */
    _renderTabItem(tag, title, iconNormal, iconFocus) {
        return (
            <TabNavigator.Item
                selected={this.state.selectedTab === tag}
                title={title}
                titleStyle={MainPageStyle.tab_title}
                selectedTitleStyle={MainPageStyle.tab_title_selected}
                renderIcon={() => <Image source={iconNormal} style={MainPageStyle.tab_icon}/>}
                renderSelectedIcon={() => <Image source={iconFocus} style={MainPageStyle.tab_icon}/>}
                onPress={() => this.setState({selectedTab: tag})}>
                {this._createContentPage(tag)}
            </TabNavigator.Item>
        )
    }

    /**
     * 渲染tab对应的内容页面
     * @param tag
     * @returns {XML}
     * @private
     */
    _createContentPage(tag) {
        switch (tag) {
            case SELECTED_TAG:
                return (<Hompage {...this.props}/>);
            case EXPLORE_TAG:
                return (<ExplorePage {...this.props}/>);
            case FOLLOW_TAG:
                return (<FolowPage {...this.props}/>);
            case PROFILE_TAG:
                return (<ProfilePage {...this.props}/>);
        }
    }

}

const MainPageStyle = StyleSheet.create(
    {
        tab_container: {
            height: 42,
        },
        tab_icon: {
            width: 40,
            height: 40,
            resizeMode: 'contain',
        },
        tab_title: {
            color: "#929292",
            fontSize: 10,
            marginTop:-4,
        },
        tab_title_selected: {
            color: "#333333",
            fontSize: 10,
            marginTop:-4,
        }
    }
)
