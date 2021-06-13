import React, { useState } from "react";
import { BiLocationPlus, BiPhoneCall, BiRightArrowAlt } from "react-icons/bi";
import { GrMail } from "react-icons/gr";
import { Modal, ModalBody } from "reactstrap";
import moment from "moment";

function DonorCard({ donor }) {
	const user = donor.user;
	const [modal, setModal] = useState(false);
	const toggleModal = () => {
		setModal(!modal);
	};

	if (donor !== null) {
		return (
			<div>
				<div className="dispCard row">
					<div className="col-9 text-wrap facilityText">{donor.services}</div>
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
					<div className="col-12 text-wrap restText cityText">
						<BiLocationPlus />{" "}
						{donor.city.split(" / ").map((v) => (
							<span>{v} | </span>
						))}
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
						<span className=" tymText">{moment(donor.updatedAt).startOf("minute").fromNow()}</span>{" "}
					</div>
				</div>
				<Modal className="modal-dialog modal-dialog-centered" isOpen={modal} toggle={toggleModal}>
					<ModalBody>
						<div className="row">
							<div className="col-12 text-wrap facilityText">Facility Provided : {donor.services}</div>
							<div className="col-12 text-wrap restText cityText">
								<BiLocationPlus />{" "}
								{donor.city.split(" / ").map((v) => (
									<span>{v} | </span>
								))}
							</div>
							{donor.extra ? 
							<>
							<div className="col-12 restText">
							{donor.extra[0] ? (
								<span>
									{donor.extra[0].key} : {donor.extra[0].value}
								</span>
							) : null}
						</div>
						<div className="col-12 restText">
							{donor.extra[1] ? (
								<span>
									{donor.extra[1].key} : {donor.extra[1].value}
								</span>
							) : null}
						</div>
						</>
							:null}
							
							<div className="col-12 restText text-wrap text-break">
								{donor.comments ? "Description : " + donor.comments : null}
								{/* {donor.comments ?  : null} */}
							</div>
							<div className="col-12 restText">
								{donor.organizationName ? donor.organizationName : user.name}
							</div>
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
									}).format(new Date(Date.parse(donor.updatedAt)))}
								</span>
							</div>
						</div>
					</ModalBody>
				</Modal>
			</div>
		);
	} else {
		return <div></div>;
	}
}
export default DonorCard;
