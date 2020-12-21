import React from 'react';
import { UncontrolledDropdown, DropdownToggle, DropdownMenu, DropdownItem, Container, Row, Col, ButtonGroup } from 'reactstrap';

const Dropdowns = () => {
    return (
        <div>
            <div className="spacer" id="dropdowns-component">
                <Container>
                    <Row className="justify-content-center">
                        <Col md="7" className="text-center">
                            <h1 className="title font-bold" style={{color:"darkblue"}}>Top countries with high water consumption rates</h1>
                            <h6 className="subtitle">Click to know their daily water used per capita (Litre)</h6>
                        </Col>
                    </Row>
                </Container>
            </div>
            <Container>
                <Row>
                    <Col md="12" className="text-center">
                        <ButtonGroup>{' '}
                            <UncontrolledDropdown setActiveFromChild>
                                <DropdownToggle tag="button" className="btn btn-danger" caret>
                                India
                                </DropdownToggle>
                                <DropdownMenu>
                                    <DropdownItem tag="a" >1,689</DropdownItem>
                                   
                                </DropdownMenu>
                            </UncontrolledDropdown>
                        </ButtonGroup>
                        <ButtonGroup>{' '}
                            <UncontrolledDropdown setActiveFromChild>
                                <DropdownToggle tag="button" className="btn btn-info" caret>
                                China
                                </DropdownToggle>
                                <DropdownMenu>
                                    <DropdownItem tag="a" >1,165</DropdownItem>
                                    
                                </DropdownMenu>
                            </UncontrolledDropdown>
                        </ButtonGroup>
                        <ButtonGroup>{' '}
                            <UncontrolledDropdown setActiveFromChild>
                                <DropdownToggle tag="button" className="btn btn-primary" caret>
                                United States
                                </DropdownToggle>
                                <DropdownMenu>
                                    <DropdownItem tag="a" href="/blah">3,794</DropdownItem>
                                </DropdownMenu>
                            </UncontrolledDropdown>
                        </ButtonGroup>
                        <ButtonGroup>{' '}
                            <UncontrolledDropdown setActiveFromChild>
                                <DropdownToggle tag="button" className="btn btn-warning" caret>
                                Indonesia
                                </DropdownToggle>
                                <DropdownMenu>
                                    <DropdownItem tag="a" href="/blah">2,332</DropdownItem>
                                    
                                </DropdownMenu>
                            </UncontrolledDropdown>
                        </ButtonGroup>
                        <ButtonGroup>{' '}
                            <UncontrolledDropdown setActiveFromChild>
                                <DropdownToggle tag="button" className="btn btn-success" caret>
                                Pakistan
                                </DropdownToggle>
                                <DropdownMenu>
                                    <DropdownItem tag="a" href="/blah">2,929</DropdownItem>
                                   
                                </DropdownMenu>
                            </UncontrolledDropdown>
                        </ButtonGroup>
                        <ButtonGroup>{' '}
                            <UncontrolledDropdown setActiveFromChild>
                                <DropdownToggle tag="button" className="btn btn-secondary" caret>
                                Iran
                                </DropdownToggle>
                                <DropdownMenu>
                                    <DropdownItem tag="a" href="/blah">3,707</DropdownItem>
                                    
                                </DropdownMenu>
                            </UncontrolledDropdown>
                        </ButtonGroup>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default Dropdowns;
