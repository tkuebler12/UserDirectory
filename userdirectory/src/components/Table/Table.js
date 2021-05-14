import React from 'react';
import DataBody from '../DataBody/index';

function Table({headings, users, handleSort}) {
    return (
        <table>
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

        </DataBody>
        </table>
    )
}

export default Table;