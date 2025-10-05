import { Link, usePage } from "@inertiajs/react"

const styleNav = "nav-link text-dark";
const styleNavActive = "nav-link text-dark fw-bold";

const styleDropDown = "dropdown-item";
const styleDropDownActive = "dropdown-item fw-bold";

export default function Layout({ children }) {

    const user = usePage().props.auth.user;
    const { url } = usePage();

    return (
        <>
            <header className="my-3">
                <nav className="nav-bar d-flex justify-content-center gap-3">
                    <Link className={url == '/' ? styleNavActive : styleNav} href={'/'}>Home</Link>
                    <Link className={url == '/seasons' ? styleNavActive : styleNav} href={'/seasons'}>Seasons</Link>
                    <Link className={url == '/top/1' ? styleNavActive : styleNav} href={'/top/1'}>Top Anime</Link>

                    <Link className={url == '/about' ? styleNavActive : styleNav} href={'/about'}>About</Link>

                    {
                        user ?
                            <li className="nav-link dropdown">
                                <a className="nav-link dropdown-toggle bg-white border rounded-3 shadow-sm px-3" role="button" data-bs-toggle="dropdown"
                                    aria-expanded="false">
                                    {user.name}
                                </a>
                                <ul className="dropdown-menu p-2 rounded-3">
                                    <li>
                                        <Link className={url == '/profile' ? styleDropDownActive : styleDropDown} href={'/profile'}>Profile</Link>
                                    </li>
                                    <li>
                                        <Link className={url == '/favorite' ? styleDropDownActive : styleDropDown} href={'/favorite'}>Favorite</Link>
                                    </li>
                                    <li>
                                        <Link className={url == '/wishlist' ? styleDropDownActive : styleDropDown} href={'/wishlist'}>Wishlist</Link>
                                    </li>
                                    <li>
                                        <Link method="post" className={url == '/logout' ? styleDropDownActive : styleDropDown} href={'/logout'}>Logout</Link>
                                    </li>
                                </ul>
                            </li> :

                            <Link className={url == '/login' ? styleNavActive : styleNav} href={'/login'}>Login</Link>
                    }
                </nav>
            </header>

            <main>
                <div className="container-fluid my-5">
                    {children}
                </div>
            </main>
        </>
    )
}