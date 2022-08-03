export default function Breadcrumb() {
    return (
        <div>
            <nav aria-label="breadcrumb">
                <ol class="breadcrumb">
                    <li class="breadcrumb-item">
                        <a href="/">INICIO</a>
                    </li>
                    <li class="breadcrumb-item active" aria-current="page">
                        PERFIL
                    </li>
                </ol>
            </nav>
            <h1 class="h2">Perfil</h1>
        </div>
    );
}
