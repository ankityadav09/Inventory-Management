import React from 'react'
import { Card,CardGroup } from 'react-bootstrap'

function About() {
    return (
        <div id="About" style={{ paddingTop:170 }}>
            <h1>About Us</h1>
            <CardGroup>
                <Card>
                    <Card.Img variant="top" src="./img/card_img3.png" />
                    <Card.Body>
                        <Card.Title>Increase Turnover</Card.Title>
                        <Card.Text>
                            Contact us soon
                        </Card.Text>
                    </Card.Body>
                    <Card.Footer>
                        <small className="text-muted">Last updated 3 mins ago</small>
                    </Card.Footer>
                </Card>
                <Card>
                    <Card.Img variant="top" src="./img/card_img2.png" />
                    <Card.Body>
                        <Card.Title>Increase Turnover</Card.Title>
                        <Card.Text>
                        Contact us soon
                        </Card.Text>
                    </Card.Body>
                    <Card.Footer>
                        <small className="text-muted">Last updated 3 mins ago</small>
                    </Card.Footer>
                </Card>
                <Card>
                    <Card.Img variant="top" src="./img/card_img3.png"/>
                    <Card.Body>
                        <Card.Title>Increase Turnover</Card.Title>
                        <Card.Text>
                        Contact us soon
                        </Card.Text>
                    </Card.Body>
                    <Card.Footer>
                        <small className="text-muted">Last updated 3 mins ago</small>
                    </Card.Footer>
                </Card>
            </CardGroup>
            {/* Developers */}
            <h1 className="mt-5 ">Our Team</h1>
            <CardGroup>
                <Card>
                    <Card.Img variant="top" src="data:image/png;base64,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" />
                    <Card.Body>
                        <Card.Title>Develop</Card.Title>
                        <Card.Text>
                           Develop
                        </Card.Text>
                    </Card.Body>
                    <Card.Footer>
                        <small className="text-muted">Last updated 3 mins ago</small>
                    </Card.Footer>
                </Card>
                <Card>
                    <Card.Img variant="top" src="https://www.qcmore.com/blog/wp-content/uploads/2018/10/independent-software-testing.jpg" />
                    <Card.Body>
                        <Card.Title>Testing</Card.Title>
                        <Card.Text>
                        Testing
                        </Card.Text>
                    </Card.Body>
                    <Card.Footer>
                        <small className="text-muted">Last updated 3 mins ago</small>
                    </Card.Footer>
                </Card>
                <Card>
                    <Card.Img variant="top" src="https://stackify.com/wp-content/uploads/2018/01/word-image-5-881x441.png"/>
                    <Card.Body>
                        <Card.Title>Deployment</Card.Title>
                        <Card.Text>
                        Deployment
                        </Card.Text>
                    </Card.Body>
                    <Card.Footer>
                        <small className="text-muted">Last updated 3 mins ago</small>
                    </Card.Footer>
                </Card>
            </CardGroup>
        </div>
    )
}

export default About