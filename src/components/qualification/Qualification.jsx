import React from "react";
import "./qualification.css";


const Qualification = () => {
  return (
    <section className="qualification section">
        <h2 className="section__title">Qualification</h2>
        <span className="section__subtitle">My personal journey</span>

        <div className="qualification__container container">
            <div className="qulification__tabs">
                <div className="qualification__button qualification__active button--flex">
                    <i className="uil uil-graduation-cap qualification__icon"></i>{" "}
                    Education
                </div>

                <div className="qualification__button button--flex">
                    <i className="uill uil-briefcase-alt qualification__icon"></i>{" "}
                    Experience
                </div>
            </div>

            <div className="qulification__sections">
                <div className="qiualification__content">
                    <div className="qualification__data">
                        <div></div>

                        <div>
                            <span className="qualification__rounder"></span>
                            <span className="qualification__line"></span>
                        </div>

                        <div>
                            <h3 className="qualification__title"></h3>
                            <span className="qualification__subtitle">Lovely Professional University - Institute</span>
                            <div className="qualification__calender">
                                <i className="uil uil-calender-alt"></i> 2020 - Present
                            </div>
                        </div>
                    </div> 
                </div>
            </div>
        </div>
    </section>
  );
};

export default Qualification;
