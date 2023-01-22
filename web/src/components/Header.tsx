import logo_img from '../assets/logo.svg'
import { Plus } from 'phosphor-react'

const Header = () => {
    return (
        <div className="wfull max-w-3xl mx-auto flex items-center justify-between">
  
        <img src={logo_img} alt="Habits" />

        <button
          type='button'
          className='border border-violet-500 font-semibold rounded-lg px-6 py-4 flex justify-between items-center gap-3 hover:border-violet-300'
        >
          <Plus size={20} className="text-violet-500" />
          
          Novo hábito

        </button>

      </div>
    )
}

export default Header