import React from 'react';
import hult from "../../public/images/hult-loader.gif";
import Image from 'next/image';

const Loading = () => {
    return (
        <div style={{
            position: 'fixed',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            backgroundColor: 'white',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            zIndex: 9999,
        }}>
            <Image src={hult} alt='loader'/>
        </div>
    );
};

export default Loading;
