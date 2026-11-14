import React from 'react';
import { StyleSheet, Text, View} from 'react-native';

function BookCard (props){
const newPrice=  props.price-(props.price * props.discount/100);
return(
  <View style={styles.card}>
    <Text style={styles.bookTitle}>{props.title}</Text>
    <Text style={styles.author}>Author: {props.author}</Text>
    <Text style={styles.price}>Original Price : {props.price}</Text>
    <Text style={styles.newPrice}>Discount Price : {newPrice.toFixed(2)}</Text>
    <Text style={styles.status}>{props.isAvilabile ? 'Avilabile' : 'Not Avilabile'}</Text>
  </View>
)}
export default function App() {
  return(
    <View>
    <Text style={styles.heading}>My Library</Text> 
    <BookCard
      title="Clean Code"
      author="Robert Martin"
      price={40}
      discount={10}
      isAvailable={true}
    />
    <BookCard
      title="JavaScript Basics"
      author="Sara Ali"
      price={25}
      discount={20}
      isAvailable={false}
    />
    <BookCard
      title="Learning React Native"
      author="Ahmad Saeed"
      price={30}
      discount={0}
      isAvailable={true}
    />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#a4d6f4',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  heading : {
    textAlign: 'center',
    fontSize: 30,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#333333',
    marginTop: 40,
  },
  card: {
    width: '100%',
    backgroundColor: '#FFFFFF',
    borderWidth: 1,
    borderColor: '#999999',
    borderRadius: 12,
    padding: 15,
    margin: 8,
  },
  bookTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 8,
    color: '#333333',
  },
  author: {
    fontSize: 16,
    marginBottom: 8,
  },
  price: {
    fontSize: 15,
    color: '#777777',
  },
  newPrice: {
    fontSize: 17,
    fontWeight: 'bold',
    color: '#008000',
    marginTop: 5,
  },
  status: {
    fontSize: 16,
    fontWeight: 'bold',
    marginTop: 8,
    color: '#333333',
  },
});
