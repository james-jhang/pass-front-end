import React, { Component } from 'react';
import { Table } from 'react-bootstrap';
import Card from 'components/Card/Card.jsx';
import Button from 'elements/CustomButton/CustomButton.jsx'
import { hwHeader, hw1 } from 'variables/Variables.jsx';

class Grading extends Component {
    render() {
        return (
            <div className="content">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-md-6">
                            <Card
                                title="Pattern-Oriented Software Design"
                                category=""
                                contentClass="table-responsive table-full-width"
                                content={
                                    <Table style={{ textAlign: 'center' }} striped hover>
                                        <thead>
                                            <tr>
                                                {
                                                    hwHeader.map((prop, key) => {
                                                        return (
                                                            <th style={{ textAlign: 'center' }} key={key}>{prop}</th>
                                                        );
                                                    })
                                                }
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {
                                                hw1.map((prop, rowKey) => {
                                                    return (
                                                        <tr key={rowKey}>{
                                                            prop.map((prop, colKey) => {
                                                                return(<td key={colKey}>{prop}</td>)
                                                            })
                                                        }
                                                            <td key="3"><input type="text" name="score" size="3" /></td>
                                                            {/* <td key="3"><textarea rows="1" cols="3"></textarea></td>                                                             */}
                                                        </tr>
                                                    )
                                                })
                                            }
                                        </tbody>
                                    </Table>
                                }
                                legend={
                                    <Button style={{marginLeft: '82%'}}>Grading</Button>
                                }
                            />
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
export default Grading;