import React,{useState} from 'react'
import { View, Text,StyleSheet } from 'react-native'
import Ionicons from 'react-native-vector-icons/Ionicons'
import Menu, {
    MenuOptions,
    MenuOption,
    MenuTrigger,
} from 'react-native-popup-menu';

export default function EclipsBtn({assending,decending}) {

const [isopen, setisopen] = useState(false)

    const onBackdropPress = () => {
        setisopen(false)
    }
    const onTriggerPress = () => {
        setisopen(true)
    }
    const triggerStyles = {
        triggerText: {
            color: 'white',
        },
        triggerWrapper: {
            padding: 0,
            postion: "absolute",
            Right: 0

        },
        triggerTouchable: {

            activeOpacity: 70,
            postion: "absolute",
            Left: 0,
            marginLeft: 100
        },
        TriggerTouchableComponent: Ionicons,
    };
    const optionsStyles = {
        optionsContainer: {
            backgroundColor: 'white',
            padding: 8,
            marginTop: 35,
            width: 130,
            borderRadius: 10,
            shadowColor: "#939393",
            shadowOpacity: 0.8,
            shadowRadius: 5,
            shadowOffset: {
                height: 2,
                width: 2
            }
        },
        optionsWrapper: {
            backgroundColor: 'white',
        },
        optionWrapper: {
            backgroundColor: 'white',
            marginTop: 5,
            // borderBottomWidth: 1,
            borderColor: '#C8C8C8',
        },
        optionTouchable: {
            backgroundColor: 'white',

        },
        optionText: {
            color: 'black',
        },
    };
    return (
      
            <View style={styles.eclips}>
                            <View >
                                <Menu opened={isopen}
                                    onBackdropPress={() => onBackdropPress()}
                                    onSelect={value => setisopen(false)}>

                                    <MenuTrigger
                                        onPress={() => onTriggerPress()}
                                        customStyles={triggerStyles}
                                    >
                                        <Ionicons
                                            name="md-ellipsis-horizontal-sharp"
                                            color="black"
                                            size={25} />
                                    </MenuTrigger>

                                    <MenuOptions customStyles={optionsStyles}>
                                    <MenuOption disabled={true} >
                                            <Text style={{ color: 'gray' ,alignSelf:'center'}}>Sort by Date</Text>
                                        </MenuOption>
                                    
                                        <MenuOption value={1} onSelect={assending} text='Assending' >
                                        </MenuOption>
                                        <MenuOption value={2} onSelect={decending} >
                                            <Text style={{ color: 'black' }}>Decending</Text>
                                        </MenuOption>
                                      

                                    </MenuOptions>

                                </Menu>
                            </View>
                        </View>
     
    )
}
const styles = StyleSheet.create({
    eclips:{

    }
})
