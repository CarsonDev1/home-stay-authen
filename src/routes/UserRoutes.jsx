import React, { Suspense, lazy } from 'react';
import { Route, Routes } from 'react-router-dom';
import { routes } from '.';
import Account from '../modules/Home/isLogged/Account/Account';

const HomePage = lazy(() => import('../modules/Home/Home.Container'));

const BookingDetailsPage = lazy(() => import('../modules/Home/isLogged/BookingDetails/BookingDetails.Container'));

const NotFoundPage = lazy(() => import('../modules/Error/NotFound.Container'));

const UserRoutes = () => {
	return (
		<Suspense>
			<Routes>
				<Route path={routes.home.root} element={<HomePage />} />
				<Route path='/account' element={<Account />} />
				<Route path={routes.home.bookingDetails} element={<BookingDetailsPage />} />
				<Route path={'*'} element={<NotFoundPage />} />
			</Routes>
		</Suspense>
	);
};

export default UserRoutes;
