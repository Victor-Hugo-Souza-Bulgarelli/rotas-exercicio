import { router } from "expo-router";
import { View, StyleSheet, TouchableOpacity, Text, Image } from "react-native";

export default function Index() {
  function saibaMais() {
    router.navigate("/src/saibaMais");
  }
  function criarConta() {
    router.navigate("/src/criarConta");
  }

  return (
    <View style={styles.container}>
      <Image
        source={require("@/assets/images/Image.png")}
        style={styles.logo}
        resizeMode="contain"
      />

      <TouchableOpacity
        style={styles.button}
        activeOpacity={0.7}
        onPress={saibaMais}
      >
        <Text style={styles.buttonText}>Saiba Mais</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.button}
        activeOpacity={0.7}
        onPress={criarConta}
      >
        <Text style={styles.buttonText}>Criar Conta</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#1D1D1D",
    gap: 30,
    padding: 20,
  },
  logo: {
    width: 250,
    height: 250,
    marginBottom: 20,
  },
  button: {
    backgroundColor: "#3426FC",
    paddingVertical: 12,
    paddingHorizontal: 40,
    borderRadius: 12,
    shadowColor: "#000",
    shadowOpacity: 0.3,
    shadowRadius: 5,
    elevation: 5,
  },
  buttonText: {
    color: "#fff",
    fontSize: 20,
    fontWeight: "bold",
    textAlign: "center",
  },
});
