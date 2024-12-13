import React from 'react';

const Table = ({ heading }) => {
    const visaData = [
        { type: 'Non-immigrant visa types such as tourist, business, student, and exchange visas', cost: 'US$185' },
        { type: 'Petition-based visas', cost: 'US$205' },
    ];

    return (
        <div>
            <h1>{heading}</h1>
            <table border="1" style={{ borderCollapse: 'collapse', width: '100%' }}>
                <thead>
                    <tr>
                        <th>Visa Type</th>
                        <th>Cost</th>
                    </tr>
                </thead>
                <tbody>
                    {visaData.map((row, index) => (
                        <tr key={index}>
                            <td>{row.type}</td>
                            <td>{row.cost}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default Table;
