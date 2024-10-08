import { useState } from 'react'
import { StyleSheet, View } from 'react-native';
import { StatusBar } from 'expo-status-bar'
import { useRouter } from 'expo-router';
import { Input } from './src/components/Input';
import { Divider } from './src/components/Divider';
import { Link } from './src/components/Link';
import { Typography } from './src/components/Typography';
import { Button } from './src/components/Button';

export default function Login() {
    const [email, setEmail] = useState("")
    const [senha, setSenha] = useState("")
    const [logged, setLogged] = useState(false); // Altere para false por padrão
    const router = useRouter();
  
    function entrar() {
      if (email && senha) {
        setLogged(true);
        router.push('/gerenciador'); // Navegar para a tela de gerenciador
      } else {
        console.log("Por favor, preencha todos os campos.");
      }
    }

    return (
        <View style={styles.container}>
            <StatusBar style='light' />
            <Typography variant="title">
                Bem-vindo!
            </Typography>
            <View style={styles.form}>
                <Typography variant="subtitle">
                    Entre na sua conta para acessar nossa Plataforma.
                </Typography>
                <Input
                    placeholder="E-mail"
                    keyboardType="email-address"
                    value={email}
                    onChangeText={(text) => setEmail(text)}
                />
                <Input
                    placeholder='Senha'
                    secureTextEntry
                    value={senha}
                    onChangeText={(text) => setSenha(text)}
                />
                <Button
                    text="Entrar"
                    onPress={entrar}
                />
                <Divider text="Ou" />
                <Link text="Criar conta" />
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "space-evenly",
        backgroundColor: "#000",
        paddingHorizontal: 10
    },
    form: {
        width: '100%',
        alignItems: 'center',
        gap: 15,
    },
});
