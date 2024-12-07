import { View, Text, StyleSheet, Pressable } from "react-native";
// import { PressableProps } from "react-native";
import { ComponentProps } from "react";

type CustomButton = {
	title: string;
	rightIcon?: React.ReactNode;
	// } & PressableProps;
} & ComponentProps<typeof Pressable>;

export default function CustomButton({ title, rightIcon, ...pressableProps }: CustomButton) {
	return (
		<Pressable
			{...pressableProps}
			style={styles.button}>
			<Text style={styles.buttonText}>{title}</Text>
			<View style={styles.rightIcon}>{rightIcon}</View>
		</Pressable>
	);
}

const styles = StyleSheet.create({
	button: {
		backgroundColor: "#005055",
		padding: 20,
		borderRadius: 100,
		flexDirection: "row",
		alignItems: "center",
		justifyContent: "center",
	},
	buttonText: {
		color: "white",
		fontWeight: "500",
		fontSize: 16,
		letterSpacing: 1.5,
	},
	rightIcon: {
		position: "absolute",
		right: 20,
	},
});
