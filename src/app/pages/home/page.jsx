import CardList from '@/app/components/CardList/CardParts'

import UserHero from '@/app/components/Hero/Hero'
import ImagesSection from '@/app/components/ImagesSection/ImagesSection'
import MainFooter from '@/app/components/MainFooter/MainFooter'
import MainSection from '@/app/components/MainSection/MainSection'
import MainSlide from '@/app/components/MainSlide/MainSlide'
import TextSection from '@/app/components/TextSection/TextSection'

import React from 'react'

import UserHeader from '@/app/components/header/Header'

const Userpage = () => {
  return (
    <>

    <UserHeader />
    <UserHero/>
    < TextSection />
    <CardList />
    <ImagesSection/>
    <MainSection/>
    <MainSlide/>
    <MainFooter/>
    </>
  )
}

export default Userpage