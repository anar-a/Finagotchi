export default function NavBar() {
    return <nav className="nav">
        <a href="/" className="site-title">Finogatchi</a>
        <ul>
            <li>
                <a href="/finogatchis">Finogatchis</a>
            </li>
            <li>
                <a href="/about">About</a>
            </li>
            <li>
                <a href="/login">Login</a>
            </li>
        </ul>
    </nav>
}