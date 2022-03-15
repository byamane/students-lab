import Score from "./Score";

const Student = (props) => {
  return ( 
    <div className="card">
      <div className="card-body">
        <h1 className="card-title">
          {props.student.name}
        </h1>
        <p className="card-text">
          {props.student.bio}
        </p>
      
        {props.student.scores.map((score) =>
          <Score key={props.student.name} score={score}/>
        )}
      </div>
    </div>
  );
}
 
export default Student;