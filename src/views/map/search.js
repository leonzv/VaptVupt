import React, { Component } from "react";
import { GooglePlacesAutocomplete } from "react-native-google-places-autocomplete";

export default class Search extends Component {
  state = {
    searchFocused: false,
  };

  render() {
    const { searchFocused } = this.state;
    const { onLocationSelected } = this.props;

    return (
      <GooglePlacesAutocomplete
        placeholder="Procure aqui..."
        placeholderTextColor="#333"
        onPress={onLocationSelected}
        onPress={(data, details) => {
          console.log(data, details);
        }}
        query={{
          key: "AIzaSyCVi8UToRxa35GXIConEw7JTIJKQT400CI",
          language: "pt",
        }}
        textInputProps={{
          onFocus: () => {
            this.setState({ searchFocused: true });
          },
          onBlur: () => {
            this.setState({ searchFocused: false });
          },
          autoCapitalize: "none",
          autoCorrect: false,
        }}
        listViewDisplayed={searchFocused}
        fetchDetails
        enablePoweredByContainer={false}
        styles={{
          container: {
            position: "absolute",
            top: 120,
            width: "100%",
          },
          textInputContainer: {
            flex: 1,
            backgroundColor: "transparent",
            height: 45,
            marginHorizontal: 20,
            borderTopWidth: 0,
            borderBottomWidth: 0,
          },
          textInput: {
            height: 45,
            borderRadius: 5,
            elevation: 10,
            borderWidth: 1,
            borderColor: "#DDD",
            fontSize: 18,
            fontFamily: "Rubik-Regular",
            backgroundColor: "#EBEBEB",
          },
          listView: {
            borderWidth: 1,
            borderColor: "#DDD",
            backgroundColor: "#EBEBEB",
            elevation: 5,
            marginTop: 10,
          },
          description: {
            fontSize: 16,
            fontFamily: "Rubik-Regular",
          },
          row: {
            padding: 20,
            height: 58,
          },
        }}
      />
    );
  }
}
