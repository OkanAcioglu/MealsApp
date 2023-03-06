import { Text, View, StyleSheet } from 'react-native'

const MealDetailScreen = ({ route, navigation }) => {
  const mealId = route.params.mealId
  return <Text>Meal Detail {mealId}</Text>
}

export default MealDetailScreen
