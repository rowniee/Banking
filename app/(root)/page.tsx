//import { Home } from 'lucide-react'
import HeaderBox from '@/components/HeaderBox'
import RightSidebar from '@/components/RightSidebar';
import TotalBalanceBox from '@/components/TotalBalanceBox';
import React from 'react'

const Home = () => {
  const loggedIn = { firstName: 'Ronnie', lastName: 'Ngacha', email: 'ngachamuronnie@gmail.com'};


  return (
    <section className='home'>
      <div className='home-content'>
        <header className='home-header'>
          <HeaderBox 
            type = "greeting"
            title = "Welcome"
            user = {loggedIn?.firstName || 'Guest'}
            subtext = "Access and manage your account and transactions"
          
          />
          <TotalBalanceBox 
            accounts = {[]}
            totalBanks = {1}
            totalCurrentBalance = {1250.35}
          /> 
        </header>
        RECCENT TRANSACTION
      </div>
      <RightSidebar user={loggedIn}
      transactions = {[]}
      banks = {[{currentBalance: 123.50}, {currentBalance:500.50}]}
      />
    </section>
  )
}

export default Home