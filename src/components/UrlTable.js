import React from "react";
import { db } from "../firebase";

import {
  collection,
  query,
  onSnapshot,
  connectFirestoreEmulator,
} from "firebase/firestore";

export const URLTable = () => {
  const urls = query(collection(db, "urls"));
  const updatedUrls = onSnapshot(urls, (querySnapshot) => {
    const urlList = [];
    querySnapshot.forEach((doc) => {
      urlList.push(doc.data().shortUrl);
    });
    console.log("URLS list ", urlList.join(", "));
  });

  return (
    <>
      <table className="url-table">
        <tr>
          <th>Short URL</th>
          <th>Long UR</th>
          <th>Copy</th>
        </tr>
        <tr>
          <td>Long URL</td>
          <td>Maria Anders</td>
        </tr>
        <tr>
          <td>Created At</td>
          <td>Francisco Chang</td>
          <td>Mexico</td>
        </tr>
      </table>
    </>
  );
};
