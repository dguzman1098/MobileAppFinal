import React from 'react'
import {StyleSheet, View} from 'react-native'
import { Text, FAB } from 'react-native-paper'
import Header from '../components/header'

function ViewCategory({navigation}){
    return(
        <>
        {/** HEADER */}
        <Header titleText='Note Taking App'/>


        <View style={styles.container}>
            
            {/** Create Category Button */}
            <FAB
            style = {styles.fab}

                small
                icon = 'plus'
                label='Create a new Category'
                onPress = {() => navigation.navigate('AddCategory')}
    
            />

            {/** Create Note Button */}
             <FAB
            style = {styles.fab}

                small
                icon = 'plus'
                label='Create a new Note'
                onPress = {() => navigation.navigate('AddNotes')}
    
            />
            <View style = {styles.titleContainer}>
                <Text style = { styles.title}> No Categories Created</Text>
            </View>
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
    },

    fab: {
        backgroundColor: '#219653',
        margin: 20,
    }

})

export default ViewCategory