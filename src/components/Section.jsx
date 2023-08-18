import React, { useState } from 'react';

const Section = () => {
  const [section, setSection] = useState([
    {
      id: 1,
      category: 'Service',
      fimage: 'left',
      page: 'home',
      bg: 'dark',
      img: '1',
    },
    {
      id: 2,
      category: 'Feature',
      fimage: 'right',
      page: 'about',
      bg: 'light',
      img: '2',
    },
  ]);
  return (
    <div className='container'>
      {section?.map((sec) =>
        sec.fimage === 'left' ? (
          <div
            className={
              sec.bg === 'light'
                ? 'row bg-secondary'
                : 'row bg-dark text-light mb-2'
            }
          >
            <div className='col-lg-6'>
              <h1>image</h1>
              <img src='' alt='' />
            </div>
            <div className='col-lg-6'>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti,
              molestiae repellendus. Nam officia blanditiis quis exercitationem
              vero odit qui quidem. Lorem ipsum dolor sit amet consectetur
              adipisicing elit. Modi sint eaque voluptatem deleniti eos amet
              culpa earum quibusdam accusamus architecto enim nam optio cumque,
              saepe pariatur vitae sequi quo? Accusamus laboriosam natus
              dignissimos accusantium non at assumenda doloribus quis nam hic?
              Minus ea ex quos doloremque blanditiis quasi asperiores voluptate!
            </div>
          </div>
        ) : sec.fimage === 'right' ? (
          <div
            className={
              sec.bg === 'light' ? 'row bg-secondary' : 'row bg-dark text-light'
            }
          >
            <div className='col-md-6'>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti,
              molestiae repellendus. Nam officia blanditiis quis exercitationem
              vero odit qui quidem.
            </div>
            <div className='col-md-6'>
              <h1>image</h1>
              <img src='' alt='' />
            </div>
          </div>
        ) : (
          ''
        )
      )}
      <div className='card'></div>
    </div>
  );
};

export default Section;
