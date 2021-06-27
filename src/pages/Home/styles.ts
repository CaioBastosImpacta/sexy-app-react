import { Dimensions, StyleSheet } from 'react-native';


export const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#080808',
    },
    logo: {
        height: Dimensions.get('window').width,
        width: Dimensions.get('window').width,
    },
    appButtonContainerLogin: {
        width: 100,
        backgroundColor: '#C4302B',
        borderRadius: 100,
        paddingVertical: 10,
        paddingHorizontal: 12,
        marginBottom: 12,
    },
    appButtonContainerRegister: {
        width: 100,
        backgroundColor: '#C4302B',
        borderRadius: 100,
        paddingVertical: 10,
        paddingHorizontal: 12,
        marginBottom: 12,
    },
    appButtonText: {
        fontSize: 14,
        color: '#fff',
        fontWeight: 'bold',
        alignSelf: 'center',
        textTransform: 'uppercase',
    },
    inputBox: {
        backgroundColor: '#C4302B',
    }
});