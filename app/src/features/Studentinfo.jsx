function StudentInfo() {
	return (
		<div style={{ textAlign: 'center', marginTop: '50px' }}>
			<h2>Савосин Никита Александрович</h2>
			<h2>25 лет</h2>
			<img src={process.env.PUBLIC_URL + '/photo.jpg'} alt='clotilde'></img>
		</div>
	);
}
export default StudentInfo;
