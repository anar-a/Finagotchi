export default function NavBar() {
    return <nav className="nav">
        <a href="/" className="site-title">Finagotchi</a>
        <ul>
            <li>
                <a href="/dashboard">Dashboard</a>
            </li>
            <li>
                <a href="/about">About</a>
            </li>
            <li>
                <a className="button__sign-up" href="/api/auth/signup">Signup</a>
            </li>
            <li>
                <a className="button__login" href="/api/auth/login">Login</a>
            </li>
        </ul>
    </nav>
}