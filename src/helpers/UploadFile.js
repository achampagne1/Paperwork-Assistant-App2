import { uploadData } from 'aws-amplify/storage';
export async function uploadFile(file){
    filePath = ""
    //setSelectedFile(file);  // Save the selected file in state
    console.log("Selected file:", file);

    try {
        filePath = "input/" + file.name;
        const result = uploadData({
            path: filePath,
            data: file,
            options: {
                level: 'public'
            }
        }).result;
        console.log('Upload succeeded:', result);
    }
    catch (error) {
        console.log('Upload error:', error);
    }
}
