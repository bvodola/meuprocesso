import '@babel/polyfill';
import React from 'react';
import ReactDOM from 'react-dom';
import App from './src/App';
import iconFont from 'react-native-vector-icons/Fonts/MaterialCommunityIcons.ttf';

ReactDOM.render(<App></App>, document.getElementById('root'));

const iconFontStyles = `@font-face {
  src: url(${iconFont});
  font-family: MaterialCommunityIcons;
}`;

const style = document.createElement('style');
style.type = 'text/css';
if (style.styleSheet) style.styleSheet.cssText = iconFontStyles;
else style.appendChild(document.createTextNode(iconFontStyles));
document.head.appendChild(style);