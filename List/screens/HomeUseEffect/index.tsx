import { View, Text, ScrollView, FlatList } from "react-native";
import { styles } from "./styles";
import { useState } from "react";

export default function UseEffect(){

    const [data, setData] = useState<string[]>([
            'Ana Maria Braga', 'Breno de Souza Faria', 'Carlos Alves Pareira',
            'Daniel de Maria Prio', 'João Carlos da Silva','Ana Maria Pereira',
            'Pedro Henrique Santos', 'Maria Luiza Oliveira','José Antonio Costa',
            'Carla Beatriz Lima','Paulo Roberto Sousa','Laura Fernanda Silva',
            'André Luiz Santos', 'Camila Regina Pereira', 'Ricardo Almeida Costa'
        ]);
       
    
    return(
            
            <View style={styles.container}>
                <Text style={styles.title}>Lista de Presença</Text>
               
                <FlatList
                    data={data}
                    keyExtractor={item => item}
                    renderItem={({ item }) => (
                        <Text 
                            key={item}
                            style={styles.itemList}                            
                        >
                            { item }
                        </Text>
                    )}
                    showsVerticalScrollIndicator= {false}
                    ListEmptyComponent={() => (
                        <Text style={styles.listEmptyText}>
                            Ninguém chegou no evento ainda? Adicione participantes a sua lista de presença.
                        </Text>
                    )}
                />
                
                
                {/* {
                    data.map(item => (
                        <Text 
                            key={item}
                            style={styles.itemList}                            
                        >
                            { item }
                        </Text>
                    ))
                } */}
                
            </View>
    )
}