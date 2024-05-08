import React, { useEffect, useState } from 'react';
import Badge from '@mui/material/Badge';
import { styled } from '@mui/material/styles';
import IconButton from '@mui/material/IconButton';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import Offcanvas from 'react-bootstrap/Offcanvas';
import { GetDataFromLocalStorage } from '../../Services/getDataFromLocalstorage';
import { useGlobalState } from '../../Context/Context';
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from '../../Config/FirebaseConfig';
import ConfirmButton from '../ConfirmButton/ConfirmButton';
import DataNotFound from '../DataNotFound/DataNotFound';

const StyledBadge = styled(Badge)(({ theme }) => ({
  '& .MuiBadge-badge': {
    right: -3,
    top: 13,
    border: `2px solid ${theme.palette.background.paper}`,
    padding: '0 4px',
  },
}));

export default function AddtoCart() {
  const { countingProduct } = useGlobalState();
  const [show, setShow] = useState(false);
  const [uid, setUid] = useState("");
  const [cartData, setCartData] = useState({ orderProducts: [], count: 0 });

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        onAuthStateChanged(auth, async (user) => {
          if (user) {
            const uid = user.uid;
            const data = await GetDataFromLocalStorage(uid);
            if (data) {
              setCartData(data);
            }
            setUid(uid);
          }
        });
      } catch (error) {
        console.error(error.message);
      }
    };
    fetchUserData();
  }, []);

  useEffect(() => {
    if (uid) {
      const fetchData = async () => {
        try {
          const data = await GetDataFromLocalStorage(uid);
          if (data) {
            setCartData(data);
          }
        } catch (error) {
          console.error(error.message);
        }
      };
      fetchData();
    }
  }, [countingProduct]);

  const calculateTotalPrice = () => {
    let totalPrice = 0;
    cartData.orderProducts.forEach(city => {
      totalPrice += city.data.price;
    });
    return totalPrice;
  };

  return (
    <>
      <IconButton aria-label="cart" onClick={handleShow}>
        <StyledBadge badgeContent={cartData.count} color="secondary">
          <ShoppingCartIcon />
        </StyledBadge>
      </IconButton>
      <Offcanvas show={show} onHide={handleClose} placement="end">
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Offcanvas</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          {cartData.orderProducts.length > 0 ? (
            <div className='border'>
              <table className='table table-border'>
                <thead>
                  <tr>
                    <td style={{ fontSize: '14px' }} className='fw-semibold'>products images</td>
                    <td style={{ fontSize: '14px' }} className='fw-semibold'>products name</td>
                    <td style={{ fontSize: '14px' }} className='fw-semibold'>products price</td>
                  </tr>
                </thead>
                <tbody>
                  {cartData.orderProducts.map((city, index) => (
                    <tr key={index}>
                      <td className=''>{index + 1}</td>
                      <td className='border'>
                        <img src={city.data.image} style={{ width: "40px" }} className="img-fluid" alt="" />
                      </td>
                      <td>{city.data.name}</td>
                      <td>{city.data.price}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
              <div>Total Price: ${calculateTotalPrice()}</div>
              <ConfirmButton />
            </div>
          ) : (
            <DataNotFound />
          )}
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
}
