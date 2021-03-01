import React from 'react'; 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export const FooterRespaldo = () => {
    return (
        
        <footer className="page-footer bg-dark">
            <div className="bg-success">
                <div className="container">
                    <div className="row py-4 d-flex align-items-center">
                        <div className="col-md-12 text-center">
                            <a href="google.com" className="text-white mr-4"><FontAwesomeIcon icon={['fab', 'facebook-f']} /></a>
                            <a href="google.com" className="text-white mr-4"><FontAwesomeIcon icon={['fab', 'twitter']} /></a>
                            <a href="google.com" className="text-white mr-4"><FontAwesomeIcon icon={['fab', 'google-plus-g']} /></a>
                            <a href="google.com" className="text-white mr-4"><FontAwesomeIcon icon={['fab', 'linkedin-in']} /></a>
                            <a href="google.com" className="text-white"><FontAwesomeIcon icon={['fab', 'instagram']} /></a>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container text-center text-md-left mt-5 text-white">
                <div className="row">
                    <div className="col-md-3 mx-auto mb-4">
                        <h6 className="text-uppercase font-weight-bold">The providers</h6>
                        <hr className="bg-success mb-4 mt-0 d-inline-block mx-auto" style={{width:125, height: 2}} />
                        <p className="mt-2">Lisa ksaj dlkasdls adlsal ds ldakjasd lk asjlkd jaslk djas jlasdkl asdlkjsdalkjdsjka  da sdasdasdasd.</p>
                    </div>
                    <div className="col-md-2 mx-auto mb-4">
                        <h6 className="text-uppercase font-weight-bold">Products</h6>
                        <hr className="bg-success mb-4 mt-0 d-inline-block mx-auto" style={{width:85, height: 2}} />
                        <ul className="list-unstyled">
                            <li className="my-2 text-white"><a href="google.com" className="text-white">HTML 5</a></li>
                            <li className="my-2 text-white"><a href="google.com" className="text-white">CSS 3</a></li>
                            <li className="my-2 text-white"><a href="google.com" className="text-white">Bootstrap 4</a></li>
                            <li className="my-2 text-white"><a href="google.com" className="text-white">JavaScript</a></li>
                        </ul>
                    </div>
                    <div className="col-md-2 mx-auto mb-4">
                        <h6 className="text-uppercase font-weight-bold">Usefull links</h6>
                        <hr className="bg-success mb-4 mt-0 d-inline-block mx-auto" style={{width:110, height: 2}} />
                        <ul className="list-unstyled">
                            <li className="my-2"><a href="google.com" className="text-white">Home</a></li>
                            <li className="my-2"><a href="google.com" className="text-white">About</a></li>
                            <li className="my-2"><a href="google.com" className="text-white">Services</a></li>
                            <li className="my-2"><a href="google.com" className="text-white">Contact</a></li>
                        </ul>
                    </div>
                    <div className="col-md-3 mx-auto mb-4">
                        <h6 className="text-uppercase font-weight-bold">Contact</h6>
                        <hr className="bg-success mb-4 mt-0 d-inline-block mx-auto" style={{width:75, height: 2}} />
                        <ul className="list-unstyled">
                            <li className="my-2"><FontAwesomeIcon icon={['fas', 'home']} className="mr-3" />Karachi, street 3 PK</li>
                            <li className="my-2"><FontAwesomeIcon icon={['fas', 'envelope']} className="mr-3" />jfernandez@react.com</li>
                            <li className="my-2"><FontAwesomeIcon icon={['fas', 'phone']} className="mr-3" />+8999554785</li>
                            <li className="my-2"><FontAwesomeIcon icon={['fas', 'print']} className="mr-3" />+8999876712</li>
                        </ul>
                    </div>
                </div>
                <div className="footer-copyright text-center py-3">
                        <p> &copy; Copyright <a href="google.com" className="ml-1 text-white">theprovider.com</a>
                        </p>
                        <p>Designed By The Providers</p>
                    </div>
            </div>
        </footer>
        
    )
}
