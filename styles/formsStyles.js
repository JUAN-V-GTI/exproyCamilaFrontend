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
    showButton: {
        backgroundColor: '#007bff',
        padding: 10,
        borderRadius: 5,
        alignItems: 'center',
        marginStart: 20,
        marginEnd:20,
        marginTop:5,
      },
      showButtonText: {
        color: 'white',
        fontSize: 16,
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
    containerTable: {
        flex: 1,
        backgroundColor: '#fff',
        margin:20,
        padding: 5,
        borderRadius: 10,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
      },
      tableHeader: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: 4,
        borderBottomWidth: 2,
        borderBottomColor: '#ccc',
      },
      tableHeaderCell: {
        flex: 1,
        textAlign: 'left',
        fontWeight: 'bold',
        
      },
      tableHeaderNombre: {
        flex: 3,
        textAlign: 'left', 
        fontWeight: 'bold',
      },
      tableHeaderIconos: {
        flex: 3,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        
      },
   
      tableRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: 1,
        borderBottomWidth: 4,
        borderBottomColor: '#ccc',
        marginTop:20,
      },
    id: {
        width: '7%', // 20% del ancho del padre
        fontSize: 14,
        fontWeight: 'bold',
        marginRight: 10,
      },
      
      nombre: {
        width: '40%', // 40% del ancho del padre
        fontSize: 16,
        
        marginRight: 10,
      },
      
      icon1: {
        width: '41%', // 40% del ancho del padre
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginRight: 3,
        marginLeft: 12,
        
      },
});

export default styles;
