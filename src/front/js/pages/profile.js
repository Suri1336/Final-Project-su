// import React, { useContext, useEffect } from "react";
// import { Context } from "../store/appContext";
// import "../../styles/profile.css";
// import { Link } from "react-router-dom";
// export const Profile = () => {
//   const { store, actions } = useContext(Context);
//   const firstname = store.randomUser[0]?.name.first
//   useEffect(() => {
//     actions.fetchRandomUser()
//   }, [])
//   const handleDeleteFav = (item) => {
//     actions.deleteFav(item);
// };
//   console.log(store.randomUser[0])
//   console.log(firstname)
//   return (
//     <div className="profileMain">
//       <div className="container pt-5">
//         <div className="row mt-5 align-item-center justify-content-between">

//           <img src="https://xsgames.co/randomusers/avatar.php?g=female" className="rounded-circle col-4 m-3 p-2" alt="pic" />
//           <div className="profile col-6 m-4 p-3">What you have colored
//           </div>
//         </div>
//         <div className="row mt-5 align-item-center justify-content-between">
//           <div className="profile col-4 m-4 p-3">
//             <div>Name:</div>
//             <div>{store.randomUser[0]?.name.first}</div>
//             <div>Date Of Birth</div>
//             <div>02/12</div>
//             <div>Color streak</div>
//             <div>5 days</div>
//             </div>
//           <div className="profile col-6 m-4 p-3">Wish to do later
//             <div>
//             <ul>
//               {store.fav?.map((x, index) => (
//                 <li key={index} onClick={() => handleDeleteFav(x)}>
//                   <a className="dropdown-item" href="#">
//                     {x}
//                   </a>
//                   x
//                 </li>
//               ))}
//             </ul>

//             </div>
//             </div>
//           <Link to="/sheets" className="purple btn text-light profilebtn">Lets Color</Link>
//         </div>
//       </div>
//     </div>
//   )
// }

// import React, { useContext, useEffect, useState } from "react";
// import { Context } from "../store/appContext";
// import "../../styles/profile.css";
// import { Link } from "react-router-dom";

// export const Profile = () => {
//     const { store, actions } = useContext(Context);
//     const [favorites, setFavorites] = useState(store.fav); // Use state to manage the favorites list

//     const handleDeleteFav = (item) => {
//         actions.deleteFav(item);
//     };

//     useEffect(() => {
//         setFavorites(store.fav); // Update the favorites state when the store changes
//     }, [store.fav]);

//     useEffect(() => {
//         actions.fetchRandomUser();
//     }, []);

//     return (
//         <div className="profileMain">
//             <div className="container pt-5">
//                 <div className="row mt-5 align-item-center justify-content-between">
//                     <img src="https://xsgames.co/randomusers/avatar.php?g=female" className="rounded-circle col-4 m-3 p-2" alt="pic" />
//                     <div className="profile col-6 m-4 p-3">What you have colored</div>
//                 </div>
//                 <div className="row mt-5 align-item-center justify-content-between">
//                     <div className="profile col-4 m-4 p-3">
//                         <div>Name:</div>
//                         <div>{store.randomUser[0]?.name.first}</div>
//                         <div>Date Of Birth</div>
//                         <div>02/12</div>
//                         <div>Color streak</div>
//                         <div>5 days</div>
//                     </div>
//                     <div className="profile col-6 m-4 p-3">Wish to do later
//                         <ul>
//                             {favorites?.map((x, index) => (
//                                 <li key={index} onClick={() => handleDeleteFav(x)}>
//                                     <a className="dropdown-item" href="#">{x}</a> x
//                                 </li>
//                             ))}
//                         </ul>
//                     </div>
//                     <Link to="/sheets" className="purple btn text-light profilebtn">Lets Color</Link>
//                 </div>
//             </div>
//         </div>
//     );
// };
import React, { useContext, useEffect, useState } from "react";
import { Context } from "../store/appContext";
import "../../styles/profile.css";
import { Link } from "react-router-dom";
import pic from "../../img/Kawaii5.jpg"; 
import pic2 from  "../../img/kawaiiUrl2.jpeg";
import pic3 from  "../../img/kawaii4.jpg";
import coloredpic from "../../img/coloring_image.png";

export const Profile = () => {
    const { store, actions } = useContext(Context);
    const [favorites, setFavorites] = useState(store.fav);

    const handleDeleteFav = (item) => {
        actions.deleteFav(item);
    };

    useEffect(() => {
        setFavorites(store.fav);
    }, [store.fav]);

    useEffect(() => {
        actions.fetchRandomUser();
    }, []);

    return (
        <div className="profileMain">
            <div className="container pt-5">
                <div className="row mt-5 align-item-center justify-content-between">
                    <img src="https://xsgames.co/randomusers/avatar.php?g=female" className="rounded-circle col-4 m-3 p-2" alt="pic" />
                    <div className="profile col-6 m-5 p-3">What you have colored
                    <img className="proimgcolored m-5  " src={coloredpic}/></div>

                </div>
                <div className="row mt-5 align-item-center justify-content-between">
                    <div className="profile col-4 m-4 p-3">
                        <div>Name:</div>
                        <div>{store.randomUser[0]?.name.first}</div>
                        <div>Date Of Birth</div>
                        <div>02/12</div>
                        <div>Color streak</div>
                        <div>5 days</div>
                    </div>
                    <div className="profile col-6 m-4 p-3">
                      <h4>Wish to do later</h4>
                    
                        {/* <ul> 
                            {favorites?.map((x, index) => (
                                <li key={index} onClick={() => handleDeleteFav(x)}>
                                    <img src={x.picUrl} alt={"Favorite " + (index + 1)} className="fav-image" />
                                    <button>x</button>
                                </li>
                        </ul>
                            ))} */}
                            
                         <img  className="proimg m-1 " src={pic}/> 
                         <img  className="proimg m-1" src={pic2}/> 
                         <img  className="proimg m-1" src={pic3}/> 
                    </div>
                    <Link to="/sheets" className="purple btn text-light profilebtn">Lets Color</Link>
                </div>
            </div>
        </div>
    );
};
