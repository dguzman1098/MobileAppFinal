import React from 'react'
import { StyleSheet, View } from 'react-native'
import { Text, FAB } from 'react-native-paper'
import Header from '../components/header'

function AddNotes({navigation}) {
    
    return(
        <>
        <Header titleText="Create a New Note" />
        <View style={styles.container}>
            <View style = {styles.titleContainer}>
                <Text style = { styles.title}> Add Note </Text>
            </View>
            <FAB
                small
                icon = 'plus'
                label='SUBMIT'
                onPress = {() => navigation.navigate('ViewCategory')}
            />
        </View>
        </>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        paddingVertical: 20,
        paddingHorizontal: 10
    },

    titleContainer: {
        alignItems: 'center',
        justifyContent: 'center',
        flex: 1
    },

    title: {
        fontSize: 20
    }
})

export default AddNotes
