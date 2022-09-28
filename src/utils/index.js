import { getDatabase, onValue, ref } from "firebase/database";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../Firebase";

const productsCollection = collection(db, "specialProducts");
export const getAllProducts = async (setProducts) => {
  console.time();
  const data = await getDocs(productsCollection);
  console.timeEnd();
  setProducts(data.docs.map((data) => ({ ...data.data(), id: data.id })));
};

export const newArrivalProducts = async (setProducts) => {
  const data = await getDocs(productsCollection);
  const AllData = data.docs.map((data) => ({ ...data.data(), id: data.id }));

  setProducts(AllData.slice(120, 124));
};
export const CartItems = (setCartProduct) => {
  const db = getDatabase();
  const starCountRef = ref(db, "cartItem/");
  onValue(starCountRef, (snapshot) => {
    const data = snapshot.val();
    if (data !== null) {
      setCartProduct(Object.entries(data));
    } else {
      setCartProduct([]);
    }
  });
};
