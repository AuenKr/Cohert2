import './App.css'
import RevenueCard from './components/RevenueCard'

function App() {

  return (
    <>
      <div className='grid grid-cols-4'>
        <RevenueCard title={"Amount Pending"} amount={12345} noOrder={13}></RevenueCard>
      </div>
    </>
  )
}

export default App
