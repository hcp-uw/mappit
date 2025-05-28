import { Stack } from "expo-router";
import 'react-native-gesture-handler';
import 'mapbox-gl/dist/mapbox-gl.css';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { BottomSheetModalProvider } from '@gorhom/bottom-sheet';


export default function RootLayout() {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <BottomSheetModalProvider>
        <Stack />
      </BottomSheetModalProvider>
    </GestureHandlerRootView>
  );
}
