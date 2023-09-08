import { Navbar, Nav} from 'react-bootstrap';
import styles from './MainNavigation.module.css';

function MainNavigation() {
    return (
        <Navbar expand="lg" variant="dark" className={styles.navbar}>
            <Navbar.Brand href="/" className={styles.brand}>Company Name</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className={`ml-auto ${styles.centeredNav}`}>
                    <Nav.Link href="/" className={styles.navLink}>Home</Nav.Link>
                    <Nav.Link href="/ourcollection" className={styles.navLink}>Our Collection</Nav.Link>
                    <Nav.Link href="/fabrics" className={styles.navLink}>Fabrics</Nav.Link>
                    <Nav.Link href="/alterations" className={styles.navLink}>Alterations</Nav.Link>
                    <Nav.Link href="/contact" className={styles.navLink}>Contact</Nav.Link>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    );
}

export default MainNavigation;

// function MainNavigation() {
//     return (
//         <Navbar expand="lg" variant="dark" style={{ padding: "25px" }} className={styles.navbar}>
//             <Navbar.Brand to="/">Company Name</Navbar.Brand>
//             <Navbar.Toggle aria-controls="basic-navbar-nav" />
//             <Navbar.Collapse id="basic-navbar-nav">
//                 <Nav className="ml-auto">
//                     <Nav.Link href='/'>Home</Nav.Link>
//                     <Nav.Link href='/ourcollection'>Our Collection</Nav.Link>
//                     <Nav.Link href='/fabrics'>Fabrics</Nav.Link>
//                     <Nav.Link href='/alterations'>Alterations</Nav.Link>
//                     <Nav.Link href='/contact'>Contact</Nav.Link>
//                 </Nav>
//             </Navbar.Collapse>
//         </Navbar>
//     );
// }


