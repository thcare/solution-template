import React from 'react';
import {Alert, Button, SafeAreaView, ScrollView, View} from 'react-native';
import {Form, ThriveResourceType, getFormId} from '@thcare/thfx';

function App(): JSX.Element {
  return (
    <SafeAreaView>
      <ScrollView contentInsetAdjustmentBehavior="automatic">
        <View>
          <Button
            title="Hello world"
            onPress={() => {
              const form: Form = {
                type: ThriveResourceType.Form,
                steps: [],
                name: 'lalalala',
              };
              getFormId(form);
              Alert.alert(`Form Id: ${getFormId(form)}`);
            }}
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

export default App;
