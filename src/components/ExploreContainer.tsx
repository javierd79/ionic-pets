 import './ExploreContainer.css';
import axios from 'axios';

interface ContainerProps { }

// let pets = null;
// let existPets = false;
// const getQuery = async() => {
//   const res = await axios.get("https://peaceful-waters-05412.herokuapp.com/pets") 
//   if (res.status !== 200) return [];
//   pets = res.data
//   return res.data;
// }


const ExploreContainer: React.FC<ContainerProps> = () => {
  return (
    <div className="container">
      <div className="container-fluid">
        <div className="row">
          <div className="col-6">
            <div className="card" style={{width: '100%'}}>
              <div className="card-body">
                <h5 className="card-title">Card title</h5>
                <h6 className="card-subtitle mb-2 text-muted">Card subtitle</h6>
                <p className="card-text"></p>
                <a href="/" className="card-link">Card link</a>
                <a href="/" className="card-link">Another link</a>
              </div>
            </div>
          </div>
          <div className="col-6">
            <div className="card" style={{width: '100%'}}>
              <div className="card-body">
                  <h5 className="card-title">Card title</h5>
                  <h6 className="card-subtitle mb-2 text-muted">Card subtitle</h6>
                  <p className="card-text"></p>
                  <a href="/" className="card-link">Card link</a>
                  <a href="/" className="card-link">Another link</a>
                </div>
              </div>
              </div>
            </div>
          </div>
    </div>
  );
};

export default ExploreContainer;
