import { ActivityIndicator, FlatList, StyleSheet, Text, View } from 'react-native';
import React, { useEffect, useState } from 'react';
import * as Location from 'expo-location';
import axios from 'axios';
import WeatherCard from '../Components/Wheater';

type Weather = {
    date: string;
    dayOfWeek: string;
    maxTemp: number;
    minTemp: number;
    rainChance: number;
    condition: string;
};

const Clima = () => {
    const [data, setData] = useState<Weather[]>([]);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const cargaDatos = async () => {
            try {
                let { status } = await Location.requestForegroundPermissionsAsync();
                if (status !== 'granted') {
                    setError('Permiso de ubicación denegado');
                    setLoading(false);
                    return;
                }

                let location = await Location.getCurrentPositionAsync({});
                const { latitude, longitude } = location.coords;

                const response = await axios.get(
                  `https://api.weatherapi.com/v1/forecast.json?key=681ce50cf6454646a7441316252502&q=${latitude},${longitude}&days=5&lang=es`
              );
              

                const forecastData = response.data.forecast.forecastday.map((day: any) => ({
                    date: new Date(day.date).toLocaleDateString('es-ES'),
                    dayOfWeek: new Date(day.date).toLocaleDateString('es-ES', { weekday: 'long' }),
                    maxTemp: day.day.maxtemp_c,
                    minTemp: day.day.mintemp_c,
                    rainChance: day.day.daily_chance_of_rain,
                    condition: day.day.condition.text,
                }));

                setData(forecastData);
            } catch (error) {
                setError('Error al obtener los datos del clima');
            } finally {
                setLoading(false);
            }
        };

        cargaDatos();
    }, []);

    if (loading) {
        return (
            <View style={styles.center}>
                <ActivityIndicator size="large" color="#0000ff" />
            </View>
        );
    }

    if (error) {
        return (
            <View style={styles.center}>
                <Text style={styles.errorText}>{error}</Text>
            </View>
        );
    }

    return (
        <View style={styles.container}>
            <FlatList
                data={data}
                keyExtractor={(item) => item.date}
                renderItem={({ item }) => <WeatherCard weather={item} />}
            />
        </View>
    );
};

export default Clima;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        backgroundColor: '#f5f5f5',
    },
    center: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    errorText: {
        fontSize: 18,
        color: 'red',
    },
});
