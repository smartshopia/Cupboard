// import React, { useEffect, useState } from 'react';
// import { createPath } from 'react-router';
// import { db } from '../../firebase';
// import { collection, getDocs } from 'firebase/firestore';

// const Dashboard = () => {
//   const [data, setData] = useState([]);

//   useEffect(() => {
//     const fetchData = async () => {
//       const querySnapshot = await getDocs(collection(db, 'your-collection-name'));
//       const dataList = querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
//       setData(dataList);
//     };

//     fetchData();
//   }, []);

//   return (
//     <div>
//       <h2>Dashboard</h2>
//       <p>Welcome to your dashboard.</p>
//       <ul>
//         {data.map(item => (
//           <li key={item.id}>{item.name}</li>
//         ))}
//       </ul>
//     </div>
//   );
// };

// export default Dashboard;
// Dashboard.js
import React from 'react';

const Dashboard = () => {
  return (
    <div>
      <h2>Dashboard</h2>
      {/* Add dashboard content here */}
    </div>
  );
};

export default Dashboard;
