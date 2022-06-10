import react, {useState, useEffect} from 'react';
import axios from 'axios';
import { Modal, Button, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import Adopted from './Adopted.js';

export default function Pets(){
    const [ pets, setPets ] = useState([]);
    const [ exists, setExist ] = useState(false);
    const [ toggleModal, setToggleModal ] = useState(false);
    const [ petId, setPetId ] = useState([]);

    const handleModal = () => {
        setToggleModal(true);
    }

    const getData = async () => {
        const res = await axios.get("https://peaceful-waters-05412.herokuapp.com/pets")
        if (res.status !== 200 ) return []
    
        return res.data;
    }
    
    const HandleData = async () => {
        const data = await getData();
        setPets(data)
        setPetId(data.id)
    }

    useEffect(()=>{
        if(!exists) HandleData();
      },[exists])
    
    return(
        <>
        <nav className="navbar navbar-light" style={{backgroundColor: "#ff8533"}}>
            <div className="container-fluid">
                <a className="navbar-brand" href="/">Adopta un perrito</a>
                {/*<button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarText">
                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                    <li className="nav-item">
                    <a className="nav-link active" aria-current="page" href="/">Home</a>
                    </li>
                    <li className="nav-item">
                    <a className="nav-link" href="/">Features</a>
                    </li>
                    <li className="nav-item">
                    <a className="nav-link" href="/">Pricing</a>
                    </li>
                </ul>
                <span className="navbar-text">
                    Navbar text with an inline element
                </span>
    </div>*/}
            </div>
        </nav>
        <Adopted/>
            <div className="container">
              <div className="container-fluid">
                <div className="row py-4">
                    {console.log(pets)}
                {
                    pets.map((i, index) => {
                        return(
                            pets[index].vacuum == true ?
                            <div className="col-12 py-2">
                                <div className="card" style={{width: '100%', borderRadius:"5px 5px 0 0"}}>
                                <img src={pets[index].image} class="card-img-top" alt="..."/>
                                <div className="card-body">
                                    <h5 className="card-title">{pets[index].name}</h5>
                                    <h6 className="card-subtitle mb-2 text-muted">{pets[index].race}</h6>
                                    <p className="card-subtitle mb-2 text-muted">Edad: {pets[index].years}</p>
                                </div>
                                </div>
                                <button 
                                    type="button" 
                                    className='btn btn-warning' 
                                    style={{width: '100%', borderRadius:"0 0 5px 5px"}}
                                    
                                >
                                    Adoptar
                                </button>
                            </div>
                            : 
                            <div className="col-12 py-2">
                                <div className="card" style={{width: '100%', borderRadius:"5px 5px 0 0"}}>
                                <img src={pets[index].image} class="card-img-top" alt="..."/>
                                    <div className="card-body">
                                        <h5 className="card-title">ESTE PERRITO HA SIDO ADOPTADO</h5>
                                    </div>
                                </div>
                            </div>
                        )
                    })
                }
                    </div>
                  </div>
            </div>
        </>
    )
}