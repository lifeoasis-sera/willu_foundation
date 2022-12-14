import React from 'react';
import {View, Text, ColorValue, TextStyle, Pressable} from 'react-native';
import {ColorBundle} from '../../../styles/color-bundle';

export interface TypographyProps {
  color?: ColorBundle | ColorValue;
  size?: number;
  bold?: '500' | '400' | '600' | '700';
  center?: boolean;
  underLine?: boolean;
  throughLine?: boolean;
  lineHeight?: number;
  style?: TextStyle;
  onPress?: () => void;
  lineBreak?: boolean;
  children: string;
}

const Typography = (props: TypographyProps) => {
  const {
    children,
    color = ColorBundle.textDefault,
    size = 18,
    bold = '500',
    center,
    lineHeight,
    underLine,
    throughLine,
    style: textStyle,
    onPress,
    lineBreak,
  } = props;

  if (lineBreak) {
    const textList = children.split('\n').map(line =>
      line
        .split(' ')
        .filter(word => word)
        .map((word, index, arr) =>
          index === arr.length - 1 ? word : `${word} `,
        ),
    );

    const linkBreakText = () => {
      return textList.map((words, wordsIndex) => (
        <View
          style={{
            flexDirection: 'row',
            flexWrap: 'wrap',
            alignItems: 'center',
          }}
          key={words[0] + `${wordsIndex}`}>
          {words.map((word, wordIndex) => (
            <Text
              key={wordIndex + word}
              style={{
                color,
                fontSize: size,
                fontWeight: bold,
                lineHeight: lineHeight && size * lineHeight,
              }}>
              {word}
            </Text>
          ))}
        </View>
      ));
    };

    if (onPress) {
      return (
        <Pressable
          onPress={onPress}
          style={[{alignItems: center ? 'center' : undefined}, textStyle]}>
          {linkBreakText()}
        </Pressable>
      );
    }

    return (
      <View style={[{alignItems: center ? 'center' : undefined}, textStyle]}>
        {linkBreakText()}
      </View>
    );
  }

  const linearText = () => {
    return (
      <Text
        style={{
          color,
          fontSize: size,
          fontWeight: bold,
          lineHeight: lineHeight && size * lineHeight,
          textDecorationLine: underLine
            ? 'underline'
            : throughLine
            ? 'line-through'
            : undefined,
        }}>
        {children}
      </Text>
    );
  };

  if (onPress) {
    return (
      <Pressable
        onPress={onPress}
        style={[{alignItems: center ? 'center' : undefined}, textStyle]}>
        {linearText()}
      </Pressable>
    );
  }

  return (
    <View style={[{alignItems: center ? 'center' : undefined}, textStyle]}>
      {linearText()}
    </View>
  );
};

export default Typography;
