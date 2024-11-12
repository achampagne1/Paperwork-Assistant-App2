	
import getUrl from aws - amplify/storage
async function downloadFile() {
    try {
        // Fetch the pre-signed URL from your backend API
        const response = await fetch('/getDownloadUrl'); // Adjust this endpoint as needed
        if (!response.ok) {
            throw new Error('Failed to fetch download URL');
        }

        const data = await response.json();
        const downloadUrl = data.url; // Assuming the response has a field 'url' with the pre-signed URL

        // Trigger file download
        const anchor = document.createElement('a');
        anchor.href = downloadUrl;
        anchor.download = 'output_file.pdf'; // You can set the filename here
        document.body.appendChild(anchor);
        anchor.click();
        document.body.removeChild(anchor);
    } catch (error) {
        console.error('Error downloading file:', error);
    }
}