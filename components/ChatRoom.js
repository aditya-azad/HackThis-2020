import React, { Component } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image, ScrollView, Dimensions, TextInput, } from 'react-native';
import styles from './styles.js'
import { Ionicons } from '@expo/vector-icons'; 

const screenHeight = Math.round(Dimensions.get('window').height);

export default function ChatRoom( {navigation} ) {
    var texts = [
        { text: "hey", timestamp: new Date(Date.now() - 500000), name: "user",  pic: require('../assets/charlie-logan.png') },
        { text: "Hey.", timestamp: new Date(Date.now() - 400000), name: "John",  pic: require('../assets/charlie-logan.png') },
        { text: "Wyd?", timestamp: new Date(Date.now() - 300000), name: "John",  pic: require('../assets/charlie-logan.png') },
        { text: "nm hbu", timestamp: new Date(Date.now() - 200000), name: "user",  pic: require('../assets/charlie-logan.png') },
        { text: "Nm.", timestamp: new Date(Date.now() - 100000), name: "John",  pic: require('../assets/charlie-logan.png') },
        { text: "good talk", timestamp: new Date(Date.now() - 60000), name: "user",  pic: require('../assets/charlie-logan.png') }]


    let Data = texts
            let chats = Data.map((c_data) => {
                    if ("user" == c_data.name) {
                        return (
                            <View style={{
                                backgroundColor: "#91d0fb", marginLeft: '30%',
                                borderRadius: 4, marginBottom: 20, width: '70%', maxWidth: 500, padding: 15, borderRadius: 20,
                            }}>
                                <Text style={{ fontSize: 16, color: "#fff" }}> {c_data.text}</Text></View>)
                    } else {
                        return (
                            <View style={{marginBottom: 20, width: '70%', maxWidth: 500, justifyContent: "flex-start", flexDirection:"row"}}>
                            <Image style={{
                                width: 40,
                                height: 40,
                                position: "absolute",
                                top: 10,
                                borderRadius: 87,
                              }} source={c_data.pic} />
                            <View style={{ backgroundColor: "#dedede", borderRadius: 4, borderRadius: 20,marginBottom: 20, width: '70%', maxWidth: 500, padding: 15, marginLeft: 45}}>
                                <Text style={{ fontSize: 16, color: "#000" }}> {c_data.text}</Text>
                            </View>
                            </View>)
                    }
            })

            return (
                <View style={styles.container}>
                    <View style={{
                        height: screenHeight - 150, marginVertical: 20,
                        flex: 1, flexDirection: 'row', backgroundColor: "#fff",
                        borderRadius: 10, padding: 0,
                    }}>
                        <ScrollView>{chats}</ScrollView>
                    </View>
                    <View   style={styles.chatInputs} >
                        <View  /* style={styles.chatinputContainer} */ >
                            <TextInput style={{width: Math.round(Dimensions.get('window').width) - 100}} placeholderTextColor="black"  placeholder="Write a message..."
                                /* ref={input => { this.textInput = input }} */
                                /* onChangeText={(msg) => this.setState({ text: msg })} */ />
                        </View>
                        <TouchableOpacity >
                            <Ionicons name="ios-send" size={24} backgroundColor="white" color="blue" />
                        </TouchableOpacity>
                    </View></View>)
}
/* export default class Chat extends Component {
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