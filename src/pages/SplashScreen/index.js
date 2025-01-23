import React, { useEffect } from "react"; // useEffect para realizar uma ação ao carregar a tela.
import { View, Image, StyleSheet } from "react-native"; // View para layout, Image para exibir o logo.
import { useNavigation } from '@react-navigation/native';// useNavigation para gerenciar a navegação.

const SplashScreen = () => {
    const navigation = useNavigation(); // Hook para acessar funções de navegação

    useEffect(() => {
        // Executa após renderizar a tela.
        const timer = setTimeout(() => {
          navigation.replace("Home"); // Substitui a tela atual pela Home após 3 segundos.
        }, 3000);
    
        return () => clearTimeout(timer); // Limpa o timer para evitar erros de memória.
      }, []);

      return(
        <View style ={styles.container}>
            {/* Centralizar o conteúdo na tela*/}
            <Image
                source={require("../../assets/backgroundImage.png")} //caminho para a logo
                style={styles.background}
            />

        </View>
      )
    };

    const styles = StyleSheet.create ({
        container:{
            flex: 1, //ocupa toda a tela
            justifyContent: "center", //centaliza verticalmente
            alignItems: "center", //centraliza horizontalmente
            backgroundColor: "#000", //fundo roxo
        },

        background:{
            width: 800,
            height: 800,
            resizeMode: "contain",
        },
    });

    export default SplashScreen;