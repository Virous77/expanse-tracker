import { useState } from "react";
import {
  query,
  collection,
  onSnapshot,
  where,
  orderBy,
} from "firebase/firestore";
import { useEffect } from "react";
import { db } from "../firebase/firebase.config";

const useFetchCollectionByUid = (name, userId, collections) => {
  const [data, setData] = useState("");
  const [loading, setLoading] = useState(false);

  const getCollection = () => {
    setLoading(true);
    const productRef = collection(db, collections);
    const items = query(
      productRef,
      where(name, "==", `${userId}`),
      orderBy("createdAt", "desc")
    );

    onSnapshot(items, (snapshot) => {
      const allProducts = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));

      setData(allProducts);
      setLoading(false);
      return allProducts;
    });
  };

  useEffect(() => {
    if (userId) {
      getCollection();
    }
  }, [userId]);

  return {
    data,
    loading,
    getCollection,
  };
};

export default useFetchCollectionByUid;
