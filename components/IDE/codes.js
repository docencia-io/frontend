let CodeCpp = `#include <iostream>
using namespace std;

int main ( )
{
    cout << "Hola Mundo" << endl;
    return 0;
}`;


let CodeJava = `public class Solution
{ 
    public static void main(String args[]) 
    { 
        System.out.println("Hola Mundo"); 
    } 
}
`
let CodePython = `print("Hola Mundo")`

let CodeGolang = `package main

import "fmt"

func main() {
    fmt.Println("Hola Mundo")
}`
let CodeSQL = `select 'Hola Mundo' as mensaje;`

let Type=(key)=> {
    console.log("AQUI", key)
    switch (key) {
        case "Python":
            return "python"
            break;
        case "Java":
            return "java"
            break;
        case "SQL":
            return "mysql"
            break;
        case "Golang":
            return "golang"
            break;
        default:
            return "csharp";
    }

}

let TypeCode=(key)=> {
    switch (key) {
        case "Python":
            return CodePython
            break;
        case "Java":
            return CodeJava
            break;
        case "SQL":
            return CodeSQL
            break;
        case "Golang":
            return CodeGolang
            break;
        default:
            return CodeCpp;
    }

}

let Langs = [{
    val: "Cpp",
    name: "C++"
},{
    val: "Python",
    name: "Python"
},{
    val: "Java",
    name: "Java"
},{
    val: "Golang",
    name: "Golang"
},{
    val: "SQL",
    name: "SQL"
}
]



export  {CodeCpp, CodeJava,CodePython,CodeGolang,CodeSQL,Langs,Type,TypeCode} 
  