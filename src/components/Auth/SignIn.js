// // src/components/Auth/SignIn.js

// import { createPath } from 'react-router';
// import React, { useState } from 'react';
// import { useNavigate } from 'react-router-dom';
// import { auth } from '../../firebase';
// import { signInWithEmailAndPassword } from 'firebase/auth';

// const SignIn = () => {
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const [error, setError] = useState(null);
//   const navigate = useNavigate();

//   const handleSignIn = async (e) => {
//     e.preventDefault();
//     try {
//       await signInWithEmailAndPassword(auth, email, password);
//       navigate('/dashboard');
//     } catch (err) {
//       setError(err.message);
//     }
//   };

//   return (
//     <div>
//       <h1>Sign In</h1>
//       <form onSubmit={handleSignIn}>
//         <input
//           type="email"
//           value={email}
//           onChange={(e) => setEmail(e.target.value)}
//           placeholder="Email"
//           required
//         />
//         <input
//           type="password"
//           value={password}
//           onChange={(e) => setPassword(e.target.value)}
//           placeholder="Password"
//           required
//         />
//         <button type="submit">Sign In</button>
//       </form>
//       {error && <p>{error}</p>}
//     </div>
//   );
// };

// export default SignIn;
// SignIn.js
import React from 'react';

const SignIn = () => {
  return (
    <div>
      <h2>Sign In</h2>
      {/* Add sign-in form and logic */}
    </div>
  );
};

export default SignIn;
