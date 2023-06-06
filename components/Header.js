import {
    Text,
    View
} from 'react-native';

export default function Header() {

    return (
        <View style={{width:'100%', flexDirection:'row', justifyContent:'space-between', alignItems:'center', justifyContent:'space-between', backgroundColor:'white', padding:5}}>
            <View style={{backgroundColor:'black', width:50, height:50, borderRadius:100}}>

            </View>
            <Text>
                My Timer 
            </Text>
        </View>
    )

}