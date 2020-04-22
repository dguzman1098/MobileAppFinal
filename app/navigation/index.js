import {createAppContainer} from 'react-navigation'
import {createStackNavigator} from 'react-navigation-stack'
import ViewCategory from '../screens/ViewCategory'
import AddNotes from "../screens/AddNotes"
import AddCategory from "../screens/AddCategory"


const StackNavigator = createStackNavigator({
    ViewCategory: {
        screen: ViewCategory
    },

    AddNotes: {
        screen: AddNotes
    },

    AddCategory: {
        screen: AddCategory
    },
}, 
    {
        initialRouteName: 'ViewCategory',
        headerMode: 'none'
    })

export default createAppContainer(StackNavigator)

