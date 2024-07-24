import React from 'react';

type Props = {
  img: string;
  title: string;
}

const GalleryImgBox: React.FC<Props> = ({ img, title }) => {
  return (
    <div className='bg-blue-200 w-fit h-fit p-2 md:p-3 flex flex-col gap-2 md:gap-4 rounded-2xl border border-black'>
      <div>
        <img src={img} alt={title} className='w-full h-full object-cover rounded' />
      </div>
      <div className='bg-white rounded-full text-center p-2'>
        {title}
      </div>
    </div>
  );
}

export default GalleryImgBox;
