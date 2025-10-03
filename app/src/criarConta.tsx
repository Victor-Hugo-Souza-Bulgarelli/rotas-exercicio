import { router } from "expo-router";
import React, { useState } from "react";
import {
  Alert,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";

export default function SignUp() {
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [confirmarSenha, setConfirmarSenha] = useState("");

  function Cadastro() {
    if (!nome || !senha || !confirmarSenha) {
      Alert.alert("Erro", "Preencha todos os campos!");
      return;
    }
    if (senha !== confirmarSenha) {
      Alert.alert("Erro", "As senhas não coincidem!");
      return;
    }

    // ✅ Envia o nome como parâmetro para a tela de preços
    router.push({
      pathname: "/src/precos",
      params: { name: nome },
    });
  }

  function back() {
    if (!router.canGoBack()) {
      return Alert.alert("Não é possível voltar");
    }
    router.back();
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Criar Conta</Text>

      <TextInput
        style={styles.input}
        placeholder="Nome"
        placeholderTextColor="#888"
        value={nome}
        onChangeText={setNome}
      />
      <TextInput
        style={styles.input}
        placeholder="E-mail"
        placeholderTextColor="#888"
        value={email}
        onChangeText={setEmail}
        keyboardType="email-address"
      />
      <TextInput
        style={styles.input}
        placeholder="Senha"
        placeholderTextColor="#888"
        secureTextEntry
        value={senha}
        onChangeText={setSenha}
      />
      <TextInput
        style={styles.input}
        placeholder="Confirmar Senha"
        placeholderTextColor="#888"
        secureTextEntry
        value={confirmarSenha}
        onChangeText={setConfirmarSenha}
      />

      <TouchableOpacity style={styles.button} onPress={Cadastro}>
        <Text style={styles.buttonText}>Cadastrar</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={back}>
        <Text style={styles.back}>Voltar</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    gap: 20,
    padding: 20,
    backgroundColor: "#1D1D1D",
  },
  title: { fontSize: 24, fontWeight: "bold", color: "#FFD700" },
  back: { fontSize: 16, color: "#fff" },
  input: {
    width: "70%",
    height: 50,
    backgroundColor: "#2A2A2A",
    borderRadius: 8,
    paddingHorizontal: 15,
    fontSize: 16,
    color: "#fff",
    marginBottom: 10,
    borderWidth: 1,
    borderColor: "#444",
  },
  button: {
    width: "70%",
    height: 50,
    backgroundColor: "#3426FC",
    borderRadius: 8,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 10,
  },
  buttonText: { fontSize: 18, fontWeight: "bold", color: "#fff" },
});
