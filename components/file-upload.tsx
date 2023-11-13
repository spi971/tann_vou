"use client";

import { ourFileRouter } from "@/app/api/uploadthing/core";
import { UploadDropzone } from "@/lib/uploadthing";
import toast from "react-hot-toast";

interface FileUploadProps {
    onChange: (url?:string) => void;
    endPoint: keyof typeof ourFileRouter;
    
}

const FileUpload = ({onChange,
    endPoint}: FileUploadProps) => {
    return ( 
    <UploadDropzone endpoint={endPoint} onClientUploadComplete={(response) =>{
        onChange(response?.[0].url);
    }}
    onUploadError={(error:Error)=>{
        toast.error(`${error?.message}`)
    }}/> );
}
 
export default FileUpload;