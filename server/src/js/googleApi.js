import { google } from "googleapis";
import { createReadStream } from 'fs';
import { googleApis } from "../../../Variables.js";

const CLIENT_ID = googleApis.ClientId;
const CLIENT_SECRET = googleApis.ClientSecret;
const REDIRECT_URI = googleApis.RedirectUri;

const REFRESH_TOKEN = googleApis.RefreshToken;

const auth2 = new google.auth.OAuth2(
    CLIENT_ID,
    CLIENT_SECRET,
    REDIRECT_URI
)

const drive = google.drive({
    version: 'v3',
    auth: auth2 
})

auth2.setCredentials({refresh_token: REFRESH_TOKEN});

const uploadFile = async (filename, mimetype, filepath) => {
    //takes in file = String(filepath) to upload file.
    try {
        const response = await drive.files.create({
            requestBody: {
                name: filename,
                mimeType: mimetype
            },
            media: {
                body: createReadStream(filepath),
                mimeType: mimetype
            }
        })
        console.log(response.data);
        return response.data;
    }
    catch(error) {
        console.error(error.message);
    }
}

const deleteFile = async (file) => {
    //takes in an image id from google = String(file) to delete file.
    try {
        const response = await drive.files.delete({
            fileId: file,
        })
        console.log(response.data);
        return response.data;
    }
    catch(error) {
        console.error(error.message);
    }
}

const generatePublicUrl = async (imageId) => {
    try {
        //first edit permission for file in google drive into public
        const create = await drive.permissions.create({
            fileId: imageId,
            requestBody: {
                role: 'reader',
                type: 'anyone'
            }
        })
        //then create a URI 
        if (create) {
            try {
                const result = await drive.files.get({
                    fileId: imageId,
                    fields: 'webViewLink, webContentLink'
                })
                console.log(result.data);
                return result.data;
            }
            catch(error) {
                console.error(error.message);
            }
        }   
    }
    catch(error) {
        console.error(error.message);
    }
}

const googleApi = {
    'upload_file' : uploadFile,
    'delete_file': deleteFile,
    'generate_url' : generatePublicUrl
}

export default googleApi;