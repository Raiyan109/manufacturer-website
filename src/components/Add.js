import React, { useEffect, useState } from 'react';

const Add = () => {
  const [image, setImage] = useState()

  const toBase64 = uInt8Array => btoa(String.fromCharCode(...uInt8Array));

  useEffect(() => {
    fetch('http://localhost:5000/api/newAdd')
      .then(res => res.json())
      .then(data => {
        setImage(`data:image/jpeg;base64,${toBase64(data.img.data)}`);
      })
  }, [])

  return (
    <div>

    </div>
  );
};

export default Add;