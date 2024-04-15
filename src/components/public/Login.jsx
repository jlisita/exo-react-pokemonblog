import Cookies from "js-cookie";
import { useNavigate } from "react-router-dom";

const Login = () => {

    const navigate = useNavigate();

    const handleLogin = (event) =>{
        event.preventDefault();
    
        const id = event.target.identifiant.value;
        const password = event.target.password.value;

        const json = JSON.stringify(id, password);

        fetch("https://pokebuildapi.fr/api/v1/login", {
        method: "POST",
        body: json,
        })
        .then((response) => {
            return response.json();
        })
        // on utilise catch car l'url n'existe pas et on va récupérer une erreur
        // donc on fait notre code dans le catch. Mais il faudrait le faire dans un then
        // avec le vrai token
        .catch((data) => {
            const token = "eznfjezcoiezhoifzejopfezjiocneziodjiojiod";

            Cookies.set("token", token);
            navigate("/admin/pokemons");
        });
    };

    return (
        <>
             <p>Connexion</p>
             <form onSubmit={handleLogin}>
                <div>
                    <label htmlFor="identifiant"></label>
                    <input type="text" id = "identifiant" name = "identifiant"/>
                </div>
                <div>
                    <label htmlFor="password"></label>
                    <input type="password" id = "password" name = "password"/>
                </div>
                <div>
                    <input type="submit"/>
                </div>
             </form>
        </>
    );
};

export default Login;