"use client";
import { useEffect, useState } from "react";
import "./GridImages.scss";
import Image from "next/image";



export const GridImages = ({ data }) => {
  // const [newArray, setNewArray] = useState(array);
  // useEffect(() => {
  //   const tempArray = [];
  //   for (let i = 0; i < array.length; i++) {
  //       i !== 0 && i + 1 < array.length
  //           ? (tempArray.push([array[i], array[i + 1]]), i++)
  //           : tempArray.push([array[i]]);
  //   }
  //   setNewArray(tempArray);
  //   console.log(newArray);
  // }, [array]);

  return (
    <div className="container">
    <div className="grid-images">
      <div className="grid-image-group">
        <div className="grid-image">
          <Image src={data.img1.url} width={500} height={500} alt="" />
        </div>
      </div>
      <div className="grid-image-group">
        <div className="grid-image">
          <Image src={data.img2.url} width={500} height={500} alt="" />
        </div>
        <div className="grid-image">
          <Image src={data.img4.url} width={500} height={500} alt="" />
        </div>
      </div>
      <div className="grid-image-group">
        <div className="grid-image">
          <Image src={data.img3.url} width={500} height={500} alt="" />
        </div>
        <div className="grid-image">
          <Image src={data.img5.url} width={500} height={500} alt="" />
        </div>
      </div>
      {/* {newArray.map((group, i) => (
        <div key={i} className="grid-image-group">
          {group.map((src, j) => (
            <div key={j} className="grid-image">
              <Image src={src} width={500} height={500} alt="" />
            </div>
          ))}
        </div>
      ))} */}
    </div>
  </div>
  );
};
