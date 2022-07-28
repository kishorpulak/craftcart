import React from 'react';
import {Form, Button, Col, fieldset, Row} from 'react-bootstrap';
import Slider from './../Slider';
import CategoryTile from './../CategoryTile';
import './content.css';

function Content() {
	return(
		<>
			<Slider />
			<div className="CategoryTileCover">
				<CategoryTile />
			</div>
		</>
	);
}

export default Content;