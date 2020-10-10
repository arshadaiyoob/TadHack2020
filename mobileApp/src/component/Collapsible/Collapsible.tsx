import React, { Component } from 'react';
import {View, Text} from 'react-native';
import Accordion from 'react-native-collapsible/Accordion';

const SECTIONS = [
  {
    title: 'First',
    content: 'Lorem ipsum...',
  },
  {
    title: 'Second',
    content: 'Lorem ipsum...',
  },
];

export default class Collapsible extends Component {
  state = {
    activeSections: [],
  };

  _renderSectionTitle = ()=> {
    return (
      <View >
        <Text>title</Text>
      </View>
    );
  };

  _renderHeader = () => {
    return (
      <View >
        <Text >header</Text>
      </View>
    );
  };

  _renderContent = ()=> {
    return (
      <View >
        <Text>afidhaoifdoaido</Text>
      </View>
    );
  };

  _updateSections = activeSections => {
    this.setState({ activeSections });
  };

  render() {
    return (
      <Accordion
        sections={SECTIONS}
        activeSections={this.state.activeSections}
        renderHeader={this._renderHeader}
        renderContent={this._renderContent}
        onChange={this._updateSections}
      />
    );
  }
}