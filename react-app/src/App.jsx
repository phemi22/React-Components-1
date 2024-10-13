import Button from "./Button.jsx"
import Card from "./Card.jsx"
import Sidebar from "./Sidebar.jsx"

function App() {
  return(
    <>
      <Button />
      <Card />
      <Sidebar />
    </>
    
  )
}

export default App


// Functional components
// Uppercase letter for the first character of a component's name
// When we want to use a component that we export, we call the components by writing it as <App />, <Button />, <Form />
// You can only return one HTML elements in the return statement