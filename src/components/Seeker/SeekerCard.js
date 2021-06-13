import React, { useState } from "react";
import { BiLocationPlus, BiPhoneCall, BiRightArrowAlt } from "react-icons/bi";
import { GrMail } from "react-icons/gr";
import { Modal, ModalBody } from "reactstrap";
import moment from "moment";

function SeekerCard({ seeker }) {
	const user = seeker.user;
	const [modal, setModal] = useState(false);
	const toggleModal = () => {
		setModal(!modal);
	};
	if (seeker !== null) {
		return (
			<div>
				<div>
					<div className="dispCard row">
						<div className="col-9 facilityText text-wrap">{seeker.services}</div>
						<div className="col-3 cDetailText">
							<span
								onClick={() => {
									toggleModal();
								}}
							>
								| See Details
								<BiRightArrowAlt />{" "}
							</span>
						</div>
						<div className="col-12 restText text-wrap cityText">
							<BiLocationPlus /> {seeker.city}
						</div>
						<div className="col-12 restText">
							<BiPhoneCall />
							{"  "}
							{user.mobileNumber}
						</div>
						<div className="col-12 restText">
							{user.email ? <GrMail /> : null} {user.email ? user.email : null}
						</div>
						<div className="col-12">
							<span className=" tymText">{moment(seeker.updatedAt).startOf("minute").fromNow()}</span>{" "}
						</div>
					</div>
					<Modal className="modal-dialog modal-dialog-centered" isOpen={modal} toggle={toggleModal}>
						<ModalBody>
							<div className="row">
								<div className="col-12 facilityText text-wrap">{seeker.services}</div>
								<div className="col-12 restText text-wrap cityText">
									<BiLocationPlus /> {seeker.city}
								</div>
								{seeker.extra[0] ? (
									<div className="col-12 restText">
										{" "}
										<span>
											{seeker.extra[0].key} : {seeker.extra[0].value}
										</span>{" "}
									</div>
								) : null}
								{seeker.extra[1] ? (
									<div className="col-12 restText">
										<span>
											{seeker.extra[1].key} : {seeker.extra[1].value}
										</span>{" "}
									</div>
								) : null}
								<div className="col-12 restText text-wrap text-break">
									{seeker.comments ? "Description : " + seeker.comments : null}
									{/* {seeker.comments ?  : null} */}
								</div>
								<div className="col-12 restText">{user.name}</div>
								<div className="col-12 restText">
									<BiPhoneCall />
									{"  "}
									{user.mobileNumber}
								</div>
								<div className="col-12 restText">
									{user.email ? <GrMail /> : null} {user.email ? user.email : null}
								</div>
								<div className="col-12 restText">
									Updated On:{" "}
									<span>
										{new Intl.DateTimeFormat("default", {
											year: "numeric",
											month: "numeric",
											day: "numeric",
											hour: "numeric",
											minute: "numeric",
										}).format(new Date(Date.parse(seeker.updatedAt)))}
									</span>
								</div>
							</div>
						</ModalBody>
					</Modal>
				</div>
			</div>
		);
	} else {
		return <div></div>;
	}
}
export default SeekerCard;
