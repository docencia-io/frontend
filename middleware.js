
export function middleware(req) {
    return NextResponse.next();
    //return NextResponse.rewrite(new URL("/login", req.url));
    // Preguntar a mauricio zuñiga

    // console.log("R",req)
    // const session = await getSession({ req, secret: "cooding.io" });
    // console.log("S",session)
    // if (!session){
    //     return NextResponse.rewrite(new URL("/login", req.url));
    // }
    // return NextResponse.next();
}
export const config = {
    matcher:["/app/ide"],
    
    // ["/app/ide",
    // "/udpiler",
    // "/database",
    // "/server",
    // "/courses",
    // "/profile"],
};
