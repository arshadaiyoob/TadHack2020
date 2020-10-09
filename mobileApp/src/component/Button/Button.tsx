import React, { ReactElement } from 'react';
import { Image, StyleProp, ViewStyle } from 'react-native';
import { Button, ButtonProps } from 'react-native-elements';
import color from '../../styles/color'
import style from './Button.styles';

interface CustomButtonProps extends ButtonProps {
  removeIcon?: boolean;
  isFilled?: boolean;
}

const CustomButton: React.FC<CustomButtonProps> = (
  props: CustomButtonProps,
) => {
  const {
    buttonStyle,
    titleStyle,
    disabledStyle,
    removeIcon,
    isFilled,
  } = props;

  const renderIcon = (): ReactElement<any> | null => {
    if (removeIcon) {
      return null;
    }
    return (
      <Image
        style={style.arrowImageStyle}
        source={require('../../../assets/right-arrow.png')}
      />
    );
  };

  const renderButtonStyle = (): StyleProp<ViewStyle> => {
    let customStyle;

    if (isFilled) {
      customStyle = removeIcon
        ? [style.container, buttonStyle]
        : [style.container, style.additionalStyle, buttonStyle];
    } else {
      customStyle = [style.container, buttonStyle, style.emptyButtonStyle];
    }

    return customStyle;
  };

  const renderTextStyle = (): StyleProp<ViewStyle> => {
    let customStyle;

    if (isFilled) {
      customStyle = [style.titleTextStyle, titleStyle];
    } else {
      customStyle = [
        style.titleTextStyle,
        titleStyle,
        {
          color: color.font.darkText,
        },
      ];
    }

    return customStyle;
  };

  const renderContent = (): ReactElement<any> => (
    <Button
      icon={renderIcon}
      {...props}
      buttonStyle={renderButtonStyle()}
      titleStyle={renderTextStyle()}
      disabledStyle={[style.disabledStyle, disabledStyle]}
      disabledTitleStyle={style.disabledTitleStyle}
      titleProps={{ numberOfLines: 1 }}
    />
  );

  return renderContent();
};

CustomButton.defaultProps = {
  isFilled: true,
  removeIcon: false,
};

export default CustomButton;
