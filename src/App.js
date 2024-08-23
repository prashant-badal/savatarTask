import styles from './AppContainer.module.css'
import './App.css';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css'
import CourselSection from './component/CourselSection';
import BlurredBackground from './component/BlurredBackground';

function App() {
  return (
    <>
    <div className={styles.appContainer}>
      <div className={styles.buttonImg}> <BlurredBackground/></div>
      <div className={styles.carouselPart}><CourselSection/></div>
    
    </div>
   
    </>
  );
}

export default App;
