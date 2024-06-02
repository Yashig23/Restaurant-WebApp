import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged} from "firebase/auth";
import { auth } from "../constants/firebase";
import { app } from "../constants/firebase";
export class AuthService{

    constructor(){
       this.auth = getAuth(app);
    }

    //sign up new users
    async createUserWithEmailAndPassword(auth, email, password){
        try{
            const userCredential = await createUserWithEmailAndPassword(auth, email, password);
            const user = userCredential.user;
            if(user){
                return user;
            }
            else{
                return "user not found";
            }
        }catch(error){
            const errorcode = error.code;
            const errorMessage = error.message;
            console.log(`Error ${errorcode} ${errorMessage}`);
            throw error;
        }
    }


    // sign in existing users
    async signInWithEmailAndPassword(auth, email, password){
        try{
            const userCredential = await signInWithEmailAndPassword(auth, email, password);
            const user = userCredential.user;
            if(user){
                return (user);
            }
            else{
                return "no user found";
            }
        }catch(error){
            console.log(`Error, ${error.code}, ${error.message}`)
            throw error;
        }
    }


    //authentication of user 
    async checkAuthState() {
        return new Promise((resolve, reject) => {
            onAuthStateChanged(this.auth, (user) => {
                if (user) {
                    const uid = user.uid;
                    resolve(uid);
                } else {
                    resolve(null);
                }
            }, (error) => {
                reject(error);
            });
        });
    }

}

const authService = new AuthService();

export default authService;