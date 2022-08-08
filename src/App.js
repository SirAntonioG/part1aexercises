const Header = (props) => {
  return (
    <h1>{props.course.name}</h1>
  );
}
// Refactor the Content component
const Part = (props) => {
  return(
    <p>
      {props.part} {props.exercises}
    </p>
  );
}
// 
const Content = (props) => {
  return(
    <>
      {props.course.parts.map((item,index) => {
        return(
          <Part key={index} part={item.name} exercises={item.exercises}/>
        );
      })}
    </>
  );
}
const Total = (props) => {
  const exercises = props.course.parts.reduce((sum,item) => 
    sum += item.exercises, 0
  )
  return(
    <p>
      Number of exercises {exercises}
    </p>
  );
}

const App = () => {
  const course = {
    name: 'Half Stack application development',
    parts: [
        {
          name: 'Fundamentals of React',
          exercises : 10
        },
        {
          name: 'Using props to pass data',
          exercises: 7
        },
        {
          name: 'State of a component',
          exercises: 14
        },
        {
          name: 'Modificado',
          exercises: 14
        },
    ]
  }
  return (
    <div>
      <Header course={course} />
      <Content course={course} />
      <Total course={course} />
    </div>
  )
}

export default App