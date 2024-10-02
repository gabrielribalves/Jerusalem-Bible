import { Stack } from "expo-router";

export default function RootLayout(){
	return(
		<Stack>
			<Stack.Screen name="index" options={{headerShown: false}}/>
			{/* <Stack.Screen name="chapter" options={{headerShown: false}}/> */}
			{/* <Stack.Screen name="summary" options={{headerShown: false}}/> */}
			{/* <Stack.Screen name="configuration" options={{headerShown: false}}/> */}
		</Stack>
	)
}