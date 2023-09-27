import { View, Text, ScrollView, TouchableOpacity } from "react-native";
import { styles } from "./styles";
import { useState, useEffect } from "react";

export default function Home(){

    const [data, setData] = useState<string[]>([
            'Sorvete', 'Chocolate', 'Bala',
            'Brigadeiro', 'Casadinho','Açaí',
            'Waffle', 'Picolé','Pirulito',
            'Petit Gateau','Chiclte','Bolo',
            'Torta', 'Cupcake', 'Banoffee', 'Marshmallow'
        ]);

    return(
        // <ScrollView showsVerticalScrollIndicator={false}>
            <View style={styles.container}>
                <Text style={styles.title}>Lista de Doces</Text>     
              
                {
                    data.map(item => (
                        <TouchableOpacity 
                            key={item}
                            style={styles.itemList}                            
                        >
                            { item }
                        </TouchableOpacity>
                    ))
                }
                
            </View>
        // </ScrollView>
    )
}