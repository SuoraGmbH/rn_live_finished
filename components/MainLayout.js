import * as React from "react";
import {Body, Button, Container, Content, Footer, FooterTab, Header, Icon, Left, Right, Text, Title} from 'native-base';
import {withRouter} from "react-router";
import PropTypes from "prop-types";

class MainLayout extends React.Component {
    static propTypes = {
        title: PropTypes.string.isRequired,
        ContentComponent: PropTypes.any,
        growContent: PropTypes.bool,
    };

    static defaultProps = {
        growContent: false,
    }

    handleBack = () => {
        this.props.history.goBack();
    }
    render() {
        console.log("renderMainlayout", this.props.history)
        const renderBackButton = this.props.history.length > 1 && this.props.history.index ;
        const {growContent} = this.props
        const contentContainerStyle = growContent ? { flexGrow: 1 } : {};

        if(this.props.growContent) {}
        return (
            <Container>
                <Header>
                    <Left>
                        {renderBackButton && <Button transparent onPress={this.handleBack}>
                            <Icon name='arrow-back'/>
                        </Button>
                        }
                    </Left>
                    <Body>
                    <Title>{this.props.title}</Title>
                    </Body>
                    <Right/>
                </Header>
                <Content contentContainerStyle={contentContainerStyle}>
                    {this.props.children}
                </Content>
                <Footer>
                    <FooterTab>
                        <Button full>
                            <Text>Footer</Text>
                        </Button>
                    </FooterTab>
                </Footer>
            </Container>
        );
    }
}

export default withRouter(MainLayout)