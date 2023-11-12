import React from 'react';
import { ScrollView, View, Text, TouchableOpacity, Image, StyleSheet, Dimensions, Platform } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { ArrowLeftIcon } from 'react-native-heroicons/outline';
import { themeColors } from '../theme';

const { width, height } = Dimensions.get('window');
const ios = Platform.OS === 'ios';

export default function ProfileScreen() {
  const navigation = useNavigation();
  const [showFriendsList, setShowFriendsList] = React.useState(false);

  const friendsList = [
    { id: 1, name: 'Amanda', profilePicture: require('../assets/images/amanda.png') },

];

  const categories = [
    { id: 1, title: 'Diabetic' },
    { id: 2, title: 'Vegetarian' },
    { id: 3, title: 'Lactose-Intolerant' },
  ];

  const categories1 = [
    { id: 1, title: 'Sweet-tooth' },
    { id: 2, title: 'Spice-lover' },
    { id: 3, title: 'Health-conscious' },
    { id: 4, title: 'Indian Food' },
    { id: 5, title: 'Hates Broccoli' },
  ];

  const user = {
    name: 'Lyon',
    email: 'lyon@food.com',
  };

  const shadowStyle = ios
    ? {
        shadowColor: 'black',
        shadowRadius: 10,
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.3,
      }
    : {
        elevation: 10,
      };

  return (
    <View style={{ flex: 1, alignItems: 'center', backgroundColor: 'white' }}>
      <SafeAreaView style={{ alignItems: 'center', width: '100%' }}>
        <View style={{ alignSelf: 'flex-start', width: '100%', padding: 15 }}>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <ArrowLeftIcon size={32} strokeWidth={2} color="#520f1a" />
          </TouchableOpacity>
        </View>

        <Image 
          source={require('../assets/images/background.jpg')} 
          style={{ height: height * 0.25 }} 
          className="w-full absolute -top-5 opacity-50"
        />

        <View style={styles.cardContainer}>
          <View style={[styles.profileImage, shadowStyle]}>
            <Image
              source={require('../assets/images/lyon.png')}
              style={{ width: '100%', height: '100%' }}
            />
          </View>

          <Text style={styles.name}>{user.name}</Text>
          <Text style={styles.email}>{user.email}</Text>

          <Text>{'\n'}</Text>

          <Text style={styles.label}>Dietary Restrictions</Text>
          <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={styles.scrollContainer}
          >
            {categories.map((item) => (
              <TouchableOpacity
                key={item.id}
                style={[styles.restrictionsButton, styles.activeButton]}
              >
                <Text style={styles.activeText}>{item.title}</Text>
              </TouchableOpacity>
            ))}
          </ScrollView>

          <Text>{'\n'}</Text>

          <Text style={styles.label}>Preferences</Text>
          <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={styles.scrollContainer}
          >
            {categories1.map((item) => (
              <TouchableOpacity
                key={item.id}
                style={[styles.preferenceButton, styles.activeButton]}
              >
                <Text style={styles.activeText}>{item.title}</Text>
              </TouchableOpacity>
            ))}
          </ScrollView>

          <Text>{'\n'}</Text>

          <TouchableOpacity
  onPress={() => setShowFriendsList(!showFriendsList)}
  style={styles.friendsButton}
>
  <Text style={styles.friendsButtonText}>Your Friends</Text>
</TouchableOpacity>

{showFriendsList && (
  <ScrollView style={{ maxHeight: 200, width: '100%' }}>
    {friendsList.map((friend) => (
      <View key={friend.id} style={{ flexDirection: 'row', alignItems: 'center', marginBottom: 10 }}>
        <Image 
          source={friend.profilePicture}
          style={{ width: 50, height: 50, borderRadius: 25, marginRight: 10 }}
        />
        <Text style={{ fontSize: 16, fontWeight: 'bold', color: "#FFFFFF"}}>{friend.name}</Text>
      </View>
    ))}
  </ScrollView>
)}

          
        </View>
      </SafeAreaView>
    </View>
  );
}

const styles = StyleSheet.create({


    cardContainer: {
        backgroundColor: '#520f1a',
        padding: 30,
        borderRadius: 40,
        marginTop: 20,
        width: '90%',
        alignItems: 'center',
      },
      profileImage: {
        width: 125,
        height: 125,
        borderRadius: 62.5,
        borderWidth: 6,
        borderColor: '#FFFFFF',
        overflow: 'hidden',
        marginBottom: 20,
      },
      name: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#FFFFFF',
        marginBottom: 10,
      },
      email: {
        fontSize: 18,
        fontWeight: '600',
        color: '#FFFFFF',
      },
      label: {
        fontSize: 24,
        fontWeight: 'bold',
        color: 'white',
        alignSelf: 'flex-start',
        marginLeft: 8,
        marginBottom: 2,
      },
      scrollContainer: {
        paddingHorizontal: 8,
        paddingVertical: 4,
      },
      preferenceButton: {
        padding: 8,
        marginRight: 8,
        borderRadius: 20,
      },
      restrictionsButton: {
        padding: 8,
        marginRight: 8,
        borderRadius: 20,
      },
      activeButton: {
        backgroundColor: themeColors.bgLight,
      },
      activeText: {
        fontWeight: 'bold',
        color: 'white',
      },
      pickerContainer: {
        borderWidth: 1,
        borderColor: 'grey',
        borderRadius: 10,
        overflow: 'hidden',
        marginVertical: 10,
      },
      friendsButton: {
        padding: 10,
        backgroundColor: '#520f1a',
        borderRadius: 20,
        marginTop: 10,
      },
      friendsButtonText: {
        color: 'white',
        textAlign: 'center',
        fontWeight: 'bold',
      },
      friendsListCard: {
        backgroundColor: 'white',
        padding: 15,
        borderRadius: 10,
        marginTop: 10,
        width: '100%',
      },
      friendItem: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 10,
      },
      friendImage: {
        width: 50,
        height: 50,
        borderRadius: 25,
        marginRight: 10,
      },
      friendName: {
        fontSize: 16,
        fontWeight: 'bold',
      },
      friendsListScroll: {
        maxHeight: 200, // Adjust this value as needed
        width: '100%',
  },
});

