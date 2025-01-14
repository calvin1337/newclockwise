import React from 'react'
import {Row, Col, Container} from "react-bootstrap"
import "./aboutIntro.css";

function AboutIntro() {
    return (
        <section className="homeSections">
            <Container>
                <Row>
                    <Col md="6" sm="12">
                    <div className="sectionTitle">
                        <span>About us</span>
                        <h2>Who are we</h2>
                    </div>
                    <div className="aboutInfo">
                        <p>
                        Clockwise Technologies has grown to become a reliable ally in delivering critical, engineering projects to its valuable list of customers. With the ability to provide “all engineering” services in-house our company has the ability and track record of making the impossible possible and sometimes on unbelievably short timescales. 
                        </p>
                        <p>
                        Privately owned and crewed with people of exceptional talent, the company has taken a pragmatic and steady approach to developing services and the operating systems that take care of our customers, with an ongoing effort to develop our people, premises, equipment. 
                        </p>
                        <p>
                             We pride ourselves on our can-do attitude to any request and the relationships that we maintain with our customers above all
                        </p>
                    </div>
                        <button type="button" class="btn btn-outline-secondary">Find out more</button>
                    </Col>
                    <Col md="6"  className="d-none d-md-block">
                    <div className="img-container">
                     <img src="https://images.unsplash.com/photo-1564182842519-8a3b2af3e228?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=701&q=80" alt="Man welding aluminum" className="img img-responsive" />
                     <img src="https://images.unsplash.com/photo-1558611997-dd5b20e08c71?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80" alt="Man using grinder" className="img img-responsive" />
                      <img src="https://t4.ftcdn.net/jpg/03/31/35/17/360_F_331351784_HvGNZYkMj5UmH6jYzEMdnDuJBAwrbTZj.jpg" alt="Grinding Sparks" className="img img-responsive" />
                    </div>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}



// http://themexriver.com/mega-industry/mega-industry/

export default AboutIntro

