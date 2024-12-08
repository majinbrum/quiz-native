import { Text, View, StyleSheet, Pressable } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import QuestionCard from "../components/QuestionCard";
import FontAwesome6 from "@expo/vector-icons/FontAwesome6";

import questions from "../questions";
import Card from "../components/Card";
import CustomButton from "../components/CustomButton";
import { useState } from "react";

export default function QuizScreen() {
	const [questionIndex, setQuestionIndex] = useState(0);
	const question = questions[questionIndex];

	const onNext = () => {
		// update function that will not depend on the actual state but will use the current value
		setQuestionIndex((currValue) => currValue + 1);
	};

	return (
		<SafeAreaView style={styles.page}>
			<View style={styles.container}>
				{/* Header */}
				<View>
					<Text style={styles.title}>Question {questionIndex}/5</Text>
				</View>

				{/* Body */}
				{question ? (
					<View>
						<QuestionCard question={question} />
						<Text style={styles.time}>20 sec</Text>
					</View>
				) : (
					<Card title='Well done'>
						<Text>Correct answers: 3/5</Text>
						<Text>Best score: 10</Text>
					</Card>
				)}

				{/* Footer */}
				<CustomButton
					title='Next'
					rightIcon={
						<FontAwesome6
							name='arrow-right-long'
							size={16}
							color='white'
						/>
					}
					onPress={onNext}
				/>
			</View>
		</SafeAreaView>
	);
}

const styles = StyleSheet.create({
	page: {
		backgroundColor: "#FDFEF4",
		flex: 1,
	},
	container: {
		flex: 1,
		justifyContent: "space-between",
		padding: 20,
	},
	title: {
		textAlign: "center",
		color: "#005055",
	},
	time: {
		textAlign: "center",
		marginTop: 15,
		color: "#005055",
		fontWeight: "bold",
	},
});
