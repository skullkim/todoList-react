import logo from './logo.svg';
import './App.css';
import HeaderComponent from "./headerComponent";
import styles from "./styles/App-style.module.scss";

function App() {
  return (
   <div className={styles.div}>
        <HeaderComponent/>
   </div>
  );
}

export default App;
