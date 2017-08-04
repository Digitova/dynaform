import React from "react"
import { View, Text } from "react-native"

export default function({ schema }) {
    return (
        <View>
            <Text>Unsupported Validator:</Text>
            <Text>
                {JSON.stringify(schema, null, 2)}
            </Text>
        </View>
    )
}
