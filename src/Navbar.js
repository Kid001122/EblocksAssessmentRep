const Navbar = () => {
    return ( 
        <nav className="navbar">

            <h1>Phonebook by Kidus </h1>
            <div className="links">
                <a href="/"style={{
                    color:"white",backgroundColor:'#f1356d',
                    borderRadius:'8xp'
                }} >Home</a>
                <a href="/create" style={{
                    color:"white",backgroundColor:'#f1356d',
                    borderRadius:'8xp'
                }}>New Phonebook</a>
                <a href="/entry" style={{
                    color:"white",backgroundColor:'#f1356d',
                    borderRadius:'8xp'
                }}>Add Entry</a>
            </div>
        </nav>
     );
}
 
export default Navbar;