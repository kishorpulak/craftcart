import React from 'react';
import {Form, Button, Col, fieldset, Row} from 'react-bootstrap';

import './footer.css';

function Footer() {
	return (
		<>
			<div className="FooterCover">
				<div className="container-fluid">
					<Row className="justify-content-md-center">
						<Col xs md="3" lg="3" className="footerCol">
							<div className="footerTileCover company-height">
								<h3 className="company-logo-title">WebTechStack</h3>
								<p className="emailPara">Email: <a href="#">customerservice@myrabag.com</a></p>
								<div className="pwayImg">
									<img
							            className="d-block w-100"
							            src={require('./../../images/payment-getway.jpg').default}
							            alt=""
							        />
							        <p>All payments cards accepted here</p>
						        </div>
							</div>
						</Col>
						<Col xs md="3" lg="3" className="footerCol">
							<div className="footerTileCover">
								<h3 className="footerTitle">Quick Links</h3>
								<div className="quickLinksUlCover">
									<ul>
										<li>
											<a href="#">about us</a>
										</li>
										<li>
											<a href="#">contact us</a>
										</li>
										<li>
											<a href="#">upcoming shows</a>
										</li>
										<li>
											<a href="#">terms & conditons</a>
										</li>
										<li>
											<a href="#">apparel sizing guide</a>
										</li>
										<li>
											<a href="#">privacy policy</a>
										</li>
										<li>
											<a href="#">testimonial</a>
										</li>
										<li>
											<a href="#">careers</a>
										</li>
										<li>
											<a href="#">FAQ'S</a>
										</li>
									</ul>
								</div>
							</div>
						</Col>
						<Col xs md="3" lg="3" className="footerCol">
							<div className="footerTileCover">
								<h3 className="footerTitle">About Us</h3>
								<p className="aboutText">Myra, a treat for nature lovers, is an endeavour to bring style, elegance, sophistication and quality under one roof. We delight our customers with accessories made of nature-friendly canvas, leather and hides.</p>
								<p className="aboutText">We are a one-stop shop and offers you complete make over with our latest collection of apparel, trendy jewellery and ethnic bags.</p>
								<div className="socialsLinks">
									<ul>
										<li>
											<a href="#">
												<i className="fa fa-facebook"></i>
											</a>
										</li>
										<li>
											<a href="#">
												<i className="fa fa-twitter"></i>
											</a>
										</li>
										<li>
											<a href="#">
												<i className="fa fa-instagram"></i>
											</a>
										</li>
										<li>
											<a href="#">
												<i className="fa fa-pinterest"></i>
											</a>
										</li>
									</ul>
								</div>
							</div>
						</Col>
						<Col xs md="3" lg="3" className="footerCol">
							<div className="footerTileCover">
								<h3 className="footerTitle">Get The Newsletter</h3>
								<div className="newsletterFormBox">
									<Form>
									  <Form.Group controlId="formBasicEmail">
									    <Form.Control type="email" placeholder="Your email address" />
									  </Form.Group>
									  <Button variant="primary" size="sm" value="Submit" className="w-100">Subscribe</Button>
									</Form>
								</div>
								<div className="pwayImg">
									<img
							            className="d-block w-100"
							            src={require('./../../images/secure-logo-new.png').default}
							            alt=""
							        />
						        </div>
							</div>
						</Col>
					</Row>
				</div>
			</div>
			<div className="copyRightCover">
				<div className="container-fluid">
					<Row className="justify-content-md-center">
						<Col xs md="3" lg="3" className="footerCol">
							<p className="copyrightText">@2021 WebTechStack. All Rights Reserved.</p>
						</Col>
					</Row>
				</div>
			</div>
		</>
	);
}

export default Footer;