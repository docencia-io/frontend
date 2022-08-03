import { useSession, signIn, signOut } from "next-auth/react";
export default function Component() {
    const { data, status } = useSession();

    if (data) {
        return (
            <>
                Hola, {data.user.name}
                <button onClick={() => signOut()}>Cerrar sesión</button>
            </>
        );
    }
    return (
        <>
            <button onClick={() => signIn()}>Iniciar sesión</button>
        </>
    );
}
