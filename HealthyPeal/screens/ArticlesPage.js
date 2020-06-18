import React from 'react';
import { Layout, Text, Button } from '@ui-kitten/components';

export default function ArticlesPage({ navigation }) {
    return (
      <Layout style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text category='h1'>HOME</Text>
       <Button
          size="medium"
          onPress={() =>
            navigation.navigate('Insights', { name: 'Jane' })
          }>
            Go to Jane's profile
          </Button>
    </Layout>
    )
}