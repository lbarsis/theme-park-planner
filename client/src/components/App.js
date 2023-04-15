import React from 'react';
import { Routes, Route } from 'react-router-dom'
import Navbar from './Navbar';
import Home from './themeParks/Home';
import Signup from './Signup';
import Login from './Login'
import UserItineraries from './users/UserItineraries';
import AddItineraryForm from './itineraries/AddItineraryForm';
import Users from './users/Users';
import AddThemePark from './themeParks/AddThemePark';
import AddRide from './rides/AddRide';
import { UserProvider } from '../context/userContext';
import { ErrorsProvider } from '../context/errorsContext';
import { ThemeParkProvider } from '../context/themeParkContext';
import AddReviewForm from './reviews/AddReviewForm'
import ReviewList from './reviews/ReviewList'
import { ReviewProvider } from '../context/reviewContext';
import MyRides from './rides/MyRides';


function App() {

  return (
    <div className="App">
      <ErrorsProvider>
        <ThemeParkProvider>
          <UserProvider>
            <ReviewProvider>
              <Navbar />
              <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/my-itineraries' element={<UserItineraries />} />
                <Route path='/my-rides' element={<MyRides />} />
                <Route path='/add-itinerary' element={<AddItineraryForm />} />
                <Route path='/add-theme-park' element={<AddThemePark />} />
                <Route path='/reviews' element={<ReviewList />} />
                <Route path='/add-ride-review' element={<AddReviewForm />} />
                <Route path='/add-ride' element={<AddRide />} />
                <Route path='/login' element={<Login />} />
                <Route path='/signup' element={<Signup />} />
                <Route path='/users' element={<Users />} />
              </Routes>
            </ReviewProvider>
          </UserProvider>
        </ThemeParkProvider>
      </ErrorsProvider>
    </div>
  );
}

export default App;
