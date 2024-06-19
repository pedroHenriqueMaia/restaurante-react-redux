import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchMenuItems, selectMenuItems, selectMenuStatus, selectMenuError } from './menu-slice';
import { UnknownAction } from '@reduxjs/toolkit';
import CardMenu from '../../components/card-menu/card-menu';
import CardMenuPlaceholder from '../../components/card-menu/card-menu-placeholder';

const MenuPage: React.FC = () => {
  const dispatch = useDispatch();
  const menuItems = useSelector(selectMenuItems);
  const menuStatus = useSelector(selectMenuStatus);
  const menuError = useSelector(selectMenuError);

  useEffect(() => {
    if (menuStatus === 'idle') {
      dispatch(fetchMenuItems() as unknown as UnknownAction);
    }
  }, [menuStatus, dispatch]);

  if (menuStatus === 'loading') {
    return <CardMenuPlaceholder />
  }

  if (menuStatus === 'failed') {
    return <div>{menuError}</div>;
  }

  return (
    <div className='container'>
      {/* <h1>Menu</h1> */}
      <ul className='row'>
        {menuItems.map(item => (
          <CardMenu key={item.id} selectedItem={item} />
        ))}
      </ul>
    </div>
  );
};

export default MenuPage;
