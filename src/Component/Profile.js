import React, { useCallback, useEffect, useState } from "react";
import { Button, Col, Form, Image, Row, Spinner } from "react-bootstrap";
import './profile.css'
const Profile = () => {
	const [info, setInfo] = useState();
	const [results, setResults] = useState();
	const [isLoading, setIsLoading] = useState(true);
	const [error, setError] = useState();

	const load = useCallback(async () => {
		setIsLoading(true);

		fetch("https://randomuser.me/api/").then(async (res) => {
			const data = await res.json();
			setResults(data.results[0]);
			setIsLoading(false);
		});
	
	}, []);
	useEffect(() => {
		load();
	}, [load]);
	return isLoading ? (
		<Spinner animation="border" />
	) : (
		<div>
			{" "}
			<Button>Update</Button>
			<Form>
				<Form.Group as={Row} className="mb-3" controlId="formPlaintextEmail">
					<Form.Label column sm="2">
						Name
					</Form.Label>
					<Col sm="10">
						<Form.Control
							plaintext
							readOnly
							defaultValue={
								results.name.title +
								" " +
								results.name.first +
								" " +
								results.name.last
							}
						/>
					</Col>
				</Form.Group>
				<Form.Group as={Row} className="mb-3" controlId="formPlaintextEmail">
					<Form.Label column sm="2">
						Gender
					</Form.Label>
					<Col sm="10">
						<Form.Control plaintext readOnly defaultValue={results?.gender} />
					</Col>
				</Form.Group>
				<Form.Group as={Row} className="mb-3" controlId="formPlaintextEmail">
					<Form.Label column sm="2">
						Location
					</Form.Label>
					<Col sm="10">
						<Form.Control
							plaintext
							readOnly
							defaultValue={
								results?.location?.street?.number.toString() +
								", " +
								results?.location?.street?.name +
								", " +
								results?.location?.city +
								", " +
								results?.location?.state +
								", " +
								results?.location?.country
							}
						/>
					</Col>
				</Form.Group>
				<Form.Group as={Row} className="mb-3" controlId="formPlaintextEmail">
					<Form.Label column sm="2">
						Postcode
					</Form.Label>
					<Col sm="10">
						<Form.Control
							plaintext
							readOnly
							defaultValue={results.location.postcode}
						/>
					</Col>
				</Form.Group>
				<Form.Group as={Row} className="mb-3" controlId="formPlaintextEmail">
					<Form.Label column sm="2">
						Latitude
					</Form.Label>
					<Col sm="10">
						<Form.Control
							plaintext
							readOnly
							defaultValue={results?.location?.coordinates.latitude}
						/>
					</Col>
				</Form.Group>
				<Form.Group as={Row} className="mb-3" controlId="formPlaintextEmail">
					<Form.Label column sm="2">
						Longitute
					</Form.Label>
					<Col sm="10">
						<Form.Control
							plaintext
							readOnly
							defaultValue={results?.location?.coordinates.longitude}
						/>
					</Col>
				</Form.Group>
				<Form.Group as={Row} className="mb-3" controlId="formPlaintextEmail">
					<Form.Label column sm="2">
						Email
					</Form.Label>
					<Col sm="10">
						<Form.Control plaintext readOnly defaultValue={results?.email} />
					</Col>
				</Form.Group>
				<Form.Group as={Row} className="mb-3" controlId="formPlaintextEmail">
					<Form.Label column sm="2">
						User id
					</Form.Label>
					<Col sm="10">
						<Form.Control
							plaintext
							readOnly
							defaultValue={results?.login.uuid}
						/>
					</Col>
				</Form.Group>
				<Form.Group as={Row} className="mb-3" controlId="formPlaintextEmail">
					<Form.Label column sm="2">
						Username
					</Form.Label>
					<Col sm="10">
						<Form.Control
							plaintext
							readOnly
							defaultValue={results?.login.username}
						/>
					</Col>
				</Form.Group>
				<Form.Group as={Row} className="mb-3" controlId="formPlaintextEmail">
					<Form.Label column sm="2">
						DOB
					</Form.Label>
					<Col sm="10">
						<Form.Control plaintext readOnly defaultValue={results?.dob.date} />
					</Col>
				</Form.Group>
				<Form.Group as={Row} className="mb-3" controlId="formPlaintextEmail">
					<Form.Label column sm="2">
						Age
					</Form.Label>
					<Col sm="10">
						<Form.Control plaintext readOnly defaultValue={results?.dob.age} />
					</Col>
				</Form.Group>
				<Form.Group as={Row} className="mb-3" controlId="formPlaintextEmail">
					<Form.Label column sm="2">
						Phone
					</Form.Label>
					<Col sm="10">
						<Form.Control plaintext readOnly defaultValue={results?.phone} />
					</Col>
				</Form.Group>
				<Form.Group as={Row} className="mb-3" controlId="formPlaintextEmail">
					<Form.Label column sm="2">
						Cell
					</Form.Label>
					<Col sm="10">
						<Form.Control plaintext readOnly defaultValue={results?.cell} />
					</Col>
				</Form.Group>
				<Form.Group as={Row} className="mb-3" controlId="formPlaintextEmail">
					<Form.Label column sm="2">
						Picture
					</Form.Label>
					<Col sm="10">
						<Image src={results.picture.thumbnail} thumbnail={true} />
					</Col>
				</Form.Group>
				<Form.Group as={Row} className="mb-3" controlId="formPlaintextEmail">
					<Form.Label column sm="2">
						NAT
					</Form.Label>
					<Col sm="10">
						<Form.Control plaintext readOnly defaultValue={results?.nat} />
					</Col>
				</Form.Group>
			</Form>
		</div>
	);
};

export default Profile;
