import { StyleSheet } from "react-native";
import colors from "../../../configs/color";

const styles = StyleSheet.create({
    button: ({color, width, height}) => ({
        backgroundColor: color === 'secondary' ? colors.secondary : colors.primary,
        width: width ? width : '100%',
        height: height ? height : 50,
        borderRadius: 40,
        alignItems: 'center',
        justifyContent: 'center'
    })
});

export default styles;
