import React from 'react';
import { Text, View } from 'react-native';
import { Icon, SearchBar, TabBar, Card, WhiteSpace, WingBlank } from '@ant-design/react-native';
import Map from './Map';
import BottomNavigator from './BottomNavigator';

export default class Dashboard extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedTab: 'blueTab',
        };
    }
    renderContent(pageText) {
        return (
            <View style={{ flex: 1, alignItems: 'center', backgroundColor: 'white' }}>
                <SearchBar placeholder="Search" showCancelButton />
                <Text style={{ margin: 50 }}>{pageText}</Text>
            </View>
        );
    }

    renderMap() {
        return <Map />
    }

    onChangeTab(tabName) {
        this.setState({
            selectedTab: tabName,
        });
    }

    renderDashboardContent() {
        return (
            <View style={{ display: "flex", flex: 1, flexDirection: "column" }}>
                <Card style={{ margin: 10, height: 100 }}>
                    <Card.Body>
                        <View style={{ height: 60, display: "flex", flexDirection: "row", flex: 1 }}>
                            <View style={{ display: "flex", flex: 1 }}>
                                <Text>45 </Text>
                            </View>
                            <View style={{ display: "flex", flex: 1 }}>
                                <Text>45 </Text>
                            </View>
                        </View>
                    </Card.Body>
                    <Card.Footer
                        // content="footer content"
                        extra="Last Updated at: 20/10/2020"
                    />
                </Card>
                < View style={{ display: "flex", flex: 1, flexDirection: "row" }}>
                    <Card style={
                        {
                            margin: 10, height: 100, display: "flex", flex: 1
                        }
                    }>
                        <Card.Body>
                            <View style={{ height: 60, display: "flex", flexDirection: "row", flex: 1 }}>
                                <View style={{ display: "flex", flex: 1 }}>
                                    <Text>45 </Text>
                                </View>

                            </View>
                        </Card.Body>
                        <Card.Footer
                            // content="footer content"
                            extra="Last Updated at: 20/10/2020"
                        />
                    </Card>
                    <Card style={{ margin: 10, height: 100, display: "flex", flex: 1 }}>
                        <Card.Body>
                            <View style={{ height: 60, display: "flex", flexDirection: "row", flex: 1 }}>
                                <View style={{ display: "flex", flex: 1 }}>
                                    <Text>45 </Text>
                                </View>

                            </View>
                        </Card.Body>
                        <Card.Footer
                            // content="footer content"
                            extra="Last Updated at: 20/10/2020"
                        />
                    </Card>
                </View>
                <View style={{ display: "flex", flex: 1, flexDirection: "row" }}>
                    <Card style={
                        {
                            margin: 10, height: 100, display: "flex", flex: 1
                        }
                    }>
                        <Card.Body>
                            <View style={{ height: 60, display: "flex", flexDirection: "row", flex: 1 }}>
                                <View style={{ display: "flex", flex: 1 }}>
                                    <Text>45 </Text>
                                </View>

                            </View>
                        </Card.Body>
                        <Card.Footer
                            // content="footer content"
                            extra="Last Updated at: 20/10/2020"
                        />
                    </Card>
                    <Card style={{ margin: 10, height: 100, display: "flex", flex: 1 }}>
                        <Card.Body>
                            <View style={{ height: 60, display: "flex", flexDirection: "row", flex: 1 }}>
                                <View style={{ display: "flex", flex: 1 }}>
                                    <Text>45 </Text>
                                </View>
                            </View>
                        </Card.Body>
                        <Card.Footer
                            // content="footer content"
                            extra="Last Updated at: 20/10/2020"
                        />
                    </Card>
                </View>
            </View>
        );
   }
  render() {
  return (
      <TabBar
                            unselectedTintColor="#949494"
                            tintColor="#33A3F4"
                            barTintColor="#f5f5f5"
                          >
                            <TabBar.Item
                              title="Stats"
                              icon={<Icon name="home" />}
                              selected={this.state.selectedTab === 'blueTab'}
                              onPress={() => this.onChangeTab('blueTab')}
                            >
                              {this.renderDashboardContent()}
                            </TabBar.Item>
                            <TabBar.Item
                              icon={<Icon name="ordered-list" />}
                              title="Health"
                              badge={2}
                              selected={this.state.selectedTab === 'redTab'}
                              onPress={() => this.onChangeTab('redTab')}
                            >
                              {this.renderMap()}
                            </TabBar.Item>

                            <TabBar.Item
                              icon={<Icon name="user" />}
                              title="Map"
                              selected={this.state.selectedTab === 'yellowTab'}
                              onPress={() => this.onChangeTab('yellowTab')}
                            >
                              {this.renderContent('My Tab')}
                            </TabBar.Item>
                          </TabBar>
                        // <BottomNavigator/>
    );
  }

  
  

}