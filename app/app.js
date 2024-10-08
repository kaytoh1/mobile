import { Stack } from "expo-router";

export default function RootLayout() {
  return (
    <Stack>
      <Stack.Screen name="Login" options={{ headerShown: false }} />
      <Stack.Screen name="Task" options={{ headerShown: false }} />
      {/* Adicione mais telas aqui se necessário */}
    </Stack>
  );
}
