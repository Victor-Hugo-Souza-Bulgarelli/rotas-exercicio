import { router } from "expo-router";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

export default function SignUp() {
  function goToPrices() {
    router.navigate("/src/precos");
  }

  function Back() {
    router.back();
  }

  return (
    <View style={styles.container}>
      <Text style={styles.logo}> B.O.L.S.O.N.A.R.O.</Text>

      <Text style={styles.subtitle}>
        Bio-Observadora e Lógica para Suporte Otimizado na Área de Recursos de
        Saúde.
      </Text>

      <TouchableOpacity style={styles.button} onPress={goToPrices}>
        <Text style={styles.buttonText}>Ver Preços</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.backButton} onPress={Back}>
        <Text style={styles.backText}>Voltar</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
    backgroundColor: "#1D1D1D", // fundo escuro
    gap: 20,
  },
  logo: {
    fontSize: 28,
    fontWeight: "bold",
    color: "#FFD700", // dourado para destaque
    textAlign: "center",
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 18,
    color: "#ccc",
    textAlign: "center",
    marginBottom: 20,
    lineHeight: 26,
  },
  button: {
    backgroundColor: "#3426FC",
    paddingVertical: 12,
    paddingHorizontal: 40,
    borderRadius: 10,
    shadowColor: "#000",
    shadowOpacity: 0.3,
    shadowRadius: 5,
    elevation: 5,
  },
  buttonText: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold",
  },
  backButton: {
    backgroundColor: "#444",
    paddingVertical: 10,
    paddingHorizontal: 30,
    borderRadius: 8,
  },
  backText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "600",
  },
});
