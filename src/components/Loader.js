import React from 'react';
import hult from "../../public/images/hult-loader.gif";
import Image from 'next/image';

const Loading = () => {
    return (
        <div style={{
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            justifyContent: 'center',
            alignItems: 'center',
            zIndex: 9999,
        }} className="bg-white dark:bg-slate-950 fixed flex">
            <Image src={hult} alt='loader'/>
        </div>
    );
};

export default Loading;
