import './App.scss';
import Header from './components/Header/Header';



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
      <Header></Header>
    </div>
  );
}

export default App;
