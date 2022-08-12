import React from 'react';
import '../../../scss/components/_footer.css';
import { FOOTER_DATA } from '../../../config/FooterConfig/config.footer';

const Footer = () => {
    return (
        <footer className="bg-light pt-5 pb-4 mt-5">
            <div className="container">
                {FOOTER_DATA.map((props) => (
                    <>
                        <div className="row">
                            <div className="col-md-5 mt-3">
                                <div className="row">
                                    <div className="col-md-8">
                                        <h4 className="mb-4">
                                            {props.footerHeading}
                                        </h4>
                                        <p className="aboutHeading">
                                            {props.footerPara}
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mt-3">
                                <h4 className="mb-4">
                                    {props.footerNavigation}
                                </h4>
                                <p>
                                    <a href="#">{props.footerHome}</a>
                                </p>
                                <p>
                                    <a href="#">{props.footerFarm}</a>
                                </p>
                                <p>
                                    <a href="#">{props.footerCommunity}</a>
                                </p>
                            </div>
                            <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mt-3">
                                <h4 className="mb-4">
                                    {props.footerCategories}
                                </h4>
                                <p>
                                    <i className="fa fa-angle-right"></i>
                                    <a href="#">{props.footerDefi}</a>
                                </p>
                                <p>
                                    <i className="fa fa-angle-right"></i>
                                    <a href="#">{props.footerUpd}</a>
                                </p>
                                <p>
                                    <i className="fa fa-angle-right"></i>
                                    <a href="#">{props.footerProduct}</a>
                                </p>
                            </div>
                            <hr className="mb-4" />
                        </div>

                        <div className="text-center p-4 social">
                            <hr className="mb-4" />
                            {props.footerCopyRight}
                        </div>
                    </>
                ))}
            </div>
        </footer>
    );
};

export default Footer;
