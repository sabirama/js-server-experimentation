import { google } from "googleapis";
import { createReadStream } from 'fs';
import Variables from './Variables.js';

const CLIENT_ID = Variables.ClientId;
const CLIENT_SECRET = Variables.ClientSecret;
const REDIRECT_URI = Variables.RedirectUri;

const REFRESH_TOKEN = Variables.RefreshToken;

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

const uploadFile = async (filepath) => {
    //takes in an image-location = String(filepath) to upload file.
    try {
        const response = await drive.files.create({
            requestBody: {
                name: 'test-file.png',
                mimeType: 'image/png'
            },
            media: {
                body: createReadStream(filepath),
                mimeType: 'image/png'
            }
        })
        console.log(response.data, response.status);
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
        console.log(response.data, response.status);
        return response.data;
    }
    catch(error) {
        console.error(error.message);
    }
}

const generatePublicUrl = async (file) => {
    try {
        await drive.permissions.create({
            fileId: file,
            requestBody: {
                role: 'reader',
                type: 'anyone'
            }
        })
        const result = await drive.files.get({
            fileId: file,
            fields: 'webViewLink, webContentLink'
        })
        console.log(result.data);
        return result.data;
    }
    catch(error) {
        console.error(error.message);
    }
}

// uploadFile('./headphones.png')
// deleteFile('1Za47XJR7eLsNZBquJKqcYjFs_q79Xorc');
// generatePublicUrl('1vXWyvfgKmHK_dJlA7rjlBpCXAz57CCwg');