import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  fetchMenuItems,
  selectMenuItems,
  selectMenuStatus,
} from './menu-slice';
import { UnknownAction } from '@reduxjs/toolkit';
import CardMenu from '../../components/card-menu/card-menu';
import CardMenuPlaceholder from '../../components/card-menu/card-menu-placeholder';
import './styles.css';
import Alert from '../../components/alert/alert';

const MenuPage: React.FC = () => {
  const dispatch = useDispatch();
  const menuItems = useSelector(selectMenuItems);
  const menuStatus = useSelector(selectMenuStatus);

  useEffect(() => {
    if (menuStatus === 'idle') {
      dispatch(fetchMenuItems() as unknown as UnknownAction);
    }
  }, [menuStatus, dispatch]);

  if (menuStatus === 'loading') {
    return <CardMenuPlaceholder />;
  }

  if (menuStatus === 'failed') {
    return (
      <div className="container mt-5 menu-page">
        <Alert message="Não há dados disponíveis no momento. Tente novamente mais tarde." />
      </div>
    );
  }

  return (
    <div className="container menu-page">
      {menuItems.length === 0 ? (
        <div className="mt-5">
          <Alert message="Nenhum há dados com esse filtro." />
        </div>
      ) : (
        <ul className="row">
          {menuItems.map((item) => (
            <CardMenu key={item.id} selectedItem={item} />
          ))}
        </ul>
      )}
    </div>
  );
};

export default MenuPage;
