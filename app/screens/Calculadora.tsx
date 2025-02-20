import { StyleSheet, Text, TextInput, View, Button, FlatList, TouchableOpacity } from 'react-native';
import React, { useState } from 'react';

interface RegistroPropina {
  consumo: number;
  porcentaje: number;
  propina: number;
  total: number;
}

const CalculadoraPropinas = () => {
  const [consumo, setConsumo] = useState('');
  const [porcentaje, setPorcentaje] = useState(10);
  const [personalizado, setPersonalizado] = useState('');
  const [propina, setPropina] = useState(0);
  const [total, setTotal] = useState(0);
  const [historial, setHistorial] = useState<RegistroPropina[]>([]);

  const calcularPropina = () => {
    const montoConsumo = parseFloat(consumo);
    const porcentajeAplicado = personalizado ? parseFloat(personalizado) : porcentaje;

    if (isNaN(montoConsumo) || isNaN(porcentajeAplicado) || montoConsumo <= 0) {
      alert('Ingresa valores válidos.');
      return;
    }

    const propinaCalculada = montoConsumo * (porcentajeAplicado / 100);
    const totalCalculado = montoConsumo + propinaCalculada;

    setPropina(parseFloat(propinaCalculada.toFixed(2)));
    setTotal(parseFloat(totalCalculado.toFixed(2)));

    setHistorial([{ 
        consumo: montoConsumo, 
        porcentaje: porcentajeAplicado, 
        propina: propinaCalculada, 
        total: totalCalculado 
    }, ...historial]);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Calculadora de Propinas</Text>

      <TextInput
        style={styles.input}
        placeholder="Monto del consumo"
        keyboardType="numeric"
        value={consumo}
        onChangeText={setConsumo}
      />

      <Text style={styles.label}>Selecciona un porcentaje:</Text>
      <View style={styles.buttonGroup}>
        {[10, 15, 20].map((valor) => (
          <TouchableOpacity key={valor} style={[styles.button, porcentaje === valor && styles.selectedButton]} onPress={() => setPorcentaje(valor)}>
            <Text style={styles.buttonText}>{valor}%</Text>
          </TouchableOpacity>
        ))}
      </View>

      <TextInput
        style={styles.input}
        placeholder="Porcentaje personalizado"
        keyboardType="numeric"
        value={personalizado}
        onChangeText={setPersonalizado}
      />

      <Button title="Calcular" onPress={calcularPropina} />

      {propina > 0 && (
        <View style={styles.results}>
          <Text style={styles.resultText}>Propina: ${propina}</Text>
          <Text style={styles.resultText}>Total: ${total}</Text>
        </View>
      )}

      <FlatList
        data={historial}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }) => (
          <View style={styles.historyItem}>
            <Text style={styles.historyText}>Consumo: ${item.consumo}</Text>
            <Text style={styles.historyText}>Propina: {item.porcentaje}%</Text>
            <Text style={styles.historyText}>Monto de Propina: ${item.propina}</Text>
            <Text style={styles.historyText}>Total: ${item.total}</Text>
          </View>
        )}
      />
    </View>
  );
};

export default CalculadoraPropinas;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 40,
    backgroundColor: '#EDE7F6',
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#7B1FA2',
    marginBottom: 20,
  },
  input: {
    width: '90%',
    borderWidth: 1,
    borderColor: '#7B1FA2',
    borderRadius: 10,
    padding: 12,
    marginBottom: 10,
    backgroundColor: '#FFF',
    color: '#000',
  },
  label: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#7B1FA2',
  },
  buttonGroup: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginVertical: 10,
    width: '90%',
  },
  button: {
    backgroundColor: '#CE93D8',
    padding: 10,
    borderRadius: 8,
  },
  selectedButton: {
    backgroundColor: '#7B1FA2',
  },
  buttonText: {
    color: '#FFF',
    fontWeight: 'bold',
  },
  results: {
    marginTop: 10,
    padding: 15,
    backgroundColor: '#D1C4E9',
    borderRadius: 10,
    alignItems: 'center',
  },
  resultText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#000',
  },
  historyItem: {
    backgroundColor: '#CE93D8',
    padding: 10,
    marginVertical: 5,
    borderRadius: 5,
    width: '90%',
  },
  historyText: {
    color: '#4A148C',
  },
});
