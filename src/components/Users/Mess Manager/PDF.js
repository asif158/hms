import React from "react";
import { Page, Text, Document, StyleSheet, PDFViewer } from "@react-pdf/renderer";

const styles = StyleSheet.create({
	page: {
		backgroundColor: "#E4E4E4",
	},
	title: {
		margin: 20,
		fontFamily: "Helvetica-Bold",
		fontSize: 30,
		textDecoration: "underline",
	},
	text: {
		margin: "12 0 12 25",
		textAlign: "justify",
		width: "100%",
	},
});

const PDF = ({ charge, students, hall }) => (
	<PDFViewer>
		<Document title="Mess Due">
			<Page style={styles.page}>
				<Text style={[styles.title]}>Mess Due Details</Text>
				<Text style={styles.text}>Hall: {`\t\t${hall}`} </Text>
				<Text style={[styles.text]}>Total Students: {`\t\t${students}`}</Text>
				<Text style={[styles.text]}>Mess Charge per student: {`\t\t${charge}`}</Text>
				<Text style={[styles.text]}>Total Mess Due: {`\t\t${charge * students}/-`}</Text>
			</Page>
		</Document>
	</PDFViewer>
);

export default PDF;
