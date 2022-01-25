import React from 'react';
import { StyleSheet,View,Text} from 'react-native';
import Counter from './components/Cgounter';

export default function App() {
    return (
        <View style={styles.container}>

            <View>

                <View style={[styles.box,{marginTop:0,height:75,backgroundColor:'#f5f5f5',flexDirection:'column'}]}>
                        <Text style={[styles.top]}> McDonald's</Text>
                       
                </View>

                <View style={[styles.box,{marginTop:0,backgroundColor:'#1e90ff',height:95,flexDirection:'column'}]}>
                        <Text style={[styles.Text,{fontSize:32,fontStyle:'italic',marginLeft:100,marginTop:25,fontWeight:'600'}]}>I'm Lovin' it ❤</Text>
                </View>

            </View>

                <View style={{height:54,flexDirection:'row'}}>
                    <Text style={[styles.nameText,{marginTop:16,fontStyle:'italic'}]}>Meal Type 🍔</Text>
                    <Text style={[styles.nameText,{marginTop:16,marginLeft:148,color:'#fff'}]}> Cost </Text>
                </View>
                                
                <View style={styles.box}>
                    <Text style={styles.Text}>McVeggie Burger</Text>
                    <Text style={[styles.Text,{marginLeft:130,}]}>R200</Text>
                </View>
                
                <View style={{height:54,flexDirection:'row'}}>
                    <Text style={[styles.nameText,{marginTop:16,fontStyle:'italic'}]}>Party Combos 🎉</Text>
                    <Text style={[styles.nameText,{marginTop:16,marginLeft:110,color:'#fff'}]}> Cost </Text>
                </View>

                <View style={styles.box}>
                    <Text style={styles.Text}>McAloo Tikki Meal</Text>
                    <Text style={[styles.Text,{marginLeft:120,}]}>R150.2</Text>
                </View>

                <View style={styles.box}>
                    <Text style={styles.Text}>Piri Veg Burger Meal</Text>
                    <Text style={[styles.Text,{marginLeft:105,}]}>R130.5</Text>
                </View>
                            
                <View style={{height:54,flexDirection:'row'}}>
                    <Text style={[styles.nameText,{marginTop:16,fontStyle:'italic'}]}>Beverages🥤</Text>
                    <Text style={[styles.nameText,{marginTop:16,marginLeft:162,color:'#fff'}]}>Cost</Text>
                </View>

                 <View style={styles.box}>
                    <Text style={styles.Text}>Coke (L)</Text>
                    <Text style={[styles.Text,{marginLeft:210,}]}>R70</Text>
                </View>

            <Counter />
                        
        </View>
);};

const styles= StyleSheet.create({  
    container: {
        flex:1,
        backgroundColor:'#000',
      },
    box: {
        width: 400,
        height: 60,
        backgroundColor:"#606060",
        marginTop: 4,
        flexDirection:'row'
    },
    nameText: {
        fontWeight:'400',
        fontSize:22,
        color: '#fff',
        marginLeft:10,
    },
    Text:{
        marginTop:10,
        marginLeft:22,
        fontSize:19,
        color:'#fff',
    },
    top:{
        marginTop:10,
        marginLeft:110,
        fontSize:30,
        width:170,
        color:'#ffa500',
        fontWeight:"800",
        backgroundColor:'#8b0000',
        borderRadius:10,
    },

})

