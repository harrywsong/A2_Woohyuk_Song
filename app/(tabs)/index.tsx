import { View, Text, TextInput, Button, StyleSheet, Alert, ActivityIndicator } from 'react-native';
import { useState } from 'react';

// API configuration
const API_KEY = 'fca_live_VJzqecwLsUGYkgAMQMxSlfQUFOnKpsBGst1qsUDU';
const API_BASE_URL = 'https://api.freecurrencyapi.com/v1/latest';

export default function HomeScreen() {

  // state variables
  
  // base input currency should be CAD
  const [baseCurrency, setBaseCurrency] = useState('CAD');
  // base output currency should be USD
  const [destCurrency, setDestCurrency] = useState('USD');
  // amount to convert, default to using 1
  const [amount, setAmount] = useState('1');

  // loading state, default to false
  const [loading, setLoading] = useState(false);
  // converted amount, default to empty string
  const [convertedAmount, setConvertedAmount] = useState('');
  // exchange rate, default to empty string
  const [exchangeRate, setExchangeRate] = useState('');
  // show result state, default to false. used to display the result of the conversion
  const [showResult, setShowResult] = useState(false);

  const handleAmountChange = (text: string) => {
    // allow only numbers and one decimal point
    if (/^\d*\.?\d*$/.test(text)) {
      setAmount(text);
    }
  };

  const validateInputs = () => {
    // check if base and destination currencies are entered, if not, show error message
    if (!baseCurrency || !destCurrency) {
      Alert.alert('Error', 'Please enter both base and destination currencies');
      return false;
    }

    // check if amount is entered and is a valid number, if not, show error message
    if (!amount || parseFloat(amount) <= 0) {
      Alert.alert('Error', 'Please enter a valid amount');
      return false;
    }

    // check if base and destination currencies are the same, if so, show error message
    if (baseCurrency.toUpperCase() === destCurrency.toUpperCase()) {
      Alert.alert('Error', 'Base and destination currencies cannot be the same');
      return false;
    }

    // check if destination currency is 3 characters, if not, show error message
    if (destCurrency.length !== 3) {
      Alert.alert('Error', 'Destination currency must be 3 characters');
      return false;
    }

    // check if base currency is 3 characters, if not, show error message
    if (baseCurrency.length !== 3) {
      Alert.alert('Error', 'Base currency must be 3 characters');
      return false;
    }

    // if all inputs are valid, return true
    return true;
  };

  // TODO: add validation, add error handling
  // TODO: add conversion logic

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Currency Converter</Text>

      <Text style={styles.label}>Base Currency (e.g., CAD):</Text>
      <TextInput
        style={styles.input}
        value={baseCurrency}
        onChangeText={setBaseCurrency}
        placeholder="CAD"
        autoCapitalize="characters"
        maxLength={3}
      />

      <Text style={styles.label}>Destination Currency (e.g., USD):</Text>
      <TextInput
        style={styles.input}
        value={destCurrency}
        onChangeText={setDestCurrency}
        placeholder="USD"
        autoCapitalize="characters"
        maxLength={3}
      />

      <Text style={styles.label}>Amount:</Text>
      <TextInput
        style={styles.input}
        value={amount}
        onChangeText={handleAmountChange}
        // use 1 as default value
        placeholder="1"
        // limit the input to only numbers
        keyboardType="numeric"
      />

      <View style={styles.buttonContainer}>
        {loading ? (
          <ActivityIndicator size="large" color="#007AFF" />
        ) : (
          <Button 
          title="Convert" 
          // to be implemented later to start the conversion process when user clicks the button
          // onPress={convertCurrency} 
          disabled={loading} />
        )}
      </View>

      {showResult && (
        <View style={styles.resultBox}>
          <Text style={styles.resultText}>
            {amount} {baseCurrency} = {convertedAmount} {destCurrency}
          </Text>
          <Text style={styles.rateText}>
            Exchange Rate: {exchangeRate}
          </Text>
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginTop: 40,
    marginBottom: 30,
  },
  label: {
    fontSize: 16,
    marginBottom: 5,
    marginTop: 10,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    padding: 10,
    fontSize: 16,
  },
  buttonContainer: {
    marginTop: 20,
    marginBottom: 20,
  },
  resultBox: {
    backgroundColor: '#f0f0f0',
    padding: 20,
    borderRadius: 10,
    marginTop: 10,
  },
  resultText: {
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 10,
  },
  rateText: {
    fontSize: 14,
    textAlign: 'center',
    color: '#666',
  },
});