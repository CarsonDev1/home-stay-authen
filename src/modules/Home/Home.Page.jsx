/* eslint-disable react-hooks/exhaustive-deps */
import { useState, useEffect } from 'react';
import HeaderGuest from '../../layouts/Header/Guest/HeaderGuest';
import FooterCustomer from '../../layouts/Footer/Customer/FooterCustomer';
import BoxContainer from '../../components/Box/Box.Container';
import { Box, Typography } from '@mui/material';
import { AssetImages } from '../../utils/images';
import './Home.Style.scss';
import { checkLogin } from '../../utils/helper';
import SearchComponent from '../../components/SearchComponent/SearchComponent';
import HeaderUser from '../../layouts/Header/User/HeaderUser';
import secureLocalStorage from 'react-secure-storage';

const HomePage = () => {
	const images = [
		AssetImages.BANNER.BANNER_1,
		AssetImages.BANNER.BANNER_2,
		AssetImages.BANNER.BANNER_3,
		AssetImages.BANNER.BANNER_4,
		AssetImages.BANNER.BANNER_5,
	];

	const [currentImageIndex, setCurrentImageIndex] = useState(0);

	useEffect(() => {
		const interval = setInterval(() => {
			setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
		}, 3000);

		return () => clearInterval(interval);
	}, [images.length]);

	useEffect(() => {
		secureLocalStorage.removeItem('hotelId');
		secureLocalStorage.removeItem('hotelLocation');
		secureLocalStorage.removeItem('roomId');
		secureLocalStorage.removeItem('checkInDate');
		secureLocalStorage.removeItem('checkOutDate');
		secureLocalStorage.removeItem('numberGuest');
		secureLocalStorage.removeItem('numberRoom');
		secureLocalStorage.removeItem('city');
	}, []);

	return (
		<>
			<BoxContainer property='home__container'>
				{checkLogin() ? <HeaderUser /> : <HeaderGuest />}
				<Box className='content__banner'>
					<Box className='banner'>
						<img
							src={`${images[currentImageIndex]}`}
							alt=''
							style={{ width: '100%', objectFit: 'cover', display: 'block' }}
						/>
					</Box>
				</Box>

				<Box p='20px 60px'>
					<SearchComponent />
				</Box>

				<Box className='content__top-hotels'>
					<Typography className='top-hotels__title'>Top Luxury & Cheapest 5-star Home Stay</Typography>

					<div>item</div>
				</Box>
			</BoxContainer>
			<FooterCustomer />
		</>
	);
};

export default HomePage;
