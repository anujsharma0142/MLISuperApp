import {
  FlatList,
  Image,
  Linking,
  Pressable,
  Text,
  View,
  Button,
} from 'react-native';
import React, {useState} from 'react';
import styles from './SuperMax.style';
import Header from '../../Header/Header';
import {SafeAreaView} from 'react-native-safe-area-context';
import {useNavigation} from '@react-navigation/native';
import I18n from '../../../../i18n';

const SuperMax = ({route}) => {
  const DATA = [
    {
      id: 1,
      title: `${I18n.t('mPro')}`,
      // image: require('../../../../assets/mpro1.png'),
      webviewUrl: 'https://staging.lms.getvymo.com/#/login',
    },
    {
      id: 2,
      title: `${I18n.t('mPower')}`,
      // image: require('../../../../assets/mpower.png'),
      webviewUrl: 'https://www.mpowerfinancing.com/',
    },
    {
      id: 3,
      title: `${I18n.t('mQuote')}`,
      // image: require('../../../../assets/mquote.png'),
      webviewUrl:
        'https://www.maxlifeinsurance.com/term-insurance-plans/premium-calculator?utmCode=1311271&utm_theme=Brand&utm_source=google&utm_medium=cpc&utm_campaign=1_RLSA_BRAND_CS&utm_term=max%20life%20online&gclid=Cj0KCQjw5f2lBhCkARIsAHeTvlhKaAi_edEgBAGA_LfBgGAsyjR83PggzozQ6kSOTFlmbVxhh3wCYlQaAi0eEALw_wcB',
    },

    {
      id: 4,
      title: `${I18n.t('maxlifeLite')}`,
      // image: require('../../../../assets/maxlife_lite1.png'),
      webviewUrl: '',
    },
  ];

  const navigation = useNavigation();
  const [isToggled, setIsToggled] = useState(false);
  const [currentLanguage, setCurrentLanguage] = useState('en');

  const changeLanguage = language => {
    I18n.locale = language;
    setCurrentLanguage(language);
    setIsToggled(language === 'hi');
  };

  const toggleSwitch = () => {
    setIsToggled(previousState => !previousState);
    if (isToggled) {
      changeLanguage('en');
    } else {
      changeLanguage('hi');
    }
  };

  // 'mychat://www.example.com/ionicdemo/Hi This is demo for the Ionic application, for the deeplinkinking via max application';

  const renderItem = ({item}) => {
    const handlePress = async () => {
      if (item.webviewUrl) {
        navigation.navigate('WebViewScreen', {
          title: item.title,
          url: item.webviewUrl,
        });
      } else if (item.title === 'MLO') {
        const appPackageName = 'app://mysupermax/Login';

        console.log('app open', appPackageName);

        await Linking.openURL(appPackageName)
          .then(async supported => {
            if (supported) {
              console.log('appInstalled', supported);
              await Linking.openURL(appPackageName);
            }
          })
          .catch(err => {
            // console.error('An error occurred ', err));
            console.log(
              'App is not installed. Redirecting to the Play Store...',
            );
            const storePackageName =
              'https://play.google.com/store/apps/details?id=com.maxlifeinsurance.www.twa';
            Linking.openURL(storePackageName);
          });
      }
    };

    return (
      <View style={styles.imageContainer}>
        <Pressable onPress={handlePress}>
          <Image
            source={item.image}
            style={styles.imageLogo}
            resizeMode="cover"
          />
        </Pressable>
        <Text style={styles.imageText}>{item.title}</Text>
      </View>
    );
  };

  const groupDataIntoPairs = data => {
    const pairs = [];
    for (let i = 0; i < data.length; i += 2) {
      pairs.push(data.slice(i, i + 2));
    }
    return pairs;
  };

  return (
    <SafeAreaView style={{backgroundColor: '#f2f2f2', flex: 1}}>
      {/* Header View SuperMAX App */}
      <Header isToggled={isToggled} toggleSwitch={toggleSwitch} />

      <View style={styles.textContainer}>
        <Text style={styles.innerTextContainer}>
          {I18n.t('welcomeMessage')}
        </Text>
      </View>

      <FlatList
        data={groupDataIntoPairs(DATA)}
        renderItem={({item}) => (
          <View
            style={{
              marginTop: 70,
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <View style={styles.rowContainer}>
              {item.map(item => renderItem({item}))}
            </View>
          </View>
        )}
        keyExtractor={(item, index) => item.id}
      />
    </SafeAreaView>
  );
};

export default SuperMax;
