import logo from '../assets/logo.jpg'

export default function Logo() {
  return (
    <div className="flex items-center justify-center w-20 h-20 rounded-lg shadow-lg overflow-hidden bg-white">
      <img
        src={logo}
        alt="Giovanni Ayiah Mensah Logo"
        className="w-20 h-20 object-contain"
        draggable={false}
      />
    </div>
  )
}