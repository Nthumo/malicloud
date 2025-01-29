import React, {useCallback, useState} from 'react';
import { CloudUpload, X } from 'lucide-react';
import { useDropzone } from 'react-dropzone';
import { Button } from '../ui/button';



export default function PropertyAttachement() {
    const [attachments, setAttachments] = useState([]);

    const onDropAttachment = useCallback((acceptedFiles) => {
        const newAttachments = acceptedFiles.map((file) => ({
            file,
            preview: URL.createObjectURL(file),
            type: file.type,
        }));
        
        setAttachments((prev) => [...prev, ...newAttachments]);
    }, []);

    const {getRootProps, getInputProps} = useDropzone(
        {
        onDrop: onDropAttachment,
        accept: {
            'image/*': ['.jpg', '.png'],
            'application/pdf': ['.pdf'],
            'text/*': ['.txt'],
            'application/vnd.openxmlformats-officedocument.wordprocessingml.document': ['.docx'],
        },
        multiple: true,
        });

    const renderPreview = (attachement) => {
        if(attachement.type.startsWith('image/')) {
            return <img src={attachement.preview} alt="preview" className='w-[220px] h-64 object-fill rounded-lg' />
        } else if (attachement.type === 'application/pdf') {
            return (
                <iframe 
                src={attachement.preview}
                title='PDF preview'
                className='w-[220px] h-64 rounded-lg'
                />
            );
        } else {
            return (
                <div className='flex items-center justify-center w-[220px] h-64 bg-gray-300 rounded-lg'>
                    <span>File: {attachement.file.name}</span>
                </div>
            )
        }
    };

    const removeAttachment = (index) => {
        setAttachments(prev => prev.filter((_, i) => i !== index))
    }

  return (
    <div className='relative'>
        <div className='mt-4 '>
            <h1 className='md:font-semibold font-bold md:text-[14px] text-[12px]'>PROPERTY ATTACHMENTS</h1>
            {!attachments.length && (
            <div
            {...getRootProps()}
             className='dark:bg-zinc-800 bg-zinc-200 h-[100px] rounded-lg mt-8 cursor-pointer'
             >
                <input {...getInputProps()} />
                <span className='flex flex-col justify-center items-center pt-4'>
                <CloudUpload className='w-10 h-10'/>
                <h1 className='font-bold'>Upload</h1>
                <p className='text-sm'>Store documents and templates</p>
                </span>
            </div>
            )}

            
            {attachments.length > 0 && (
                <div className=' mt-8 grid grid-cols-3 gap-4'>
                    {attachments.map((attachement, index) => (
                    <div key={index} className='relative'>
                        {renderPreview(attachement)}
                        <Button
                        size='icon'
                        className='absolute top-0 right-8 w-8 h-8 bg-red-500 hover:bg-red-600'
                        onClick={() => removeAttachment(index)}
                        >
                            <X className='h-4 w-4'/>
                        </Button>
                    </div>
                    ))}
                </div>
            )}

            <div className='absolute right-0 top-0 mb-2'>
                <Button {...getRootProps()} className='flex gap-2 top-0 text-[11px] right-0 bg-green-600 hover:bg-green-700 cursor-pointer'>
                    <input {...getInputProps()} />
                    <CloudUpload className='w-5 h-5'/>
                    Upload More
                </Button>
            </div>
        </div>
    </div>
  )
}
