import Welcome from "../components/Welcome";
import "../styles/style.css";

export default function Home(){
    return(
    <div className="Wrapper">
        <Welcome name="이정은"/>
    </div>
    );
}