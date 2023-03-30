import './App.scss';
import Header from './components/Header/Header';
import { Outlet, Link } from 'react-router-dom';


// class App extends React.Component {
//   render() {
//     return (
//       <div className='app-container'>
//         <MyComponent></MyComponent>
//       </div>
//     );
//   }
// }

//function component

const App = () => {
  return (
    <div className="app-container">
      <div className='header-container'>
        <Header />
      </div>
      <div className='main-container'>
        <div className='sidenav-container'>
        </div>
      </div>
      <div className='app-content'>
        <Outlet/>
      </div>
    </div>
  );
}

export default App;
