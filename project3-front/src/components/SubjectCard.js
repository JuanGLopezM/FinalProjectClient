import { Link } from 'react-router-dom';

// We are deconstructing props object directly in the parentheses of the function
function SubjectCard({ title, description, _id }) {
	return (
		<div className="SubjectCard card">
			<Link to={`/subjects/${_id}`}>
				<h3>{title}</h3>
			</Link>
			<p>id: {_id}</p>
			<p style={{ maxWidth: '400px' }}>{description} </p>
		</div>
	);
}

export default SubjectCard;
