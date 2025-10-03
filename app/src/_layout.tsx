import { Tabs } from "expo-router";
import { MaterialIcons } from "@expo/vector-icons";

export default function Layout() {
  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarLabelPosition: "below-icon",
        tabBarActiveTintColor: "#00BFFF",
        tabBarInactiveTintColor: "#fff",
        tabBarStyle: {
          backgroundColor: "#1D1D1D",
          height: 70,
          paddingBottom: 10,
        },
        tabBarIconStyle: {
          marginTop: 5,
        },
        tabBarLabelStyle: {
          fontSize: 14,
          fontWeight: "bold",
        },
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          tabBarLabel: "Home",
          tabBarIcon: ({ color, size }) => (
            <MaterialIcons name="home" size={size} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="sign-up"
        options={{
          tabBarLabel: "Saiba Mais",
          tabBarIcon: ({ color, size }) => (
            <MaterialIcons name="info" size={size} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="precos"
        options={{
          tabBarLabel: "Planos",
          tabBarIcon: ({ color, size }) => (
            <MaterialIcons name="attach-money" size={size} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="criarConta"
        options={{
          tabBarLabel: "Criar Conta",
          tabBarIcon: ({ color, size }) => (
            <MaterialIcons name="person-add" size={size} color={color} />
          ),
        }}
      />
    </Tabs>
  );
}
