import React, { useState } from 'react';
import { useDropzone } from 'react-dropzone';
import { styled } from '@mui/system';
import Button from '@mui/material/Button';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';

const DropzoneContainer = styled('div')({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  padding: '10px',
  borderWidth: '2px',
  borderRadius: '2px',
  borderColor: '#ddd',
  borderStyle: 'dashed',
  backgroundColor: '#fafafa',
  color: '#bdbdbd',
  outline: 'none',
  transition: 'border .24s ease-in-out',
  minHeight: '200px',
  textAlign: 'center',
  cursor: 'pointer',
});

const UploadButton = styled(Button)({
  marginTop: '16px',
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
  justifyContent: 'center',
});

const UploadComponent = () => {
  const [selectedFiles, setSelectedFiles] = useState([]);

  const handleUpload = (files) => {
    // Handle the uploaded files here
    console.log('Uploaded files:', files);
    setSelectedFiles(files);
  };

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop: handleUpload,
    multiple: true,
  });

  return (
    <div>
      <DropzoneContainer {...getRootProps()}>
        <input {...getInputProps()} />
        {isDragActive ? (
          <p>Drop the files here...</p>
        ) : (
          <p>Drag and drop files here, or click to select files</p>
        )}
      </DropzoneContainer>
      <UploadButton
        variant="contained"
        startIcon={<CloudUploadIcon />}
        onClick={() => {
          // Trigger file input click
          document.querySelector('input[type="file"]').click();
        }}
      >
        Upload Files
      </UploadButton>
      {selectedFiles.length > 0 && (
        <div>
          <h3>Selected Files:</h3>
          {selectedFiles.map((file, index) => (
            <p key={index}>{file.name}</p>
          ))}
        </div>
      )}
    </div>
  );
};

export default UploadComponent;

