import React, { useState } from "react";
import serve from "../../resources/serviceWithImg";
import { useHistory } from "react-router-dom";
import { Modal, ModalBody } from "reactstrap";

import { provide, seek } from "../../Images";

function Services(props) {
	const history = useHistory();
	const [isOpen, setModal] = useState(false);
	const [id, setId] = useState("");
	const toggleModal = () => {
		setModal(!isOpen);
	};
	const handleClick = (s) => {
		setId(s.key);
		toggleModal();
	};
	const handleS = () => {
		history.push(`/seekers/${id}`);
	};
	const handleR = () => {
		history.push(`/donors/${id}`);
	};

	const facility = serve.map((s) => {
		return (
			<div key={s.key} id="EachCard" className="col-4 col-md-2 paddingZero">
				<div className="serviceCard" onClick={() => handleClick(s)}>
					<img className="serviceImg mx-auto d-block" src={s.src} alt="" />

					<div className="serviceText">{s.service}</div>
				</div>
			</div>
		);
	});

	return (
		<div className="row align-item-center justify-content-center">
			{facility}
			<Modal
				id="HomeM"
				className="modal-dialog modal-xl modal-dialog-centered"
				isOpen={isOpen}
				toggle={toggleModal}
			>
				<ModalBody>
					<div className="row justify-content-center">
						<div className="col-11 col-sm-5 chooseCard" onClick={handleR}>
							<img className="chooseImg" src={provide} alt="" />
							<div className="chooseText">Choose to find resource</div>
						</div>
						<div className=" col-11 col-sm-5 chooseCard" onClick={handleS}>
							<img className="chooseImg" src={seek} alt="" />
							<div className="chooseText">Choose to check request</div>
						</div>
					</div>
				</ModalBody>
			</Modal>
		</div>
	);
}

export default Services;
