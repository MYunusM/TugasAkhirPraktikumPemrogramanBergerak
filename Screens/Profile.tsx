import { StyleSheet, View, Image, Text } from 'react-native';
import { Card } from 'react-native-paper';

const App = () => {
  return (
    <View style={styles.container}>
      <Card style={styles.card}>
        <View style={styles.profileSection}>
          <Image
            source={{ uri: 'https://png.pngtree.com/png-vector/20191009/ourmid/pngtree-user-icon-png-image_1796659.jpg' }}
            style={styles.profileImage}
          />
          <Text style={styles.name}>User Default</Text>
        </View>
      </Card>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f5f5f5',
  },
  card: {
    width: '90%',
    height: '95%',
    padding: 20,
    borderRadius: 10,
  },
  profileSection: {
    alignItems: 'center',
  },
  profileImage: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginBottom: 20,
  },
  name: {
    fontSize: 26,
    fontWeight: 'bold',
    marginBottom: 5,
  },
});

export default App;
