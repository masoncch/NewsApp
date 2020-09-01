//import liraries
import React, { Component } from 'react';
import { Dimensions, Modal, Share, TouchableOpacity, StyleSheet } from 'react-native';
import { WebView } from 'react-native-webview'
import { Container, Header, Content, Body, Left, Icon, Right, Title, Button} from 'native-base'

// create a component
class ModalComponent extends Component {

    constructor(props) {
        super(props);
    }

    handleClose = () => {
        return this.props.onClose();
    }

    handleShare = () => {
        
    }

    render() {
        const { showModal, articleData } = this.props;
        const { url } = articleData;
        if( url != undefined ) {
            return (
                <Modal
                animationType="slide"
                transparent
                visible={showModal}
                onRequestClose={this.handleClose}
            >
                <Container style={{margin:15, marginBottom:0, backgroundColor:'#fff'}}>
                    <Header style={{backgroundColor:'#179ae6'}}>
                        <Left>
                            <TouchableOpacity onPress={this.handleClose} transparent>
                                <Icon name="close" style={{color: 'white', fontSize: 20}}/>
                            </TouchableOpacity>
                        </Left>
                        <Body>
                            <Title children={articleData.title} style={{color: 'white'}}/>
                        </Body>
                        <Right>
                            <TouchableOpacity onPress={this.handleShare} transparent>
                                <Icon name="share" style={{color: 'white', fontSize: 20}}/>
                            </TouchableOpacity>
                        </Right>
                    </Header>
                    <Content>
                    <WebView source={{uri:url}} style={{flex: 1}}
                        onError={this.handleClose} startInLoadingState
                        scalesPageToFit
                        />
                    </Content>
                </Container>
            </Modal>
            );
        }
        else {
            return null;
        }
    }
}

// const styles = StyleSheet.create({
//     container: {
//         margin: 15,
//         marginBottom: 0,
//         backgroundColor: '#fff',
//     },
//     header: {
//         backgroundColor: '#179ae6',
//     },
//     closeBtn: {
//         color: 'white',
//         fontSize: 12,
//     },
//     shareBtn: {
//         color: 'white',
//         fontSize: 12,
//     }
// })

//make this component available to the app
export default ModalComponent;
