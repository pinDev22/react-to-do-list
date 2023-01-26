
import Nav from './components/Nav';
import ToDo from './components/ToDo';
import StudentList from './components/List';

function App() {
  return (
    <>
        <Nav />
        <div className="container">
            <ToDo />
            <StudentList />
        </div>
    </>
  )
}

export default App;
