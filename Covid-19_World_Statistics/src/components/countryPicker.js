import React, { useState } from 'react';
import { View, Text, Icon, Input, Item, SafeAreaView, Modal, FlatList, StyleSheet, Image, TouchableOpacity, Button } from 'react-native';

export default function countryPicker(props) {
  const [shouldShow, setShouldShow] = useState(true);
  const updateSelectedList = (value) => {
  
    const selectedCountry = [...props.selectedCountry];
    const valueIndex = selectedCountry.indexOf(value);
    if (props.isSingle) {
      valueIndex !== -1 ? props.onTap([]) : props.onTap([value]);
    }
    else {
      valueIndex !== -1
        ? selectedCountry.splice(valueIndex, 1)
        : selectedCountry.splice(valueIndex, 1),
        selectedCountry.push(value);
      props.onTap(selectedCountry);
    }
  };

  const renderItemView = (item) => {
    return (
      <>
        {
          props.selectedCountry.includes(item.value) ? (
            <TouchableOpacity
              onPress={() => updateSelectedList(item.value)}
              style={styles.container}
            >
              <Text style={styles.selectedTextStyle}>{item.label}</Text>
              <Image
                source={require('../images/done.png')}
                style={{ height: 20, width: 20 }}
              />
            </TouchableOpacity>
          ) :
            (
              <TouchableOpacity
                onPress={() => updateSelectedList(item.value)}
                style={styles.container
                }>
                <Text style={styles.textStyle}>{item.label}</Text>
              </TouchableOpacity>
            )
        }
      </>
    )
  }


  return (
    <View style={{ flex: 1, }}>
      <SafeAreaView style={{ flex: 1 }}>
        {shouldShow ? (
          <Modal
            visible={props.isVisible}
            transparent={true}
          >
            <View style={styles.flatListContiner}>
              <FlatList
                style={{ flex: 1 }}
                data={props.data}
                renderItem={({ item, index }) => renderItemView(item, index)}
              />
              <Button
                title="Seleccionar"
                onPress={() => setShouldShow(!shouldShow) }
              />
            </View>
          </Modal>
        ) : null}
      </SafeAreaView>
    </View>
  )
}


const styles = StyleSheet.create({
  container: {
    width: "80%",
    alignSelf: 'center',
    justifyContent: 'space-between',
    flexDirection: 'row',
    height: 40,
    marginTop: 10,
    //paddingLeft: 50,
  },
  textStyle: {
    fontSize: 18,
    color: '#B7B9BE'
  },
  selectedTextStyle: {
    fontSize: 18,
    color: 'red'
  },
  flatListContiner: {
    flex: 1,
    marginBottom: 70,
    borderRadius: 30,
    backgroundColor: '#18191Acc',
    marginLeft: 40,
    marginRight: 40,
    marginTop: 125,
  }
});