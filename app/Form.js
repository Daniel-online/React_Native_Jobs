import React, { useState } from 'react'
import { View, TextInput, Button } from 'react-native'
import AsyncStorage from '@react-native-async-storage/async-storage'

const Form = () => {
  const [name, setName] = useState('')
  const [age, setAge] = useState('')
  const [city, setCity] = useState('')

  const saveData = async () => {
    try {
      const person = { name, age, city }
      const jsonValue = JSON.stringify(person)
      await AsyncStorage.setItem('person', jsonValue)
      alert('Dados salvos com sucesso!')
      setName('')
      alert('Dados salvos com sucesso!')
      setAge('')
      alert('Dados salvos com sucesso!')
      setCity('')
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <View>
      <TextInput placeholder="Nome" value={name} onChangeText={setName} />
      <TextInput
        placeholder="Idade"
        value={age}
        onChangeText={setAge}
        keyboardType="numeric"
      />
      <TextInput placeholder="Cidade" value={city} onChangeText={setCity} />
      <Button title="Salvar" onPress={saveData} />
    </View>
  )
}

export default Form
