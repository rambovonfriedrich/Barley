import React from 'react';
import styles from './uploadDemo.module.scss';
import DraggerUploader from '../components/upload/draggerUpload';
import BasicUpload from '../components/upload/basicUpload';
import Avatar from '../components/upload/avatarUpload';
import DefaultFileUpload from '../components/upload/defaultFileUplad';
import PicturesWall from '../components/upload/pictureWallUpload';
import DirectoryUpload from '../components/upload/directoryUpload';
import FileListUpload from '../components/upload/fileListUpload';
import ManuallyUpload from '../components/upload/ManuallyUpload';
import PictureListUpload from '../components/upload/pictureListUpload';

const UploadDemo = () => (
    <React.Fragment>
        <div className={styles.divframe}>
            <h2>Upload by Clicking</h2>
            <BasicUpload></BasicUpload>
        </div>
        <div className={styles.divframe}>
            <h2>Avatar</h2>
            <Avatar></Avatar>
        </div>
        <div className={styles.divframe}>
            <h2>Default Files</h2>
            <DefaultFileUpload></DefaultFileUpload>
        </div>
        <div className={styles.divframe}>
            <h2>Pictures Wall</h2>
            <PicturesWall></PicturesWall>
        </div>
        <div className={styles.divframe}>
            <h2>Drag and Drop</h2>
            <DraggerUploader></DraggerUploader>
        </div>
        <div className={styles.divframe}>
            <h2>Upload Directory</h2>
            <DirectoryUpload></DirectoryUpload>
        </div>
        <div className={styles.divframe}>
            <h2>Complete control over file list</h2>
            <FileListUpload></FileListUpload>
        </div>
        <div className={styles.divframe}>
            <h2>Manually Upload</h2>
            <ManuallyUpload></ManuallyUpload>
        </div>
        <div className={styles.divframe}>
            <h2>Pictures with list style</h2>
            <PictureListUpload></PictureListUpload>
        </div>
    </React.Fragment>
)

export default UploadDemo;