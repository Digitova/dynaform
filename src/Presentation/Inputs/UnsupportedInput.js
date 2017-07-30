import React from "react";
import { View, Text } from "react-native";

export default function UnsupportedInput({ schema }) {
  // XXX render json as string so dev can inspect faulty subschema
  return (
    <View>
        <Text>Unsupported inputType:</Text>
        <Text>{ JSON.stringify(schema, null, 2) }</Text>
    </View>
  );
}
