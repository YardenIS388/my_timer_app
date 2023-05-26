import {
    Text,
    View
} from 'react-native';

export default function Header() {

    return (
        <View style={{flexDirection:'row', justifyContent:'space-between', alignItems:'center', justifyContent:'center', backgroundColor:'white', padding:10}}>
            <View style={{backgroundColor:'black', width:50, height:50, borderRadius:100}}>

            </View>
            <Text>
                My Timer 
            </Text>
        </View>
    )

}