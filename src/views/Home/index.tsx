import React, { useState, useEffect } from 'react';
import axios from '../../utils/axios';

function Home() { 

    let [hello, setHello] = useState('');

    const getData = () => { 
        axios.get('/hello')
            .then((res: any) => {
                if (res.code === 200) {
                    setHello(res.content);
                } else { 
                    console.log(res.message);
                }
            })
    };

    useEffect(() => {
        getData();
    }, [0]);
    
    return (
        <div>{hello}</div>
    );
}

export default Home;