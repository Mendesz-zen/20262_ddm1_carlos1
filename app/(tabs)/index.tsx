import { Image } from 'expo-image';
import { Platform, StyleSheet } from 'react-native';
import ParallaxScrollView from '@/components/parallax-scroll-view';
import { ThemedText } from '@/components/themed-text';
import { ThemedView } from '@/components/themed-view';
import { Link } from 'expo-router';

export default function HomeScreen() {
  return (
    <ParallaxScrollView
      headerBackgroundColor={{ light: '#1a0000', dark: '#0a0000' }}
      headerImage={
        <Image
          source={require('@/assets/images/eclipse.jpg')}
          style={styles.Berserk}
        />
      }>
      <ThemedView style={styles.titleContainer}>
        <ThemedText type="title" style={styles.bloodTitle}>O Eclipse</ThemedText>

      </ThemedView>

      <ThemedView style={styles.stepContainer}>
        <ThemedText type="subtitle" style={styles.subtitleBlood}>
          O Behelit Escarlate
        </ThemedText>
        <ThemedText style={styles.bodyText}>
          Griffith invoca o Ovo do Rei Conquistador durante o eclipse solar total. 
          O Bando do Falcão é marcado, oferecido como tributo e entregue aos Apóstolos em um banquete de sangue.
        </ThemedText>
        <ThemedText style={styles.hintText}>
          Abra o terminal e pressione{' '}
          <ThemedText type="defaultSemiBold" style={styles.highlight}>
            {Platform.select({
              ios: 'cmd + d',
              android: 'cmd + m',
              web: 'F12',
            })}
          </ThemedText>{' '}
          para encarar o abismo.
        </ThemedText>
      </ThemedView>

      <ThemedView style={styles.stepContainer}>
        <Link href="/modal" style={styles.linkWrapper}>
          <ThemedText type="subtitle" style={styles.subtitleBlood}>
            A Marca do Sacrifício
          </ThemedText>
          <ThemedText style={styles.bodyText}>
            Sobreviventes carregam o selo maldito na carne. A marca atrai entidades das trevas incessantemente, fazendo de cada noite uma luta pela sobrevivência.
          </ThemedText>
        </Link>

        <ThemedText style={styles.exploreText}>
          Toque na marca para aprofundar-se nos horrores do Arco do Sacrifício.
        </ThemedText>
      </ThemedView>
    </ParallaxScrollView>
  );
}

const styles = StyleSheet.create({
  titleContainer: {
    flexDirection: 'column',
    alignItems: 'center',
    gap: 9,
    paddingVertical: 10,
  },
  stepContainer: {
    gap: 12,
    marginBottom: 16,
    paddingHorizontal: 16,
  },
  Berserk: {
    height: 750,
    width: '100%',
    bottom: 0,
    left: 0,
    position: 'absolute',
    resizeMode: 'cover',
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