import Link from 'next/link';

const MainMenu = () => {
    return (
        <>
            <ul>
                <li className="menu-item-has-children">
                    <Link href="/">Accueil</Link>
                </li>
                <li className="menu-item-has-children"><Link href="/about">A propos</Link>
                </li>
                <li className="menu-item-has-children"><Link href="/services">Nos Services</Link>
                </li>
                <li className="menu-item-has-children"><Link href="/realisation">Nos réalisations</Link>
                </li>
                <li className="menu-item-has-children"><Link href="/blog">Blog</Link>
                </li>
                <li><Link href="/contact">Contact</Link></li>
            </ul>
        </>
    );
};

export default MainMenu;