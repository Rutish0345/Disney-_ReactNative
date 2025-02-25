import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

type Weather = {
    date: string;
    dayOfWeek: string;
    maxTemp: number;
    minTemp: number;
    rainChance: number;
    condition: string;
};

const getBackgroundColor = (temp: number) => {
    if (temp <= 20) return '#87CEEB';
    if (temp > 20 && temp <= 30) return '#FFD700';
    return '#FFA500';
};

const WeatherCard: React.FC<{ weather: Weather }> = ({ weather }) => {
    return (
        <View style={[styles.card, { backgroundColor: getBackgroundColor(weather.maxTemp) }]}>
            <Text style={styles.text}>{weather.dayOfWeek}</Text>
            <Text style={styles.text}>{weather.date}</Text>
            <Text style={styles.text}>Max: {weather.maxTemp}°C / Min: {weather.minTemp}°C</Text>
            <Text style={styles.text}>Lluvia: {weather.rainChance}%</Text>
            <Text style={styles.text}>Tiempo: {weather.condition}</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    card: {
        padding: 20,
        marginVertical: 10,
        borderRadius: 10,
        alignItems: 'center',
    },
    text: {
        fontSize: 16,
        color: '#000',
    },
});

export default WeatherCard;