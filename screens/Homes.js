import { useState } from 'react'
import {Text, View, SafeAreaView, FlatList} from 'react-native'

import {COLORS, NFTData} from '../constants'

import { 
    NTFCard,
    HomeHeader,
    FocusedStatusBar
 } from '../components'



const Homes = () => {
  return (
    <SafeAreaView style={{flex: 1}}>
        <FocusedStatusBar  background = {COLORS.primary}/>

        <View style={{flex: 1}}> 
            <View style={{zIndex:0}}>
                <FlatList
                  data={NFTData}
                />
            </View>
        </View>
    </SafeAreaView>
  )
}

export default Homes