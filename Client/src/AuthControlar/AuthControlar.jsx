import { createContext, useState, useEffect } from "react";
import { getAuth, createUserWithEmailAndPassword,  onAuthStateChanged,  signOut, signInWithEmailAndPassword,  } from "firebase/auth";
import { app } from "../FirebaseConfig/Firebase.config";


export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const auth = getAuth(app);
  const [user, setUser] = useState(null);
  const [loading, setLoading]=useState(true)

  // User Registration Function
  const createUser = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };


  
  const singIn = (email, password)=>{
    setLoading(true)
    return signInWithEmailAndPassword(email, password)
  }



 



// logOut
const logOut = () => {
  setLoading(true);
  return signOut(auth);
}

  // Manage User State
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setLoading(false)
    });
    return () => unsubscribe();
  }, []);

  return (
    <AuthContext.Provider value={{ user, createUser, singIn, logOut, loading }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;



