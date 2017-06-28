/**
 * Created by admin on 2017/6/28.
 */
import React, {Component, PropTypes} from 'react';
import {Text, View, StyleSheet, Platform, Image, TouchableOpacity, Dimensions} from 'react-native';
const maxWidth = Dimensions.get('window').width;
export default class NavigationBar extends Component {
    render() {
        // leftTitle和leftImage 优先判断leftTitle (即 文本按钮和图片按钮优先显示文本按钮)
        const {title, leftTitle, leftImage, leftAction, rightTitle, rightImage, rightAction} = this.props;
        return (
            <View style={[styles.barView, this.props.style]}>
                <View style={ styles.showView }>
                    {
                        (() => {
                            if (leftTitle) {
                                return <TouchableOpacity style={styles.leftNav} onPress={ () => {
                                    leftAction()
                                } }>
                                    <View style={{alignItems: 'center'}}>
                                        <Text style={styles.barButton}>{leftTitle}</Text>
                                    </View>
                                </TouchableOpacity>
                            } else if (leftImage) {
                                return <TouchableOpacity style={styles.leftNav} onPress={ () => {
                                    leftAction()
                                } }>
                                    <View style={{alignItems: 'center'}}>
                                        <Image style={{width: 25, height: 25}} source={ leftImage }/>
                                    </View>
                                </TouchableOpacity>
                            }
                            ;
                        })()
                    }
                    {
                        (() => {
                            if (title) {
                                return <Text style={styles.title}>{title || ''}</Text>

                            }
                        })()
                    }
                    {
                        (() => {
                            if (rightTitle) {
                                return <TouchableOpacity style={styles.rightNav} onPress={ () => {
                                    rightAction()
                                } }>
                                    <View style={{alignItems: 'center'}}>
                                        <Text style={styles.barButton}>{rightTitle}</Text>
                                    </View>
                                </TouchableOpacity>
                            } else if (rightImage) {
                                return <TouchableOpacity style={styles.rightNav} onPress={ () => {
                                    rightAction()
                                } }>
                                    <View style={{alignItems: 'center'}}>
                                        <Image source={ rightImage }/>
                                    </View>
                                </TouchableOpacity>
                            }
                        })()
                    }

                </View>
                <View style={styles.line_horizontal}></View>
            </View>
        )
    }

}
const styles = StyleSheet.create({
    barView: {
        height: Platform.OS === 'android' ? 44 : 64,
        backgroundColor: '#F7F7F9',
    },
    showView: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'row',
        marginTop: Platform.OS === 'android' ? 0 : 20,
        height: 44,
    },
    title: {
        color: 'black',
        fontSize: 18.0,
    },
    line_horizontal: {
        backgroundColor: '#c9c9ca',
        width: maxWidth,
        height: 1,
    },
    leftNav: {
        position: 'absolute',
        top: 8,
        bottom: 8,
        left: 8,
        justifyContent: 'center',
    },
    rightNav: {
        position: 'absolute',
        right: 8,
        top: 8,
        bottom: 8,
        justifyContent: 'center',
    },
    barButton: {
        color: 'black',
        fontSize: 18,
        marginRight:10
    },
})