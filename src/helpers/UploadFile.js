import { uploadData } from 'aws-amplify/storage';
import devTools from '../../devTools.json';

export async function uploadFile(file) {
    let filePath = "";

    console.log("Selected file:", file);

    // File validation
    const allowedFileTypes = {
        pdf: {
            extensions: ['.pdf'],
            mimeType: 'application/pdf',
            maxSize: 5 * 1024 * 1024, // 5 MB
        },
        wav: {
            extensions: ['.wav'],
            mimeType: 'audio/wav',
            maxSize: 50 * 1024 * 1024, // 50 MB
        },
    };

    const fileExtension = file.name.slice(file.name.lastIndexOf('.')).toLowerCase();
    let fileType = null;
    if (allowedFileTypes.pdf.extensions.includes(fileExtension)) {
        fileType = allowedFileTypes.pdf;
    } else if (allowedFileTypes.wav.extensions.includes(fileExtension)) {
        fileType = allowedFileTypes.wav;
    } else {
        console.log('Upload error: Invalid file type. Only PDF and WAV files are allowed.');
        return 1;
    }

    // Check MIME type
    if (file.type !== fileType.mimeType) {
        console.log(`Upload error: Invalid MIME type. Expected ${fileType.mimeType}.`);
        return 2;
    }

    // Check file size
    if (file.size > fileType.maxSize) {
        console.log(
            `Upload error: File size exceeds the limit of ${fileType.maxSize / (1024 * 1024)} MB for ${fileExtension} files.`
        );
        return 3;
    }

    if (devTools.backendDisconnet) {
        console.log('Upload error: backend disconnected');
        return 6;
    }

    try {
        if (devTools.backendDisconnet) {
            console.log('Upload error: backend disconnected');
            return 6;
        }
        filePath = "input/" + file.name;
        const result = await uploadData({
            path: filePath,
            data: file,
            options: {
                level: 'public',
            },
        }).result;
        console.log('Upload succeeded:', result);
        return 4 
    } catch (error) {
        console.log('Upload error:', error);
        return 5
    }
}

