import React from "react";

import { Card, CardBody, Col, Button } from "reactstrap";

import { Fade } from "react-reveal";

const ProjectsCard = ({ data }) => {
	return (
		<Col lg="6">
			<Fade left duration={1000} distance="40px">
				<Card className="shadow-lg--hover shadow mt-4">
					<CardBody>
						<div className="d-flex px-3">
							<div className="pl-4">
								<h3>{data.name}</h3>
								<p className="description mt-3">{data.desc}</p>
								{data.github ? (
									<Button
										className="btn-icon"
										color="github"
										href={data.github}
										target="_blank"
										rel="noopener"
										aria-label="Github"
									>
										<span className="btn-inner--icon">
											<i className="fa fa-github mr-1" />
											  
										</span>
										<span className="nav-link-inner--text ml-1">
											Repo
										</span>
									</Button>
								) : null}
								{data.link ? (
									<Button
										className="btn-icon"
										color="danger"
										href={data.link}
										target="_blank"
										rel="noopener" 
										aria-label="Blog"
									>
										<span className="btn-inner--icon">
											<i className="fa fa-google mr-1" />
										</span>
										<span className="nav-link-inner--text ml-1">
											Blog
										</span>
									</Button>
								) : null}
								{data.linkedin ? (
									<Button
										className="btn-icon"
										color="primary"
										href={data.linkedin}
										target="_blank"
										rel="noopener" aria-label="Linkedin"
									>
										<span className="btn-inner--icon">
											<i className="fa fa-linkedin mr-1" />
										</span>
										<span className="nav-link-inner--text ml-1">
											Linkedin
										</span>
									</Button>
								) : null}
							</div>
						</div>
					</CardBody>
				</Card>
			</Fade>
		</Col>
	);
};

export default ProjectsCard;
