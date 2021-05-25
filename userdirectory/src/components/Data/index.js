import React, { Component } from 'react';
import API from '../../utils/API';
import Nav from '../Nav';
import Table from '../Table/Table';

export default class Data extends Component {
    state = {
        users: [{}],
        order: "descend",
        filteredUsers: [{}]
    }
    headings = [
        {
            name: "image",
            width: "10%",
        },
        {
            name: "name",
            width: "10%"
        },
        {
            name: "phone",
            width: "20%"
        },
        {
            name: "email",
            width: "20%"
        },
        {
            name: "DOB",
            width: "10%"
        }
    ]
    handleSort = headings => {
        if (this.state.order === "descend") {
            this.setState({
                order: "ascend"
            })
        }
        else {
            this.setState({
                order: "descend"
            })
        }
    const compare = (a,b) => {
        if (this.state.order === "ascend") {
            if (a[headings] === undefined) {
                return -1;
            }
            else if (headings === "name") {
                return a[headings].first.localCompare(b[headings].first)
            }
            else {
                return a[headings] - b[headings]
            }
        }
        else {
            if (a[headings] === undefined) {
                return 1;
            }
            else if (b[headings] === undefined) {
                return -1;
            }
            else if (headings === "name") {
                return b[headings].first.localCompare(a[headings].first)
            }
            else {
                return b[headings] - a[headings]
            } 
        }
    }
    const sortedUsers = this.state.filteredUsers.sort(compare);

    this.setState({
        filteredUsers: sortedUsers
    })
    }
    handleSearchChange = event => {
        console.log(event.target.value);
        const filter = event.target.value;
        const filteredList = this.state.users.filter(item => {
            let values = Object.values(item)
            .join("")
            .toLowerCase();
            return values.indexOf(filter.toLowerCase()) !== -1;
        })
        this.setState({
            filteredUsers: filteredList
        })
    }
        componentDidMount() {
            API.getEmployee().then(results => {
                this.setState({
                    users: results.data.results,
                    filteredUsers: results.data.results
                })
            })
        }
        render() {
            return (
                <div>
                    {console.log(this.state.filteredUsers)}
                <Nav handleSearchChange={this.handleSearchChange}>

                </Nav>
                <Table headings={this.headings} users={this.state.filteredUsers} handleSort={this.handleSort}>

                </Table>
                </div>
            )
        }
   
}