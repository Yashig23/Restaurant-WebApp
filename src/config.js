// const { default: firebase } = require("firebase/compat/app");

const conf={
    firebaseURLID: String("import.meta.env.VITE_APPWRITE_URL"),
    domainID: String("import.meta.env.VITE_DOMAIN_ID"),
    projectID: String("import.meta.env.VITE_PROJECT_ID"),
    bucketID: String("import.meta.env.VITE_BUCKET_ID"),
    senderID: String("import.meta.env.VITE_SENDER_ID"),
    appID: String("import.meta.env.VITE_APP_ID"),
    measurementID: String("import.meta.env.VITE_MEASUREMENT_ID")
}

export default conf;