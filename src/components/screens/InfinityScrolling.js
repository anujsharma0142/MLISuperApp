import { View, Text, FlatList, ActivityIndicator,ScrollView } from 'react-native'
import React, { useEffect, useState } from 'react'
import Card from './Card'

//https://randomuser.me/api/?page=3&results=10
const InfiniteScrolling = () => {
  const[user,setUser] = useState([]);
  const [page, setPage] = useState(1);
 

  const getUsers = async () => {
    const res = await fetch(
      `https://jsonplaceholder.typicode.com/posts?_limit=9&_page=${page}`
    );
    const data = await res.json();
    
    setUser((prev)=>[...prev,...data])     //(prev) => [...prev, ...data]);
   
    // console.log( "data" ,user);
  };

  useEffect(() => {
    getUsers();
  }, [page]);

  const renderLoader = () => {
    return (
      <View>
        <ActivityIndicator size={'large'} color={'#aaa'} />
     </View>
    )
  }

  const loadMoreItem = () => {
    // console.log('loadMoreItm');
    setPage(page+1);
  }
  

  const renderItem = ({item}) =>{
   
      return(
        // <View>
        // <Text>
        //   `${item.id}`
        // </Text>
       
        // </View>

       
        <Card
          title="Sample Card"
          imageSource="https://imagesvibe.com/wp-content/uploads/2023/03/Cute-Panda-Images12.jpg"
          description="This is a sample card component in React Native."
          onPress={() => {
            // Handle card press event here
          }}
        />
    
        
      )
  }
  return (
    <FlatList 
    data={user} 
    renderItem={renderItem}
     keyExtractor={item=>item.id}
     ListFooterComponent={renderLoader}
     onEndReached={loadMoreItem}
    >

    </FlatList>

   
  )
}

export default InfiniteScrolling;