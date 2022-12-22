import { StyleSheet } from "react-native";
import {
    COLOR_BASE_PRIMARY_TEXT,
    COLOR_BASE_SECOND_TEXT, COLOR_SHADOW,
    FONT_BOLD,
    FONT_MEDIUM,
    FONT_REGULAR
} from '../../styles';
  
const styles = StyleSheet.create({
    container: {
      flex: 1,
    },
    content: {
      backgroundColor: 'white',
      paddingHorizontal: 24,
      paddingVertical: 16,
      marginTop: 24,
    },
    photoContainer: {
      width: 90,
      height: 90,
      borderRadius: 90,
      backgroundColor: '#F0F0F0',
      padding: 24,
    },
    borderPhoto: {
      borderWidth: 1,
      borderColor: '#8D92A3',
      width: 110,
      height: 110,
      borderRadius: 110,
      borderStyle: 'dashed',
      justifyContent: 'center',
      alignItems: 'center',
    },
    photo: {alignItems: 'center', marginTop: 26, marginBottom: 16},
    content2: {
      backgroundColor: 'white',
      marginHorizontal: 16,
      paddingHorizontal: 24,
      paddingVertical: 16,
      borderRadius: 16,
    },
    label: {
      fontSize: 16,
      color: COLOR_BASE_PRIMARY_TEXT,
    },
    labelJml: {
      fontSize: 14,
      fontFamily: FONT_REGULAR,
      color: COLOR_BASE_SECOND_TEXT,
    },
    labelStep: {
      fontSize: 11,
      marginTop: 10,
      fontFamily: FONT_MEDIUM,
      color: COLOR_BASE_PRIMARY_TEXT,
    },
    button: {
      paddingHorizontal: 24,
      position: 'absolute',
      bottom: 10,
      width: '100%',
    },
    round: {
      padding: 10,
      backgroundColor: COLOR_SHADOW,
      borderRadius: 50,
      width: 40,
      height: 40,
      justifyContent: 'center',
    },
    roundActive: {
      padding: 10,
      backgroundColor: '#0CBC8B',
      borderRadius: 50,
      width: 40,
      height: 40,
      justifyContent: 'center',
    },
    txtStep: {
      color: COLOR_BASE_PRIMARY_TEXT,
      fontFamily: FONT_BOLD,
      textAlign: 'center',
    },
    txtStepActive: {color: 'white', fontFamily: FONT_BOLD, textAlign: 'center'},
    input: {
      borderWidth: 1,
      borderColor: COLOR_SHADOW,
      borderRadius: 8,
      padding: 10,
      backgroundColor: 'white',
    },
    image: {
      alignItems: 'center',
    },
  });

  export default styles;