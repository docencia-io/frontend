import Login from './login-btn';

export default function Navbar() {
    return (
        <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
            <a class="navbar-brand" href="#">
                Docencia
            </a>
            <button
                class="navbar-toggler"
                type="button"
                data-toggle="collapse"
                data-target="#navbarNavAltMarkup"
                aria-controls="navbarNavAltMarkup"
                aria-expanded="false"
                aria-label="Toggle navigation"
            >
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
                <div class="navbar-nav">
                    {/* <a class="nav-item nav-link active" href="#">
                        Mis cursos <span class="sr-only">(current)</span>
                    </a> */}
                    <a class="nav-item nav-link" href="/profile">
                        Perfil
                    </a>
                    <a class="nav-item nav-link" href="/ide">
                        IDE
                    </a>
                    <a class="nav-item nav-link" href="/udpiler">
                        UDPiler
                    </a>
                    <a class="nav-item nav-link " href="/database">
                        Base de datos
                    </a>
                    <a class="nav-item nav-link" href="/server">
                        Server
                    </a>
                </div>
            </div>
            <div className="text-light">
                    <Login />
            </div>
        </nav>
    );
}
