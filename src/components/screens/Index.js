import { View, Text, Button ,ScrollView} from 'react-native'
import React from 'react'
import Card from './Card';
import Calendar from './Calendar';

const Index = ({navigation}) => {
  // const cardData = [
  //   { title: 'Card 1' },
  //   { title: 'Card 2' },
  //   { title: 'Card 3' },
  //   { title: 'Card 4' },
  //   { title: 'Card 5' },
  //   { title: 'Card 6' },
  // ];

  // return (
  //   <ScrollView >
  //     <View >
  //       {cardData.slice(0, 3).map((card, index) => (
  //         <Card key={index} title={card.title} />
  //       ))}
  //     </View>
  //     <View >
  //       {cardData.slice(3, 6).map((card, index) => (
  //         <Card key={index} title={card.title} />
  //       ))}
  //     </View>
  //   </ScrollView>
  // );
  return (
    <View>
     <Button title='Calendar' onPress={() =>
        navigation.navigate('Calendar')} ></Button>
     <Button title='PushNotification' ></Button>
      <Button title='RealTimeDataBase' ></Button>
     <Button title='OfflineLocalStorage' onPress={() =>
        navigation.navigate('OfflineImageUpload')}></Button>
     <Button title='Super' ></Button>
     <Button title='InfiniteScrolling' ></Button>
     <Button title='SuperMaxWithDeeplinking' ></Button>
    
    </View>
  )
}

export default Index