import React from 'react';
import {Alert, Button, SafeAreaView, ScrollView, View} from 'react-native';
import {Form, ThriveResourceType, getFormId} from '@thcare/thfx';
// import hello from '@solution-template/shared';
import hello from '@thcare/thfx-generated';
// import solution from '@solution-template/core';

function App(): JSX.Element {
  return (
    <SafeAreaView>
      <ScrollView contentInsetAdjustmentBehavior="automatic">
        <View>
          <Button
            title="getFormId"
            onPress={() => {
              const form: Form = {
                type: ThriveResourceType.Form,
                steps: [],
                name: 'lalalala',
              };
              Alert.alert(`Form Id: ${getFormId(form)}`);
            }}
          />

          <Button
            title="shared"
            onPress={() => {
              Alert.alert(`shared: ${hello()}`);
            }}
          />

          <Button
            title="solution.title"
            onPress={() => {
              // Alert.alert(`solution title: ${solution.title}`);
            }}
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

export default App;
