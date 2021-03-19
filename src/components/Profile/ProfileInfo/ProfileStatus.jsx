import React, { useEffect, useState } from 'react';

const ProfileStatus = props => {

    const [editMode, setEditMode] = useState(false);
    const [status, setStatus] = useState(props.status);

    useEffect(() => {
        setStatus(props.status);
    }, [props.status]);

    const activateEditMode = () => {
        setEditMode(true);
    }

    const deactiveteEditMode = () => {
        setEditMode(false);
        props.updateStatus(status);
    }

    const onStatusChange = (e) => {
        setStatus(e.currentTarget.value);
    }

    return (
        <>
            {!editMode && <span onDoubleClick={activateEditMode}>{props.status || '----'}</span>}

            {editMode && <input onChange={onStatusChange} onBlur={deactiveteEditMode} autoFocus={true} value={status} />}
        </>
    );
}

export default ProfileStatus;
