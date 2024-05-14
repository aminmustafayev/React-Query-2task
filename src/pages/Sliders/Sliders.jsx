import React, { useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
// import Movies from '../../classes/Movies.js'

import 'swiper/css';
import 'swiper/css/pagination';

import './slider.css'


import { Pagination } from 'swiper/modules';
import { useGetMovieQuery } from '../../services/moviesQuerySlice';


const Sliders = () => {
  const {
    data: movies,
    isLoading,
    refetch,
  } = useGetMovieQuery()
  console.log(movies)
  useEffect(()=>{
    refetch()
  },[])
  return (
    <>
      <Swiper
      style={{marginTop:"50px"}}
        slidesPerView={3}
        spaceBetween={20}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        {movies && movies.map((e) => {
            return(
              <SwiperSlide  key={e.id}  >
              <div  className='card'>
                <img style={{ width: '100%', height: "300px" }} src={e.posterImg} alt="" />
                <div>
                  <h1>{e.title}</h1>
                  <p>Genre:{e.genre} </p>
                  <b>Year:{e.releaseYear}</b>
                </div>
              </div>
            </SwiperSlide>
  
            )
         
        })}


      </Swiper>
    </>
  )
}

export default Sliders