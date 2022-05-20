import React, { useState } from "react";
import { Modal, StyleSheet, Text, Pressable, View } from "react-native";
import colors from "../constants/colors";
import GlobalStyle from "../styles/GlobalStyle";
import { CustomButtonText } from "./CustomButton";

const CustomDialog = (props) => {
    return (
        <View style={styles.centeredView}>
            <Modal
                animationType="slide"
                transparent={true}
                visible={props.open}
                onRequestClose={() => {
                    props.onCancel();
                }}
            >
                <View style={styles.centeredView}
                // onPress={() => props.onCancel()}
                >
                    <View style={styles.modal}>
                        <Text style={[GlobalStyle.Title]}>
                            {props.heading}
                        </Text>
                        <Text style={[GlobalStyle.CustomFont, styles.content]}>
                            {props.content}
                        </Text>
                        <View style={styles.bottomTab}>

                            <CustomButtonText
                                onPress={() => props.onCancel()}
                                content={'Hừm...'}
                                colors={[colors.dislike1, colors.dislike2]}
                            />
                            <CustomButtonText
                                onPress={() => props.onOK()}
                                content={'Géc gô !!'}
                                colors={[colors.like1, colors.like2]}
                            />
                        </View>
                    </View>
                </View>
            </Modal>
        </View>
    );
};

const CustomDialogConfirm = (props) => {
    return (
        <View style={styles.centeredView}>
            <Modal
                animationType="slide"
                transparent={true}
                visible={props.open}
                onRequestClose={() => {
                    props.onCancel();
                }}
            >
                <View style={styles.centeredView}
                // onPress={() => props.onCancel()}
                >
                    <View style={styles.modal}>
                        <Text style={[GlobalStyle.Title]}>
                            {props.heading}
                        </Text>
                        <Text style={[GlobalStyle.CustomFont, styles.content]}>
                            {props.content}
                        </Text>
                        <View style={styles.bottomTab}>
                            <CustomButtonText
                                onPress={() => props.onOK()}
                                content={'Hỉu !!'}
                                colors={[colors.like1, colors.like2]}
                            />
                        </View>
                    </View>
                </View>
            </Modal>
        </View>
    );
};

export function LikeDialog(props) {
    return (
        <CustomDialog
            open={props.open}
            onCancel={props.onCancel}
            onOK={props.onOK}
            heading={'CHÚC MỪNG'}
            content={props.content}
        />
    );
}

export function DislikeDialog(props) {
    return (
        <CustomDialog
            open={props.open}
            onCancel={props.onCancel}
            onOK={props.onOK}
            heading={'CHÚ Ý'}
            content={props.content}
        />
    );
}

const styles = StyleSheet.create({
    centeredView: {
        zIndex: 10,
        width: '100%',
        height: '100%',
        backgroundColor: '#6464af80',
        zIndex: 3,
        position: 'absolute',
        padding: 'auto',
        justifyContent: 'center',
        alignItems: 'center',
    },
    modal: {
        padding: 10,
        borderColor: '#6464af',
        borderRadius: 30,
        borderWidth: 1,
        width: '70%',
        // height: '40%',
        backgroundColor: '#fff',
        justifyContent: 'center',
        alignItems: 'center',
        // flex: 1,
    },
    bottomTab: {
        alignItems: 'center',
        justifyContent: 'space-around',
        flexDirection: 'row',
        width: '100%',
        // bottom: 80,
        paddingVertical: 10,
    },
    content: {
        alignItems: 'center',
        justifyContent: 'center',
        paddingHorizontal: 6,
    }
});

export default CustomDialog;