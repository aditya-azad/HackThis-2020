import React, { Component } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image, ScrollView, Dimensions, TextInput, } from 'react-native';
import styles from './styles.js'
import { Ionicons } from '@expo/vector-icons';

const screenHeight = Math.round(Dimensions.get('window').height);

export default function ChatRoom({ navigation }) {

    var texts = [
        { text: "Hi Charlie! Looks like we're in CS 200 together.", timestamp: new Date(Date.now() - 500000), name: "user", pic: require('../assets/charlie-logan.png') },
        { text: "Hi Lya! How's it going?", timestamp: new Date(Date.now() - 400000), name: "John", pic: require('../assets/charlie-logan.png') },
        { text: "Good! How about you?", timestamp: new Date(Date.now() - 300000), name: "user", pic: require('../assets/charlie-logan.png') },
        { text: "I'm good :) Hey would you wanna study together for the exam this week?", timestamp: new Date(Date.now() - 200000), name: "John", pic: require('../assets/charlie-logan.png') },
        { text: "Yes I'd love to!", timestamp: new Date(Date.now() - 100000), name: "user", pic: require('../assets/charlie-logan.png') },
        { text: "Awesome! When are you free?", timestamp: new Date(Date.now() - 60000), name: "John", pic: require('../assets/charlie-logan.png') },
        { text: "Could we FT tomorrow after class?", timestamp: new Date(Date.now() - 100000), name: "user", pic: require('../assets/charlie-logan.png') },
        { text: "Sounds like a plan!", timestamp: new Date(Date.now() - 100000), name: "John", pic: require('../assets/charlie-logan.png') }
    ]

    let Data = texts
    let chats = Data.map((c_data) => {
        if ("user" == c_data.name) {
            return (
                <View style={{
                    backgroundColor: "#9c9fff", alignSelf: "flex-end", marginRight: 5,
                    borderBottomRightRadius: 0, marginBottom: 20, width: '70%', maxWidth: 500, padding: 10, borderRadius: 20,
                }}>
                    <Text style={{ fontFamily: "Ubuntu-Light", fontSize: 16, color: "#fff"}}> {c_data.text}</Text></View>)
        } else {
            return (
                <View style={{ width: '70%', maxWidth: 500, justifyContent: "flex-start", flexDirection: "row" }}>
                    <Image style={{
                        width: 40,
                        height: 40,
                        alignSelf: "flex-end",
                        marginBottom: 15,
                        marginLeft: 5,
                        borderRadius: 87,
                    }} source={c_data.pic} />
                    <View style={{ backgroundColor: "#dedede", borderRadius: 20, borderBottomLeftRadius: 0, marginBottom: 20, width: '75%', maxWidth: 500, padding: 10, marginLeft: 5 }}>
                        <Text style={{ fontFamily: "Ubuntu-Light", fontSize: 16, color: "#000" }}> {c_data.text}</Text>
                    </View>
                </View>)
        }
    })

    return (
        <View style={styles.container}>
            <View>
                <View style={{
                    backgroundColor: 'transparent',
                    borderBottomColor: '#6c63ff',
                    borderBottomWidth: 1,
                    width: 400,
                    paddingBottom: 15,
                }}>
                    <TouchableOpacity style={[styles.chatSend, { marginLeft: '5%', paddingTop: 10 }]} onPress={() => navigation.navigate('ChatScreen')}>
                        <Ionicons name="ios-arrow-back" size={25} color="#3d3d3d" />
                    </TouchableOpacity>
                    <Text style={{
                        color: '#6c63ff',
                        top: -30,
                        marginBottom: -25,
                        fontSize: 20,
                        alignSelf: 'center',
                        textAlign: 'center',
                        fontFamily: "Ubuntu-Medium",
                    }}>{"Charlie Logan"}</Text></View>
            </View>
            <View style={{
                height: screenHeight - 150, marginVertical: 0,
                flex: 1, flexDirection: 'row', backgroundColor: "#fff",
                borderRadius: 10, padding: 0,
            }}>
                <ScrollView>
                    <Text style={{padding: 3}}></Text>
                    {chats}
                </ScrollView>
            </View>
            <View style={styles.chatInputs} >
                <View  /* style={styles.chatinputContainer} */ >
                    <TextInput style={{ width: Math.round(Dimensions.get('window').width) - 100 }} placeholderTextColor="black" placeholder="Write a message..."
                                /* ref={input => { this.textInput = input }} */
                                /* onChangeText={(msg) => this.setState({ text: msg })} */ />
                </View>
                <TouchableOpacity >
                    <Ionicons name="ios-send" size={25} color="#3d3d3d"/>
                </TouchableOpacity>
            </View></View>)
}
/* export default class Chat extends Component {

    color="#3d3d3d" style={{position="absolute", left: 10, top: 10}}
    render() {
        componentWillMount = () => {
            firebaseSvc.refOn().then((solve) => {
                this.setState({ chatData: solve })
            }).catch((fail) => {
                console.log(fail)
            })
            this.retrieveData()
        }
        retrieveData = async () => {
            let fid = this.props.navigation.getParam('fid')
            let fname = this.props.navigation.getParam('fname')
            let femail = this.props.navigation.getParam('femail')
            let uid = this.props.navigation.getParam('uid')
            let uname = this.props.navigation.getParam('uname')
            let uemail = this.props.navigation.getParam('uemail')
            this.setState({ f_email: femail, f_id: fid, f_name: fname, u_id: uid, u_name: uname, u_email: uemail })
        }
        onSend = () => {
            this.textInput.clear()
            firebaseSvc.send(this.state.f_id, this.state.f_email, this.state.text, this.state.u_id, this.state.u_email, this.state.u_name)
            firebaseSvc.refOn().then((solve) => {
                this.setState({ chatData: solve })
            }).then(() => {
                let data = this.state.chatData
            }).catch((fail) => { console.log(fail) })
        }
        render() {

    } */