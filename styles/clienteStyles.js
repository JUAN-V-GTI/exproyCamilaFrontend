// src/styles/clienteStyles.js
import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#ffeaf1',
    },
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: 10,
        backgroundColor: '#f8f8f8',
    },
    menuButtons: {
        flexDirection: 'row',
    },
    menuButton: {
        marginHorizontal: 15,
        borderEndStartRadius: 9,
        borderColor: '#1f001a',
    },
    menuButtonText: {
        fontSize: 20,
        color: '#000',
        marginTop: 5,
    },
    exit: {
        width: 35,
        height: 35,
        marginLeft: 70,
        marginRight: 10,
    },
    defaultView: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    logo: {
        width: 200,
        height: 200,
    },
    logoText: {
        marginTop: 10,
        fontSize: 18,
    },
    editView: {
        flex: 1,
        padding: 20,
    },
    // searchContainer: {
    //     flexDirection: 'row',
    //     marginBottom: 10,
    //     borderRadius:50,
    //     padding:4,
    //     backgroundColor: '#e3e3e3',
      
    // },
    // searchInput: {
    //     flex: 1,
    //     color: '#1004fc',
    //     marginRight: 10,
    //     borderRadius:10,
        
    // },
    // searchButtonText: {
    //     color: '#fff',
       
    // },
    // searchButtonText: {
    //     marginTop:1,
    //     marginBottom:3,
    //     marginRight:10,
    //     marginLeft:10,
    //     fontSize:20,
        
    //     color: '#1004fc',
    // },
    // iconsearch: {
    //     color: '#8f8f8f',
    //     marginTop:5,
    //     marginRight:10,
    //     marginLeft:4,
    // },  
    scrollView: {
        flex: 1,
        margin: 20,
        marginTop: 40,
    },
    inputContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 10,
        borderBottomWidth: 1,
        borderColor: '#ccc',
        paddingHorizontal: 10,
    },
    textInput: {
        flex: 1,
        paddingVertical: 10,
    },
    icon: {
        color: '#007bff',
        marginRight: 10,
    },
    buttonContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 20,
    },
    saveButton: {
        backgroundColor: '#1004fc',
        padding: 10,
        borderRadius: 5,
        alignItems: 'center',
        marginTop: 60,
        marginLeft: 30,
        marginRight: 30,
    },
    disableButton: {
        backgroundColor: '#dc3545',
        padding: 15,
        borderRadius: 5,
        alignItems: 'center',
    },
    buttonText: {
        color: '#fff',
        fontSize: 18,
    },
});

export default styles;
