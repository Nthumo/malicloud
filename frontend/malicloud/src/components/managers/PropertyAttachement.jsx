import React, {useCallback, useState} from 'react';
import { CloudUpload } from 'lucide-react';
import { useDropzone } from 'react-dropzone';
import { Button } from '../ui/button';



export default function PropertyAttachement() {
    const [attachement, setAttachement] = useState(null);

    const onDropAttachment = useCallback((acceptedFiles) => {
        const file = acceptedFiles[0];
        if (file) {
            const preview = URL.createObjectURL(file);
            setAttachement({file, preview})
        }
    }, []);

    const {getRootProps, getInputProps} = useDropzone(
        {
        onDrop: onDropAttachment,
        accept: {
            'image/*': ['.jpg', '.png'],
            'docs/*': ['.pdf', '.docx', '.word', '.txt', '.epub'],
        },
        multiple: true
        });

  return (
    <div>
        <div className='mt-4'>
            <h1 className='font-semibold'>PROPERTY ATTACHMENTS</h1>
            {!attachement && (
            <div
            {...getRootProps()}
             className='dark:bg-zinc-800 bg-zinc-200 h-[100px] rounded-lg mt-4 cursor-pointer'
             >
                <input {...getInputProps()} />
                <span className='flex flex-col justify-center items-center pt-4'>
                <CloudUpload className='w-10 h-10'/>
                <h1 className='font-bold'>Upload</h1>
                <p className='text-sm'>Store documents and templates</p>
                </span>
            </div>
            )}

            {attachement && (
                <div className='relative mt-4'>
                    <img 
                    src={attachement.preview} 
                    alt="preview" 
                    className='w-[220px] h-64 object-fill rounded-lg'
                    />
                    <div 
                    {...getRootProps()}
                     className=''>
                        <Button className='absolute flex gap-2 top-0 right-0 bg-green-600 hover:bg-green-700'>
                            <input {...getInputProps()} />
                            <CloudUpload/>
                            Upload 
                        </Button>
                    </div>
                </div>
            )}
        </div>
    </div>
  )
}
