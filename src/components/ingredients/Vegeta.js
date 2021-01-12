// import React from 'react';
// import ApiVeg from '../../Api';
// import { Link } from 'react-router-dom';
// import Button from 'react-bootstrap/Button';
//
// const Vegeta = (props) => {
//     const vegeta = ApiVeg.get(
//         parseInt(props.match.params.number, 10)
//     )
//     if (!vegeta) {
//         return <div>Przepraszam, ale nie znalazłem takiego warzywa.</div>
//     }
//     return (
//         <div>
//             <h1>{vegeta.name} </h1>
//             <h5>Opis: {vegeta.discription}</h5>
//             <Link to="/funkcje/jak/warzywa"> <Button variant="success">Success</Button></Link>
//             <Link to="/funkcje/jak/warzywa"> <Button variant="success">Success</Button></Link>
//         </div>
//     )
// }
//
// export default Vegeta