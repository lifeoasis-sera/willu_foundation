import React, {forwardRef, useRef} from 'react';
import {Animated, StyleSheet, Text, TextInput} from 'react-native';
import {
  CodeField,
  useClearByFocusCell,
} from 'react-native-confirmation-code-field';
import dayjs from 'dayjs';
import {RenderCellOptions} from 'react-native-confirmation-code-field/esm/CodeField';
import CustomParseFormat from 'dayjs/plugin/customParseFormat';
import {ColorBundle} from '../../styles/color-bundle';
import {Typography} from '../../components';
import {getTextJson, isNumber} from '../../utils';

interface BirthdayFieldProps {
  value: string;
  setValue: (text: string) => void;
  onChangeText: (text: string) => void;
  underAge: boolean;
}

const now = dayjs();
export const BirthdayFieldCellCount = 8;
const MONTH_LENGTH = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
dayjs.extend(CustomParseFormat);

export const BirthdayField = forwardRef<TextInput, BirthdayFieldProps>(
  (props, ref) => {
    const {value, setValue, onChangeText, underAge} = props;
    const [dateProps, getDateCellOnLayoutHandler] = useClearByFocusCell({
      value,
      setValue,
    });
    const shakeAnimation = useRef(new Animated.Value(0)).current;
    const textJson = getTextJson();

    function validateDate(date: string) {
      let isMonth = true;
      let isDay = true;
      let isYear = true;

      if (!isNumber(date)) {
        return false;
      }

      switch (date.length) {
        case 5:
          if (Number(date.substring(4, 5)) > 1) {
            isMonth = false;
          }
          break;
        case 6:
          if (
            Number(date.substring(4, 6)) < 1 ||
            Number(date.substring(4, 6)) > 12
          ) {
            isMonth = false;
          }
          break;
        case 7:
          if (Number(date.substring(6, 7)) > 3) {
            isDay = false;
          }
          break;
        case 8:
          if (
            Number(date.substring(6, 8)) < 1 ||
            Number(date.substring(6, 8)) >
              MONTH_LENGTH[Number(date.substring(4, 6)) - 1]
          ) {
            isDay = false;
          }
          break;
        case 1:
          if (
            Number(date.substring(0, 1)) < 1 ||
            Number(date.substring(0, 1)) > 2
          ) {
            isYear = false;
          }
          break;
        case 2:
          if (
            Number(date.substring(0, 2)) < 19 ||
            Number(date.substring(0, 2)) > 20
          ) {
            isYear = false;
          }
          break;
        case 3:
          if (
            Number(date.substring(0, 3)) < 192 ||
            Number(date.substring(0, 3)) > 202
          ) {
            isYear = false;
          }
          break;
        case 4:
          if (Number(date.substring(0, 4)) > now.year()) {
            isYear = false;
          }
          break;
      }

      if (!isMonth || !isDay || !isYear) {
        return false;
      }

      return true;
    }

    function handleChangeText(text: string) {
      if (validateDate(text)) {
        onChangeText(text);
      } else {
        shake();
      }
    }

    function shake() {
      if (shakeAnimation) {
        Animated.sequence([
          Animated.timing(shakeAnimation, {
            toValue: 5,
            duration: 50,
            useNativeDriver: true,
          }),
          Animated.timing(shakeAnimation, {
            toValue: -5,
            duration: 50,
            useNativeDriver: true,
          }),
          Animated.timing(shakeAnimation, {
            toValue: 5,
            duration: 50,
            useNativeDriver: true,
          }),
          Animated.timing(shakeAnimation, {
            toValue: 0,
            duration: 50,
            useNativeDriver: true,
          }),
        ]).start();
      }
    }

    const RenderBirthCell = ({index, symbol, isFocused}: RenderCellOptions) => {
      return (
        <React.Fragment key={index}>
          <Animated.View
            onLayout={getDateCellOnLayoutHandler(index)}
            style={[
              styles.cellRoot,
              (!!symbol || isFocused) && styles.focusCell,
              isFocused && {transform: [{translateX: shakeAnimation}]},
            ]}>
            <Text
              style={[
                styles.cellText,
                {
                  color:
                    symbol && index < 4 && underAge
                      ? ColorBundle.activate
                      : ColorBundle.textDefault,
                },
              ]}>
              {symbol || (
                <Typography
                  style={{textAlign: 'center'}}
                  color={ColorBundle.disable}
                  size={36}>
                  {index < 4
                    ? textJson.Enum.Date.Year
                    : index < 6
                    ? textJson.Enum.Date.Month
                    : textJson.Enum.Date.Day}
                </Typography>
              )}
            </Text>
          </Animated.View>
          {index === 3 && (
            <Typography
              style={styles.dash}
              color={
                value.length > 3 ? ColorBundle.textDefault : ColorBundle.disable
              }
              size={36}>
              /
            </Typography>
          )}
          {index === 5 && (
            <Typography
              style={styles.dash}
              color={
                value.length > 5 ? ColorBundle.textDefault : ColorBundle.disable
              }
              size={36}>
              /
            </Typography>
          )}
        </React.Fragment>
      );
    };

    return (
      <CodeField
        ref={ref}
        {...dateProps}
        rootStyle={styles.codeFieldRoot}
        value={value}
        cellCount={BirthdayFieldCellCount}
        onChangeText={handleChangeText}
        keyboardType={'number-pad'}
        textContentType={'none'}
        renderCell={RenderBirthCell}
        autoFocus={true}
      />
    );
  },
);

const styles = StyleSheet.create({
  codeFieldRoot: {
    justifyContent: 'center',
    marginTop: 30,
    marginBottom: 8,
  },
  cellRoot: {
    width: 32,
    height: 52,
    borderBottomColor: ColorBundle.disable,
    borderBottomWidth: 3,
    marginHorizontal: 2,
  },
  cellText: {
    fontSize: 36,
    textAlign: 'center',
    color: ColorBundle.textDefault,
  },
  focusCell: {
    borderBottomColor: ColorBundle.textDefault,
    borderBottomWidth: 3,
  },
  dash: {
    marginLeft: 6,
    marginRight: 4,
  },
});
