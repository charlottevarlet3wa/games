import { NavLink } from 'react-router-dom'

function Nav() {
    const checkIsactive = ({ isActive }) => {
        return {
          display: "block",
          margin: "1rem 0",
          color: isActive ? "orange" : "",
        };
      };
  return (
    <>
    <nav>
      <ul>
        <li>
          <NavLink style={checkIsactive} to="/">
            ACCUEIL
          </NavLink>
        </li>
        <li>
          <NavLink style={checkIsactive} to="/hangman">
            HANGMAN
          </NavLink>
        </li>
      </ul>
    </nav>
    </>
  )
}

export default Nav