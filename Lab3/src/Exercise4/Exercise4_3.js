import React from 'react'

const Exercise4_3 = () => {

    const smartPeople = [
        { name: 'Johann Goethe',age: 82, IQ: 210 }, 
        { name: 'Albert Einstein',age: 76, IQ: 205 }, 
        { name: 'Leonardo da Vinci',age: 67 , IQ: 180 }, 
        { name: 'Isaac Newton',age: 84, IQ: 190 }, 
        { name: 'James Maxwell',age: 48, IQ: 190 }, 
        { name: 'Rudolf Clausius',age: 66, IQ: 190 }, 
        { name: 'Nicolaus Copernicus',age: 70, IQ: 160 }, 
        { name: 'Gottfried Leibniz',age: 70, IQ: 182 }, 
        { name: 'William Sidis',age: 46, IQ: 200 } 
    ]

    return (
        <div>
            {
                smartPeople.map((item) => (
                    <ul>
                        <li>{item.name}</li>
                        <li>{item.age}</li>
                        <li>{item.IQ}</li>
                    </ul>
                ))
            }
        </div>
    );
}

export default Exercise4_3