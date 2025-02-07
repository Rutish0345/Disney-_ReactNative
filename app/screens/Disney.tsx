import { Button, StyleSheet, Text, TextInput, View, Image, ScrollView, TouchableOpacity} from "react-native";
import React from 'react';
export default function Disney(){
    return(
        <View style={estilos.containerPrincipal}>
        {}
        <View style={estilos.containerBuscar}>
          <TextInput
            placeholder="Título, género, equipo o liga"
            placeholderTextColor="#000000"
            style={estilos.buscar}
          />
        </View>
  
        {}
        <View style={estilos.categorias}>
  <ScrollView horizontal showsHorizontalScrollIndicator={false}>
    <TouchableOpacity style={estilos.categoriaBoton}>
      <Image 
        source={require('./imagnes/estrella.png')} 
        style={estilos.categoriaImagen} 
      />
      <Text style={estilos.categoriaTexto}>Originales</Text>
    </TouchableOpacity>

    <TouchableOpacity style={estilos.categoriaBoton}>
      <Image 
        source={require('./imagnes/cinema.png')} 
        style={estilos.categoriaImagen} 
      />
      <Text style={estilos.categoriaTexto}>Películas</Text>
    </TouchableOpacity>

    <TouchableOpacity style={estilos.categoriaBoton}>
      <Image 
        source={require('./imagnes/tv.png')} 
        style={estilos.categoriaImagen} 
      />
      <Text style={estilos.categoriaTexto}>Series</Text>
    </TouchableOpacity>
  </ScrollView>
</View>

  
        {}
        <Text style={estilos.titulo}>Explorar</Text>
  
        <ScrollView contentContainerStyle={estilos.peliculas}>
          <Image source={require("./imagnes/mufasa.jpg")} style={estilos.image} resizeMode="cover" />
          <Image source={require("./imagnes/enredados.jpg")} style={estilos.image} resizeMode="cover" />
          <Image source={require("./imagnes/tinkerbell.jpg")} style={estilos.image} resizeMode="cover" />
          <Image source={require("./imagnes/coco.jpg")} style={estilos.image} resizeMode="cover" />
          <Image source={require("./imagnes/walle.jpg")} style={estilos.image} resizeMode="cover" />
          <Image source={require("./imagnes/gemelas.jpg")} style={estilos.image} resizeMode="cover" />
        </ScrollView>
  
        {}
        <View style={estilos.iconosNav}>
          <TouchableOpacity>
            <Image source={require("./imagnes/casa.png")} style={estilos.iconos} resizeMode="cover" />
          </TouchableOpacity>
          <TouchableOpacity>
            <Image source={require("./imagnes/buscar.png")} style={estilos.iconos} resizeMode="cover" />
          </TouchableOpacity>
          <TouchableOpacity>
            <Image source={require("./imagnes/descargar.png")} style={estilos.iconos} resizeMode="cover" />
          </TouchableOpacity>
          <TouchableOpacity>
            <Image source={require("./imagnes/perfil.png")} style={estilos.iconos} resizeMode="cover" />
          </TouchableOpacity>
        </View>
      </View>
    );
}

const estilos = StyleSheet.create({
    containerPrincipal: {
      flex: 1,
      backgroundColor: "#222536",
    },
    containerBuscar: {
      height: '15%',
      padding: 20,
      justifyContent:'flex-end',
      
    },
    buscar: {
      backgroundColor: "#fff5ee",
      borderRadius: 8,
      color: "#FFFFFF",
      padding: 15,
      fontSize: 16
    },
    categorias: {
      alignItems:'center',
      marginVertical: 10,
    },
    categoriaBoton: {
     
      backgroundColor: "#1C1E2B",
      borderRadius: 20,
      paddingVertical: 8,
      paddingHorizontal: 15,
      marginHorizontal: 5,
    },
    categoriaTexto: {
      color: "#FFFFFF",
      fontSize: 20,
    },

    categoriaImagen: {
        alignSelf:'center',
        width: 30,
        height: 35,
        marginBottom: 5,
      },
      
    titulo: {  
      fontSize: 28,
      color: "#B0B3B8",
      fontWeight: "600",
      textAlign: "left",
      marginVertical: 10,
      marginHorizontal: 30,

    },
    peliculas: {
      flexDirection: "row",
      flexWrap: "wrap",
      justifyContent: "space-around",
      padding: 10,
    },
    image: {
      width: 150,
      height: 200,
      borderRadius: 8,
      marginBottom: 10,
    },
    iconosNav: {
      flexDirection: "row",
      justifyContent: "space-around",
      padding: 15,
      backgroundColor: "#1A1C29",
    },
    iconos: {
      width: 30,
      height: 30,
    },
  });
  
