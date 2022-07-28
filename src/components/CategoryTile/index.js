import React from 'react';
import {Row, Image, Col} from 'react-bootstrap';
import './categoryTile.css';

function categoryTile() {
	return(
		<div className="categroyTileMainCover">
			<Row className="justify-content-md-center">
			    <Col xs lg="3">
			        <div className="categroyTileCover">
				      	<div className="catImg">
				      		<img
					            className="d-block w-100"
					            src={require('./../../images/6.jpg').default}
					            alt=""
					        />
				      	</div>
				      	<div className="categoryTileTitle">
				      	    <a href="#">UP-CYCLED CANVAS BAGS</a>
				      	</div>
			        </div>
			    </Col>
			    <Col xs lg="3">
			    	<div className="categroyTileCover">
				      	<div className="catImg">
				      		<img
					            className="d-block w-100"
					            src={require('./../../images/15.jpg').default}
					            alt=""
					        />
				      	</div>
				      	<div className="categoryTileTitle">
				      	    <a href="#">ALL BAGS</a>
				      	</div>
				    </div>
			    </Col>
			    <Col xs lg="3">
			    	<div className="categroyTileCover">
				      	<div className="catImg">
				      		<img
					            className="d-block w-100"
					            src={require('./../../images/8.jpg').default}
					            alt=""
					        />
					    </div>
				      	<div className="categoryTileTitle">
				      	    <a href="#">FOOTWEAR</a>
				      	</div>
				    </div>
			    </Col>
			    <Col xs lg="3">
			    	<div className="categroyTileCover">
				      	<div className="catImg">
				      		<img
					            className="d-block w-100"
					            src={require('./../../images/9.jpg').default}
					            alt=""
					        />
					    </div>
				      	<div className="categoryTileTitle">
				      	    <a href="#">LEATHER & HAIRON</a>
				      	</div>
				    </div>
			    </Col>
			    <Col xs lg="3">
			    	<div className="categroyTileCover">
				      	<div className="catImg">
				      		<img
					            className="d-block w-100"
					            src={require('./../../images/10.jpg').default}
					            alt=""
					        />
					    </div>
				      	<div className="categoryTileTitle">
				      	    <a href="#">BELTS</a>
				      	</div>
				    </div>
			    </Col>
			    <Col xs lg="3">
			    	<div className="categroyTileCover">
				      	<div className="catImg">
				      		<img
					            className="d-block w-100"
					            src={require('./../../images/11.jpg').default}
					            alt=""
					        />
					    </div>
				      	<div className="categoryTileTitle">
				      	    <a href="#">JEWELRY</a>
				      	</div>
				    </div>
			    </Col>
			    <Col xs lg="3">
			    	<div className="categroyTileCover">
				      	<div className="catImg">
				      		<img
					            className="d-block w-100"
					            src={require('./../../images/12.jpg').default}
					            alt=""
					        />
					    </div>
				      	<div className="categoryTileTitle">
				      	    <a href="#">APPAREL</a>
				      	</div>
				    </div>
			    </Col>
			    <Col xs lg="3">
			    	<div className="categroyTileCover">
				      	<div className="catImg">
				      		<img
					            className="d-block w-100"
					            src={require('./../../images/13.jpg').default}
					            alt=""
					        />
					    </div>
				      	<div className="categoryTileTitle">
				      	    <a href="#">WALLET</a>
				      	</div>
				    </div>
				</Col>
			    <Col xs lg="3">
			    	<div className="categroyTileCover">
				      	<div className="catImg">
				      		<img
					            className="d-block w-100"
					            src={require('./../../images/14.jpg').default}
					            alt=""
					        />
					    </div>
				      	<div className="categoryTileTitle">
				      	    <a href="#">NEW ARRIVALS</a>
				      	</div>
				    </div>
			    </Col>
			    <Col xs lg="3">
			    	<div className="categroyTileCover">
				      	<div className="catImg">
				      		<img
					            className="d-block w-100"
					            src={require('./../../images/7.jpg').default}
					            alt=""
					        />
					    </div>
				      	<div className="categoryTileTitle">
				      	    <a href="#">MEN'S COLLECTION</a>
				      	</div>
				    </div>
			    </Col>
			    <Col xs lg="3">
			    	<div className="categroyTileCover">
				      	<div className="catImg">
				      		<img
					            className="d-block w-100"
					            src={require('./../../images/16.jpg').default}
					            alt=""
					        />
					    </div>
				      	<div className="categoryTileTitle">
				      	    <a href="#">GIFT ACCESSORIES</a>
				      	</div>
				    </div>
			    </Col>
			    {/* <Col xs lg="3">
			    	<div className="categroyTileCover">
				      	<div className="catImg">
				      		<img
					            className="d-block w-100"
					            src={require('./../../images/2.jpg').default}
					            alt=""
					        />
					    </div>
				      	<div className=""></div>
				    </div>
			    </Col> */}
			</Row>
		</div>
	);
}

export default categoryTile;