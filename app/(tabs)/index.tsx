import { Image } from 'expo-image';
import { Link } from 'expo-router';
import { Platform, ScrollView, StyleSheet, View } from 'react-native';

import { ThemedText } from '@/components/themed-text';
import { ThemedView } from '@/components/themed-view';

export default function HomeScreen() {
  return (
    <ScrollView style={styles.container}>
      {/* CABEÇALHO */}
      <View style={styles.headerContainer}>
        <Image
          source={require('@/assets/images/eclipse.jpg')}
          style={styles.Berserk}
          contentFit="cover"
        />

        <View style={styles.headerOverlay} />

        <ThemedText style={styles.headerText}>
          ECLIPSE
        </ThemedText>
      </View>

      {/* TÍTULO */}
      <ThemedView style={styles.titleContainer}>
        <ThemedText type="title" style={styles.bloodTitle}>
          O Eclipse
        </ThemedText>

      </ThemedView>

      {/* BEHELIT */}
      <ThemedView style={styles.stepContainer}>
        <ThemedText type="subtitle" style={styles.subtitleBlood}>
          O Behelit Escarlate
        </ThemedText>

        <ThemedText style={styles.bodyText}>
          Griffith invoca o Ovo do Rei Conquistador durante o eclipse solar
          total. O Bando do Falcão é marcado, oferecido como tributo e
          entregue aos Apóstolos em um banquete de sangue.
        </ThemedText>

        <ThemedText style={styles.hintText}>
          Abra o terminal e pressione{' '}
          <ThemedText type="defaultSemiBold" style={styles.highlight}>
            {Platform.select({
              ios: 'cmd + d',
              android: 'cmd + m',
              web: 'F12',
              default: 'F12',
            })}
          </ThemedText>{' '}
          para encarar o abismo.
        </ThemedText>
      </ThemedView>

      {/* MARCA DO SACRIFÍCIO */}
      <ThemedView style={styles.stepContainer}>
        <Link href="/modal" style={styles.linkWrapper}>
          <ThemedText type="subtitle" style={styles.subtitleBlood}>
            A Marca do Sacrifício
          </ThemedText>

          <ThemedText style={styles.bodyText}>
            Sobreviventes carregam o selo maldito na carne. A marca atrai
            entidades das trevas incessantemente, fazendo de cada noite uma
            luta pela sobrevivência.
          </ThemedText>
        </Link>

        <ThemedText style={styles.exploreText}>
          Toque na marca para aprofundar-se nos horrores do Arco do
          Sacrifício.
        </ThemedText>
      </ThemedView>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0a0000',
  },

  headerContainer: {
    width: '100%',
    height: 300,
    position: 'relative',
    overflow: 'hidden',
  },

  Berserk: {
    width: '100%',
    height: '100%',
    position: 'absolute',
  },

  headerOverlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: 'rgba(0, 0, 0, 0.35)',
  },

  headerText: {
    position: 'absolute',
    bottom: 20,
    left: 20,
    color: '#ff3333',
    fontSize: 16,
    fontWeight: 'bold',
    letterSpacing: 4,
    textShadowColor: '#8b0000',
    textShadowOffset: { width: 0, height: 2 },
    textShadowRadius: 6,
  },

  titleContainer: {
    flexDirection: 'column',
    alignItems: 'center',
    gap: 9,
    paddingVertical: 20,
    paddingHorizontal: 16,
    backgroundColor: 'transparent',
  },

  stepContainer: {
    gap: 12,
    marginBottom: 16,
    paddingHorizontal: 16,
  },

  bloodTitle: {
    color: '#ff3333',
    fontWeight: 'bold',
    textAlign: 'center',
    textShadowColor: '#8b0000',
    textShadowOffset: { width: 0, height: 2 },
    textShadowRadius: 6,
  },

  subtitleBlood: {
    color: '#ff6666',
    fontWeight: '600',
  },

  bodyText: {
    color: '#d3d3d3',
    lineHeight: 22,
  },

  hintText: {
    color: '#8c8c8c',
    fontSize: 14,
  },

  highlight: {
    color: '#ff4d4d',
  },

  linkWrapper: {
    marginVertical: 4,
  },

  exploreText: {
    color: '#ff3333',
    fontStyle: 'italic',
    marginTop: 4,
  },
});
