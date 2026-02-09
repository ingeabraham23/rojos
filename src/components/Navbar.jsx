import { Link } from 'react-router-dom';
import "./Navbar.css"
import {
    faBan,
    faCarBurst,
    faChurch,
    faCommentsDollar,
    faFireFlameCurved,
    faHandsPraying,
    faInfo,
    faMountain,
    faPhone,
    faTrashCan,
    faTree,
    faCross,
    faPersonWalking,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClockFour } from '@fortawesome/free-solid-svg-icons/faClockFour';

const navigationItems = [
  { path: '/', icon: faBan, label: 'Sanciones' },
  { path: '/tarifas', icon: faCommentsDollar, label: 'Tarifas' },
  { path: '/accidente', icon: faCarBurst, label: 'Accidente' },
  { path: '/huapaltepec', icon: faTree, label: 'Huapaltepec' },
  { path: '/basura', icon: faTrashCan, label: 'Basura' },
  { path: '/tepepan', icon: faMountain, label: 'Tepepan' },
  { path: '/sanmiguel', icon: faChurch, label: 'San Miguel' },
  { path: '/telefonos', icon: faPhone, label: 'Telefonos' },
  { path: '/tarjetas', icon: faInfo, label: 'Tarjetas' },
  { path: '/tiempos', icon: faClockFour, label: 'Tiempos' },
  { path: '/virgen', icon: faHandsPraying, label: 'Virgen' },
  { path: '/antorcha', icon: faFireFlameCurved, label: 'Antorcha' },
  { path: '/cristo', icon: faCross, label: 'cristo' },
  { path: '/desfile', icon: faPersonWalking, label: 'desfile' },
  { path: '/reunion', icon: faPersonWalking, label: 'reunion' },

];

function Navbar() {
  return (
    <nav className="navbar">
      <ul className="navbar-nav">
        {navigationItems.map((item) => (
          <li className="nav-item" key={item.path}>
            <Link to={item.path} className="nav-link">
              <FontAwesomeIcon icon={item.icon} size="2x" style={{ fontSize: '24px' }}/> {/* Renderiza el icono de Font Awesome */}
              <span className="text-small">{item.label}</span> {/* Agrega el span para mostrar la etiqueta */}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default Navbar;