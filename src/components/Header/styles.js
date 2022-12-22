import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
    containerColor : (color) =>({
        backgroundColor : color,
        paddingHorizontal : 24,
        paddingTop : 30,
        paddingBottom : 24,
        flexDirection :'row',
        alignItems : 'center'
    }),
    container : {
        backgroundColor : 'white',
        paddingHorizontal : 24,
        paddingTop : 30,
        paddingBottom : 24,
        flexDirection :'row',
        alignItems : 'center'
    },
    title :{
        fontSize : 22,
        fontFamily : 'Poppins-Light',
        color : '#2F3542',

    },
    subtitle :{
        fontSize : 14,
        fontFamily : 'Poppins-Light',
        color : '#2F3542'
    },
    back : {
        padding : 16, 
        marginRight : 32,
        marginLeft : -10
    }
})

export default styles