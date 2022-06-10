import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import Navbar from '../components/Navbar';
import './Home.css';
import Pets from '../components/Pets';

const Home: React.FC = () => {
  return (
    <IonPage >
      <Navbar/>
      <IonContent>
        <Pets/>
      </IonContent>
    </IonPage>
  );
};

export default Home;
