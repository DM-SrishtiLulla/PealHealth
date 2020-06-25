import { StyleSheet } from 'react-native';
import COLORS from "./Colors"

// Theme
const authTheme = StyleSheet.create({
	container: {
		flex: 1,
		flexDirection: 'column',
		// alignItems: "flex-start",
		justifyContent: 'space-around',
		paddingTop: 20,
		width: '100%',
		backgroundColor: COLORS.primary,
		color: COLORS.darkaccent
	},
	section: {
		flex: 1,
		width: '100%',
		padding: 20,
	},
	sectionHeader: {
		width: '100%',
		marginBottom: 20,
		marginTop: 50,
		marginHorizontal: 10,
		color: COLORS.darkaccent
	},
	sectionHeaderText: {
		color: COLORS.darkaccent,
		fontSize: 20,
		fontWeight: '300',
	},
	sectionFooter: {
		width: '150%',
		padding: 0,
		flexDirection: 'row',
		marginTop: 20,
		marginBottom: 2000,
		marginLeft: 20,
		color: COLORS.darkaccent
	},
	sectionFooterLink: {
		fontSize: 16,
		fontWeight: "300",
		color: COLORS.darkaccent,
		alignItems: 'center',
		textAlign: 'left',
	},
	navBar: {
		marginTop: 35,
		padding: 15,
		flexDirection: 'row',
		justifyContent: 'flex-end',
		alignItems: 'center',
		color: COLORS.darkaccent
	},
	navButton: {
		marginLeft: 12,
		borderRadius: 4,
	},
	cell: {
		flex: 1,
		width: '50%',
		color: COLORS.primary,
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
		backgroundColor: COLORS.darkaccent,
		alignItems: 'center',
		justifyContent: 'center',
		width: '90%',
		padding: 10,
		marginHorizontal: 20,
	},
	buttonDisabled: {
		backgroundColor: COLORS.darkaccent,
		alignItems: 'center',
		padding: 16,
	},
	buttonText: {
		color: "white",
		fontSize: 16,
		fontWeight: 'bold',
	},
	formField: {
		marginBottom: 30,
	},
	input: {
		padding: 14,
		marginLeft:20,
		width: "90%",
		borderWidth: 0.7,
		borderRadius: 3,
		borderColor: COLORS.darkaccent,
		color: COLORS.darkaccent,
	},
	inputLabel: {
		marginBottom: 10,
		marginHorizontal: 20,
		color: COLORS.darkaccent,
		fontSize: 16,
		fontWeight: "300"
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
		borderColor: COLORS.darkaccent,
		color: COLORS.darkaccent,
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