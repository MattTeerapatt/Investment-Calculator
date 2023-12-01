import logo from '../assets/money.png';

export default function Header() {
    return (
    <header id ="header" >
        <img src={logo} />
        <h1>React Investment</h1>
    </header>
    )
}