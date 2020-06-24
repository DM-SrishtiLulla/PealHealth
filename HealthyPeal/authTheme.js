import { StyleSheet } from 'react-native';
import COLORS from "./Colors"

// Colors
export const deepSquidInk = '#FFFFFF';
export const linkUnderlayColor = '#FFF';
export const errorIconColor = '#FFFFFF';
export const textInputColor = '#FFFFFF';
export const textInputBorderColor = '#FFFFFF';
export const placeholderColor = '#11CDEF';

// Theme
const authTheme = StyleSheet.create({
	container: {
		flex: 1,
		flexDirection: 'column',
		alignItems: 'center',
		justifyContent: 'space-around',
		paddingTop: 20,
		width: '100%',
		backgroundColor: COLORS.primary,
		color: '#FFFFFF'
	},
	section: {
		flex: 1,
		width: '100%',
		padding: 20,
	},
	sectionHeader: {
		width: '100%',
		marginBottom: 20,
		color: "#FFFFFF"
	},
	sectionHeaderText: {
		color: "#FFFFFF",
		fontSize: 20,
		fontWeight: '500',
	},
	sectionFooter: {
		width: '100%',
		padding: 10,
		flexDirection: 'row',
		justifyContent: 'space-between',
		marginTop: 15,
		marginBottom: 20,
		color: "#FFFFFF"
	},
	sectionFooterLink: {
		fontSize: 14,
		fontWeight: "bold",
		color: "#FFFFFF",
		alignItems: 'baseline',
		textAlign: 'center',
	},
	navBar: {
		marginTop: 35,
		padding: 15,
		flexDirection: 'row',
		justifyContent: 'flex-end',
		alignItems: 'center',
		color: "#FFFFFF"
	},
	navButton: {
		marginLeft: 12,
		borderRadius: 4,
	},
	cell: {
		flex: 1,
		width: '50%',
		color: "#FFFFFF",
	},
	errorRow: {
		flexDirection: 'row',
		justifyContent: 'center',
	},
	errorRowText: {
		marginLeft: 10,
	},
	photo: {
		width: '100%',
	},
	album: {
		width: '100%',
	},
	button: {
		backgroundColor: placeholderColor,
		alignItems: 'center',
		justifyContent: 'center',
		width: '30%',
		padding: 5,
	},
	buttonDisabled: {
		backgroundColor: placeholderColor,
		alignItems: 'center',
		padding: 16,
	},
	buttonText: {
		color: '#fff',
		fontSize: 16,
		fontWeight: 'bold',
	},
	formField: {
		marginBottom: 22,
	},
	input: {
		padding: 14,
		borderWidth: 2,
		borderRadius: 3,
		borderColor: textInputBorderColor,
		color: textInputColor,
	},
	inputLabel: {
		marginBottom: 8,
		color: "white",
		fontSize: 16,
		fontWeight: "bold"
	},
	phoneContainer: {
		display: 'flex',
		flexDirection: 'row',
		alignItems: 'center',
	},
	phoneInput: {
		flex: 2,
		padding: 14,
		borderWidth: 2,
		borderRadius: 3,
		borderColor: textInputBorderColor,
		color: textInputColor,
	},
	picker: {
		flex: 1,
		height: 44,
	},
	pickerItem: {
		height: 44,
	},
});
export default authTheme;