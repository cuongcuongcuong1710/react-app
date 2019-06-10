import React, { Component } from 'react';
import './footer.css';
import { Segment, Container, Grid, Header, List, Icon, Input, Button } from 'semantic-ui-react';

class Footer extends Component {
    render() {
        return (
            <Segment inverted vertical style={{ padding: '5em 0em' }} color='blue'>
                <Container>
                    <Grid divided inverted stackable>
                        <Grid.Row>
                            <Grid.Column width={5}>
                                <Header inverted as='h3' content='Products' />
                                <List link inverted>
                                    <List.Item as='a'>Enterprise Email Archiving for Marketing Cloud©</List.Item>
                                    <List.Item as='a'>Einstein Voice© for Marketing Cloud©</List.Item>
                                    <List.Item as='a'>URL Shortner for MobileConnect©</List.Item>
                                    <List.Item as='a'>Teleport for Journey Builder©</List.Item>
                                    <List.Item as='a'>Email Refresh for Journey Builder©</List.Item>
                                    <List.Item as='a'>Direct Mail for Journey Builder©</List.Item>
                                    <List.Item as='a'>Exit Anywhere for Journey Builder©</List.Item>
                                    <List.Item as='a'>Engagement History Timeline Lightning Component</List.Item>
                                </List>
                            </Grid.Column>
                            <Grid.Column width={4}>
                                <Header inverted as='h3' content='Contacts' />
                                <List link inverted>
                                    <Icon name='mail outline' size='large' />
                                    <List.Item as='a'>
                                        info@blueport.io
                                        <br />
                                    </List.Item>


                                    <Icon name='map marker' size='large' />
                                    <List.Item as='a'>Blueport I/O Pty Ltd <br /> One International Towers<br />Level 35, 100 Barangaroo Ave <br />Barangaroo, NSW 2000, Australia <br /></List.Item>

                                </List>
                            </Grid.Column>
                            <Grid.Column width={5}>
                                <Header as='h3' inverted>
                                    News & Updates
                                </Header>
                                <p>
                                    Subscribe to our monthly newsletter email.
                                </p>
                                <Input focus placeholder='Enter your e-mail...' style={{ marginLeft: 5 }} />
                                <Button style={{ marginLeft: 5 }} >Submit</Button>
                            </Grid.Column>
                        </Grid.Row>
                    </Grid>
                </Container>
            </Segment>
        )
    }
}
export default Footer;