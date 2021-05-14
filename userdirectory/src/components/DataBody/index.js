import React from 'react';

function DataBody({ users }) {
    function formatDate(date) {
        const dateArray = date.split("-");
        const year = dateArray[0];
        const month = dateArray[1];
        const dayArray = dateArray[2].split("T");
        const day = dayArray[0];
        const formattedDate = [month, day, year].join("-");
        return formattedDate
    }
    return (
        <tbody>
            {users[0] !== undefined && users[0].name !== undefined ? (
                users.map(({login, name, picture, phone, DOB, email}) => {
                    return (
                        <tr key={login.uuid}>
                            <td>
                                <img src={picture.medium} alt={"Profile for Image" + name.first + " " + name.last}>
                                
                                </img>
                            </td>
                            <td>
                                {name.first} {name.last}
                            </td>
                            <td>
                                {phone}
                            </td>
                            <td>
                                {email}
                            </td>
                            <td>
                                {formatDate(DOB.date)}
                            </td>
                        </tr>
                    )
                })
                ) : ( <div> </div>
            )}
        </tbody>
    )
}

export default DataBody;