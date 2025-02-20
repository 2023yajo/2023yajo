import React from 'react';
import NewApi from '../../component/newapi';
import ArchiveMenu from '../../component/ArchiveMenu';
import MobArchive from '../../component/MobArchive';
import Smallfoot from '../../component/Smallfoot';

const Archive = () => {
    return (
        <div>
            <NewApi />
            <ArchiveMenu />
            <MobArchive />
            <Smallfoot />
        </div>
    );
};

export default Archive;