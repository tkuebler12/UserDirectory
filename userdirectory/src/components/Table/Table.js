import React from 'react';
import DataBody from '../DataBody/index';
import Data from '../Data/index';

function Table({headings, users, handleSort}) {

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
        }];
    return (
        <table>
                            {
                    console.log(headings)
                }
        <thread>
            <tr>
                {headings.map(({name, width}) => {
                    return (
                        <th key={name} style={{width}} onClick={() => {
                            handleSort(name.toLowerCase())
                        }}>
                        {name}
                        <span className="pointer">

                        </span>
                        </th>
                        
                    );
                })}
            </tr>
        </thread>
        <DataBody users={users}>
        <Data />
        </DataBody>
        </table>
        
    )
}

export default Table;