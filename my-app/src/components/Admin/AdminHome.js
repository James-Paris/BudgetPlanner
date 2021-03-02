import React, { useState } from 'react';
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';

function ManagerHome(props) {
	const initData = {
		id: props.projects.length + 1,
		client: '',
		project_name: '',
		project_budget: 0,
		approval: 'Waiting approval',
	};
	const [project, setProject] = useState(initData);

	const handleSubmit = (event) => {
		props.setProjects([...props.projects, project]);
		setProject(initData);
	};

	const handleChange = (event) => {
		event.persist();
		if (event.target.name === 'project_budget') {
			console.log('changing to string ' + typeof Number(event.target.value));
			setProject({
				...project,
				[event.target.name]: Number(event.target.value),
			});
		} else {
			setProject({ ...project, [event.target.name]: event.target.value });
		}
	};

	return (
		<div>
			<div className='manager-home'>
				<Table striped bordered variant='light' class="myTable">
					<thead>
						<tr>
							<th>Client Name</th>
							<th>Project Name</th>
							<th>Budget</th>
						</tr>
					</thead>
					<tbody>
						<tr>
							<td>
								<input
									type='text'
									placeholder='Enter Client Name'
									name='client'
									value={project.client}
									onChange={handleChange}
								/>
							</td>
							<td>
								<input
									type='text'
									placeholder='Enter Project Name'
									value={project.project_name}
									name='project_name'
									onChange={handleChange}
								/>
							</td>
							<td>
								<input
									type='number'
									placeholder='Requested Budget'
									name='project_budget'
									onChange={handleChange}
								/>
							</td>
						</tr>
					</tbody>
				</Table>
				<div className='add-button'>
					<Button variant='secondary' size='small' block onClick={handleSubmit}>
						Add Project
					</Button>
				</div>
				<br></br>
				<h3>On-going Projects</h3>
				<Table striped bordered variant='light'>
					<thead>
						<tr>
							<th>Client Name</th>
							<th>Project Name</th>
							<th>Budget</th>
							<th>Approval</th>
						</tr>
					</thead>
					<tbody>
						{props.projects.map((project) => (
							<tr key={project.id}>
								<td>{project.client}</td>
								<td>{project.project_name}</td>
								<td>${project.project_budget}</td>
								<td>{project.approval}</td>
							</tr>
						))}
					</tbody>
				</Table>
			</div>
		</div>
	);
}

export default ManagerHome;
