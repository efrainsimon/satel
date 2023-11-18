import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

export default function Footer(){
  const userId = useSelector((state) => state.signIn.userId);

    return (
        <div className="footer mt-10">
                <div className="container">
                    <div className="row">
                        <div className="footer-col-2">
                            <img src={require("../img/logo.jpeg")} className="block mx-auto mb-0 mb-20" />
                            <p>                              
                                Descubre la mejor selección de laptops, partes y piezas de computadoras en nuestra tienda online. 
                                Potencia tu equipo con componentes de calidad y rendimiento excepcionales. 
                                Desde potentes computadoras de escritorio y laptops hasta periféricos y accesorios, 
                                tenemos todo lo que necesitas para actualizar tu computadora. 
                                ¡Confía en nosotros para encontrar las piezas perfectas y llevar 
                                tu experiencia informática al siguiente nivel! Explora nuestro catálogo 
                                ahora y desata todo el potencial de tu equipo.
                            </p>
                        </div>
                        <div className="footer-col-3">
                            <h3>Información</h3>
                            <ul>
                                <li className="hover:cursor-pointer">
                                    <Link to="/products" className="text-white">
                                        Productos
                                    </Link>
                                </li>
                                <li className="hover:cursor-pointer">
                                    <Link to="/contactus" className="text-white">
                                        Contactanos
                                    </Link>
                                </li>
                            </ul>
                        </div>
                        <div className="footer-col-4">
                            <h3>Servicios</h3>
                            <ul>
                                <li className="hover:cursor-pointer">
                                    <Link to={userId ? "/profile" : "sign-in"} className="text-white">
                                       Mi cuenta 
                                    </Link>
                                </li>
                                <li className="hover:cursor-pointer">
                                    <Link to="/cart" className="text-white">
                                        Carrito
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <hr />
                    <p className="copyright">Copyright 2023</p>
                </div>
            </div>
    )
}