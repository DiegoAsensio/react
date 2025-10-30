import {
  collection,
  getDocs,
  doc,
  getDoc,
  query,
  where,
} from "firebase/firestore";
import { db } from "./firebase";

export const getProducts = async (category = null) => {
  try {
    const productsRef = collection(db, "items");
    
    let q = productsRef;
    if (category) {
      q = query(productsRef, where("category", "==", category));
    }
    
    const snapshot = await getDocs(q);
    
    if (snapshot.empty) {
      return [];
    }
    
    return snapshot.docs.map(doc => ({
      ...doc.data(),
      id: doc.id,
    }));
  } catch (error) {
    console.error("Error fetching products:", error);
    throw error;
  }
};

export const getProductById = async (id) => {
  try {
    const productRef = doc(db, "items", id);
    const snapshot = await getDoc(productRef);
    
    if (!snapshot.exists()) {
      throw new Error("Producto no encontrado");
    }
    
    return {
      ...snapshot.data(),
      id: snapshot.id,
    };
  } catch (error) {
    console.error("Error fetching product:", error);
    throw error;
  }
};