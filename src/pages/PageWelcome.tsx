import { useState, useEffect } from 'react';
import axios from 'axios';

const backendUrl = import.meta.env.VITE_BACKEND_URL;

export const PageWelcome = () => {
	const [jobs, setJobs] = useState([]);

	useEffect(() => {
		(async () => {
			setJobs((await axios.get(`${backendUrl}/jobs`)).data);
		})();
	}, []);
	return (
		<div className="pageWelcome">
			<p>There are {jobs.length} job listings:</p>
		</div>
	);
};