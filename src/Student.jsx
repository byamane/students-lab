const Student = (props) => {
  return ( 
    <>
      <h2>
        {props.student.name}
      </h2>
      <p>
        {props.student.bio}
      </p>
    </>
  );
}
 
export default Student;