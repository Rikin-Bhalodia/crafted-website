import { collection, getDocs } from "firebase/firestore";
import { db } from "../Firebase";

const productsCollection = collection(db, "specialProducts");
export const getAllProducts = async (setProducts) => {
  console.time();
  const data = await getDocs(productsCollection);
  console.timeEnd();
  setProducts(data.docs.map((data) => ({ ...data.data(), id: data.id })));
};

// export const CartItems = (setCartProduct) => {
//   const db = getDatabase();
//   console.log(currentUser, "currentUser?.uid");
//   const starCountRef = ref(db, `cartItem/${currentUser?.uid}`);
//   onValue(starCountRef, (snapshot) => {
//     const data = snapshot.val();
//     let cartDatalist = [];
//     for (let id in data) {
//       cartDatalist.push(data[id]);
//     }
//     if (cartDatalist.length) {
//       setCartProduct(cartDatalist);
//     } else {
//       setCartProduct([]);
//     }
//   });
// };
