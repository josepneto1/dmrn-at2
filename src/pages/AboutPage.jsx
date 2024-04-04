import React from "react";
import { ScrollView, StyleSheet, Text, View } from "react-native";

export default function AboutPage({ navigation }) {
    return (
        <ScrollView contentContainerStyle={styles.container}>
            <View style={styles.section}>
                <Text style={styles.sectionTitle}>Nossa Empresa</Text>
                <Text style={styles.sectionContent}>
                    A Nossa Empresa é uma startup inovadora especializada no desenvolvimento de soluções de software para empresas de todos os tamanhos. Fundada em 2018, estamos comprometidos em fornecer produtos de alta qualidade e serviços excepcionais para nossos clientes em todo o mundo.
                </Text>
            </View>

            <View style={styles.section}>
                <Text style={styles.sectionTitle}>Nossa Diretoria</Text>
                <Text style={styles.sectionContent}>
                    A nossa diretoria é composta por profissionais experientes e altamente qualificados no campo da tecnologia da informação. Eles lideram nossa equipe com paixão e visão, orientando-nos na busca pela excelência e pela inovação constante.
                </Text>
            </View>

            <View style={styles.section}>
                <Text style={styles.sectionTitle}>Nossos Colaboradores</Text>
                <Text style={styles.sectionContent}>
                    Nossos colaboradores são o coração e a alma da nossa empresa. Com suas habilidades diversificadas e sua dedicação inabalável, eles trabalham incansavelmente para superar os desafios e alcançar os objetivos, garantindo o sucesso contínuo de nossos projetos e iniciativas.
                </Text>
            </View>

            <View style={styles.section}>
                <Text style={styles.sectionTitle}>Contatos</Text>
                <View style={styles.contactInfo}>
                    <Text style={styles.contactLabel}>Telefone:</Text>
                    <Text style={styles.contactValue}>+55 21 99999-9999</Text>
                </View>
                <View style={styles.contactInfo}>
                    <Text style={styles.contactLabel}>Email:</Text>
                    <Text style={styles.contactValue}>contato@nossaempresa.com</Text>
                </View>
            </View>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        backgroundColor: '#001f3f',
    },
    section: {
        marginBottom: 20,
        backgroundColor: 'white',
        borderRadius: 20,
        padding: 20,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
    },
    sectionTitle: {
        fontSize: 24,
        fontWeight: "bold",
        marginBottom: 10,
        color: '#0074d9',
    },
    sectionContent: {
        fontSize: 16,
    },
    contactInfo: {
        flexDirection: 'row',
        marginBottom: 5,
    },
    contactLabel: {
        fontWeight: 'bold',
        marginRight: 5,
    },
    contactValue: {
        flex: 1,
    },
});
