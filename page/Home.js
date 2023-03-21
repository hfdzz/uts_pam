import { StatusBar } from 'expo-status-bar';
import { Button, Pressable, StyleSheet, Text, View } from 'react-native';


// TODO List
const todoList = {
  "lists": 
  [
      {
          "title": "The 100",
          "checkbox": [
              {
                  "text": "Season 1",
                  "value": "1"
              },
              {
                  "text": "Season 2",
                  "value": "2"
              },
              {
                  "text": "Season 3",
                  "value": "3"
              },
              {
                  "text": "Season 4",
                  "value": "4"
              },
              {
                  "text": "Season 5",
                  "value": "5"
              },
              {
                  "text": "Season 6",
                  "value": "6"
              }
          ]
      },
      {
          "title": "The Walking Dead",
          "checkbox": [
              {
                  "text": "Season 1",
                  "value": "1"
              },
              {
                  "text": "Season 2",
                  "value": "2"
              },
              {
                  "text": "Season 3",
                  "value": "3"
              },
              {
                  "text": "Season 4",
                  "value": "4"
              },
              {
                  "text": "Season 5",
                  "value": "5"
              },
              {
                  "text": "Season 6",
                  "value": "6"
              },
              {
                  "text": "Season 7",
                  "value": "7"
              },
              {
                  "text": "Season 8",
                  "value": "8"
              }
          ]
      },
      {
          "title": "Game of Thrones",
          "checkbox": [
              {
                  "text": "Season 1",
                  "value": "1"
              },
              {
                  "text": "Season 2",
                  "value": "2"
              },
              {
                  "text": "Season 3",
                  "value": "3"
              },
              {
                  "text": "Season 4",
                  "value": "4"
              },
              {
                  "text": "Season 5",
                  "value": "5"
              },
              {
                  "text": "Season 6",
                  "value": "6"
              },
              {
                  "text": "Season 7",
                  "value": "7"
              }
          ]
      },
      {
          "title": "The Flash",
          "checkbox": [
              {
                  "text": "Season 1",
                  "value": "1"
              },
              {
                  "text": "Season 2",
                  "value": "2"
              },
              {
                  "text": "Season 3",
                  "value": "3"
              },
              {
                  "text": "Season 4",
                  "value": "4"
              }
          ]
      },
      {
          "title": "Arrow",
          "checkbox": [
              {
                  "text": "Season 1",
                  "value": "1"
              },
              {
                  "text": "Season 2",
                  "value": "2"
              },
              {
                  "text": "Season 3",
                  "value": "3"
              }
          ]
      }
  ]
}

const createCard = (title, checkboxes, navigation) => {
  return (
    <Pressable 
      style={ styles.card }
      onPress={ () => navigation.navigate('Detail', [title, checkboxes] ) }
      >
      <Text>{title}</Text>
    </Pressable>
)
}

export default function Home({ navigation }) {
  return (
    <View> 
      <Button onPress={() => navigation.navigate('Profil')}
        title="Go to Profil"
      >
      </Button>

      {/* To-do list card */}
      <View style={styles.cardContainer}>
        <Pressable style={ styles.card } 
          onPress={ () => navigation.navigate('Detail', [0]) }
        >
          <Text>Title</Text>
        </Pressable>

      {
        todoList.lists.map((item, index) => {
          return createCard(item.title, item.checkbox, navigation, index)
        })
      }

      </View>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  cardContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 5,
  },
  card: {
    backgroundColor: '#fff',
    width: "100%",
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 6,
    },
    shadowOpacity: 0.37,
    shadowRadius: 7.49,
    elevation: 12,
    margin: 10,
    paddingVertical: 15,
    paddingHorizontal: 10,
  }
});
