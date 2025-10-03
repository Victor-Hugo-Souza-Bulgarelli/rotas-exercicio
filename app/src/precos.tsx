import { router, useLocalSearchParams } from "expo-router";
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  ScrollView,
} from "react-native";

export default function Precos() {
  const { name } = useLocalSearchParams();

  function Back() {
    router.back(); // volta para a tela anterior (cadastro)
  }

  const planos = [
    {
      nome: "Essencial",
      preco: "R$ 49,90/mês",
      beneficios: [
        "Monitoramento básico de saúde",
        "Alertas simples de hábitos saudáveis",
        "Acesso em 1 dispositivo",
        "Relatórios mensais",
      ],
    },
    {
      nome: "Profissional",
      preco: "R$ 149,90/mês",
      beneficios: [
        "Tudo do Essencial",
        "Até 4 usuários (família)",
        "Integração com wearables",
        "Relatórios semanais detalhados",
        "Recomendações personalizadas",
      ],
    },
    {
      nome: "Clínico",
      preco: "R$ 499,90/mês",
      beneficios: [
        "Tudo do Profissional",
        "Gestão de consultórios e clínicas",
        "Relatórios em tempo real",
        "Integração com sistemas hospitalares",
        "Suporte prioritário",
      ],
    },
    {
      nome: "Corporativo",
      preco: "R$ 1.999,90/mês",
      beneficios: [
        "Tudo do Clínico",
        "Escalabilidade para hospitais",
        "Análise preditiva de doenças",
        "Dashboards em tempo real",
        "Suporte 24/7 dedicado",
      ],
    },
  ];

  return (
    <View style={styles.container}>
      <Text style={styles.parametro}>Olá, {name} 👋</Text>
      <Text style={styles.title}>Estes são nossos planos:</Text>

      <ScrollView contentContainerStyle={styles.scroll}>
        {planos.map((plano, index) => (
          <View key={index} style={styles.card}>
            <Text style={styles.planTitle}>{plano.nome}</Text>
            <Text style={styles.planPrice}>{plano.preco}</Text>
            {plano.beneficios.map((b, i) => (
              <Text key={i} style={styles.benefit}>
                • {b}
              </Text>
            ))}
          </View>
        ))}
      </ScrollView>

      <TouchableOpacity onPress={Back} style={styles.backButton}>
        <Text style={styles.backText}>Voltar</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#1D1D1D", padding: 20 },
  scroll: { paddingVertical: 20, alignItems: "center", gap: 20 },
  title: {
    fontSize: 26,
    fontWeight: "bold",
    color: "#fff",
    textAlign: "center",
    marginVertical: 10,
  },
  parametro: {
    fontSize: 22,
    color: "#00BFFF",
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 10,
  },
  card: {
    backgroundColor: "#2A2A2A",
    borderRadius: 12,
    padding: 20,
    width: "90%",
    shadowColor: "#000",
    shadowOpacity: 0.3,
    shadowRadius: 5,
    elevation: 5,
  },
  planTitle: {
    fontSize: 22,
    fontWeight: "bold",
    color: "#fff",
    marginBottom: 5,
  },
  planPrice: {
    fontSize: 18,
    fontWeight: "600",
    color: "#FFD700",
    marginBottom: 10,
  },
  benefit: { fontSize: 16, color: "#ccc", marginBottom: 4 },
  backButton: {
    marginTop: 15,
    padding: 12,
    alignItems: "center",
    backgroundColor: "#444",
    borderRadius: 8,
  },
  backText: { color: "#fff", fontSize: 18, fontWeight: "bold" },
});
