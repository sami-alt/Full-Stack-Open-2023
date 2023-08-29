const Header = (props) => {
  console.log('header',props.course.name)
  return (
    <div>
      <h1>{props.course.name}</h1>
    </div>
  )
  
}

const Part = (props) => {

  return(
    <div>
      <p1>{props.part} {props.exercises}</p1>
    </div>
  )
}

const Content = (props) => {
  console.log('content',props)
  return (
    <div>
      <Part part={props.parts[0].name} exercises={props.parts[0].exercises}/>
      <Part part={props.parts[1].name} exercises={props.parts[1].exercises}/>
      <Part part={props.parts[2].name} exercises={props.parts[2].exercises}/>
    </div>
  )
}

const Total = (props) => {
  console.log('total', props)
  return (
    <div>
      <p1>{props.exercises[0].exercises + props.exercises[1].exercises + props.exercises[2].exercises}</p1>
    </div>
  )
}


const App = () => {
  const course = {
    name: 'Half Stack application development',
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10
      },
      {
        name: 'Using props to pass data',
        exercises: 7
      },
      {
        name: 'State of a component',
        exercises: 14
      }
    ]
  }

  return(
  <div>
    <Header course={course} />
    <Content parts={course.parts}/>
    <Total exercises={course.parts} />
  </div>
  )
}

export default App