export default function NavBar() {
    return <nav className="nav">
        <a href="/" className="site-title">Finagotchi</a>
        <ul>
            <li>
                <a href="/about">About</a>
            </li>
            <li>
                <a href="/signup">Signup</a>
            </li>
            <li>
                <a href="/login">Login</a>
            </li>
        </ul>
    </nav>
}