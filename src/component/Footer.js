import React from "react";
import {
    Box,
    Container,
    Row,
    Column,
    FooterLink,
    Heading,
} from "./FooterStyles";

const Footer = () => {
    return (
        <Box>
            <h1 style={{
                color: "green",
                textAlign: "center",
                marginTop: "-50px"
            }}>

            </h1>
            <Container>
                <Row>
                    <Column>
                        <Heading>About Us</Heading>
                        <FooterLink href="#">Aim</FooterLink>
                        <FooterLink href="#">Vision</FooterLink>
                        <FooterLink href="#">Goal</FooterLink>
                    </Column>
                    <Column>
                        <Heading>Services</Heading>
                        <FooterLink href="#">Delivery</FooterLink>
                        <FooterLink href="#">Imported</FooterLink>
                        <FooterLink href="#">Self Grow</FooterLink>
                        <FooterLink href="#">Homemade</FooterLink>
                    </Column>
                    <Column>
                        <Heading>Location</Heading>
                        <FooterLink href="#">Vietnam</FooterLink>
                        <FooterLink href="#">Singapore</FooterLink>
                        <FooterLink href="#">Japan</FooterLink>
                        <FooterLink href="#">Thailand</FooterLink>
                    </Column>
                    <Column>
                        <Heading>Social Media</Heading>
                        <FooterLink href="#">
                            <i className="fab fa-facebook-f">
                                <span style={{ marginLeft: "10px" }}>
                                    Facebook
                                </span>
                            </i>
                        </FooterLink>
                        <FooterLink href="#">
                            <i className="fab fa-instagram">
                                <span style={{ marginLeft: "10px" }}>
                                    Instagram
                                </span>
                            </i>
                        </FooterLink>
                        <FooterLink href="#">
                            <i className="fab fa-twitter">
                                <span style={{ marginLeft: "10px" }}>
                                    Twitter
                                </span>
                            </i>
                        </FooterLink>
                        <FooterLink href="#">
                            <i className="fab fa-youtube">
                                <span style={{ marginLeft: "10px" }}>
                                    Youtube
                                </span>
                            </i>
                        </FooterLink>
                    </Column>
                </Row>
            </Container>
        </Box>
    );
};
export default Footer;
