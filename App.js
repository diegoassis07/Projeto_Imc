import { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
} from "react-native";

export default function App() {
  const [altura, setAltura] = useState();
  const [peso, setPeso] = useState();
  const [resultado, setResultado] = useState("Aguardando resultado..");

  const getImc = (Number) => {};

  const Calcular = () => {
    const calculoImc =
      parseFloat(peso) / (parseFloat(altura) * parseFloat(altura));

    console.log({ calculoImc });

    if (calculoImc <= 16) setResultado("Muito abaixo do peso");
    if (calculoImc >= 17 && calculoImc <= 18.4) setResultado("Abaixo do peso");
    if (calculoImc >= 18.5 && calculoImc <= 24.9) setResultado("Peso ideal");
    if (calculoImc >= 25 && calculoImc <= 29.9) setResultado("Acima do peso");
    if (calculoImc >= 30 && calculoImc <= 34.9) setResultado("Obesidade grau 1");
    if (calculoImc >= 35 && calculoImc <= 40) setResultado("Obesidade grau 2");
    if (calculoImc > 40) setResultado("Obesidade grau 3");

    setPeso("")
    setAltura("")
    setResultado('Resultado:'+ " " + calculoImc )
  };



  return (
    <View style={styles.container}>
      <TextInput
        placeholder="Digite sua altura"
        value={altura}
        onChangeText={setAltura}
        keyboardType="numeric"
        style={styles.input}
      />

      <TextInput
        placeholder="Digite seu peso"
        value={peso}
        onChangeText={setPeso}
        keyboardType="numeric"
        style={styles.input2}
      />

      <TouchableOpacity style={styles.btn} onPress={Calcular}>
        <Text style={styles.textbtn}>Calcular IMC</Text>
      </TouchableOpacity>
      <Text style={styles.textResultado}>{resultado}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  input: {
    top: -40,
    width: 270,
    height: 50,
    paddingHorizontal: 11,
    borderRadius: 3,
    borderWidth: 1,
    borderColor: "#8A8A8A",
    backgroundColor: "#000",
  },
  input2: {
    width: 270,
    height: 50,
    paddingHorizontal: 11,
    borderRadius: 3,
    borderWidth: 1,
    borderColor: "#8A8A8A",
    backgroundColor: "#000",
  },
  btn: {
    top: 40,
    width: 120,
    height: 50,
    borderRadius: 3,
    borderWidth: 1,
    borderColor: "#8A8A8A",
    backgroundColor: "red",
    justifyContent: "center",
    alignItems: "center",
  },
  textbtn: {
    fontFamily: "Roboto",
    fontSize: 17,
    fontWeight: "700",
  },
  textResultado: {
    top: 80,
    fontFamily: "Roboto",
    fontSize: 25,
    fontWeight: "700",
  },
});
