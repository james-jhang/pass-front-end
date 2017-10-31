import React, { Component } from 'react';
import { Table } from 'react-bootstrap';
import Card from 'components/Card/Card.jsx';
import { thArray, course } from 'variables/Variables.jsx';

class Assignments extends Component {
  render() {
    return (
      <div className="content">
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-12">
              <Card
                title="Pattern-Oriented Software Design"
                category=""
                contentClass="table-responsive table-full-width"
                content={
                  <Table style={{ textAlign: 'center' }} striped hover>
                    <thead>
                      <tr>
                        {
                          thArray.map((prop, key) => {
                            return (
                              <th style={{ textAlign: 'center' }} key={key}>{prop}</th>
                            );
                          })
                        }
                      </tr>
                    </thead>
                    <tbody>
                      {
                        course[1].assignments.map((prop, rowKey) => {
                          var _prop = [...Object.values(prop)]
                          _prop.unshift(rowKey + 1)
                          return (
                            <tr key={rowKey}>{
                              _prop.map((prop, colKey) => {
                                if (colKey === 1) {
                                  return (<td key={ colKey }><a href="#/grading">{prop}</a></td>)
                                }
                                if (colKey === 3)
                                  switch (prop) {
                                    case 'v': return (<td key={colKey}>closed</td>);
                                    case 'x': return (<td key={colKey}>closed</td>);
                                    case 'v-sub': return (<td key={colKey}>opening</td>);
                                    case 'x-sub': return (<td key={colKey}>opening</td>);
                                    default: break;
                                  }
                                if (colKey === 4) {
                                  if (prop === '') return(<td key={colKey}>-</td>)
                                  return (<td key={colKey}><span style={{ color: '#33CC00' }} className="glyphicon glyphicon-ok" /></td>)
                                }
                                return (<td key={colKey}>{prop}</td>);
                              })
                            }</tr>
                          );
                        })
                      }
                    </tbody>
                  </Table>
                }
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default Assignments;