import { PropsWithChildren } from "react";
import { View, Text, StyleSheet } from "react-native";

type Card = {
	title: string;
};

export default function Card({ title, children }: PropsWithChildren<Card>) {
	return (
		<View style={styles.container}>
			<Text style={styles.title}>{title}</Text>
			{children}
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		backgroundColor: "white",
		padding: 20,
		paddingVertical: 40,
		borderRadius: 20,
		gap: 20,

		// shadow
		shadowColor: "#000",
		// ios
		shadowOffset: {
			width: 0,
			height: 2,
		},
		shadowOpacity: 0.25,
		shadowRadius: 3.84,
		// android
		elevation: 5,
	},
	title: {
		fontSize: 24,
		fontWeight: "500",
	},
});
