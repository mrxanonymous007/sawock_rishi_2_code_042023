//importation des composants réutilisables
import AboutBanner from "../../components/AboutBanner/aboutbanner";
import Collapse from "../../components/Collapse/collapse";

//importation du JSON
import AboutInfo from "../../data/about.json";

//importation du CSS
import "./about.css";

function About() {
    return (
        <section className="about">
            <AboutBanner />

            <div className="about_collapse">
                {AboutInfo.map((info, index) => (
                    /*appel à la méthode map sur le tableau AboutInfo. Pour chaque élément info du tableau, 
                    une div est créée avec une clé (key={index}) basée sur l'index de l'élément dans le tableau. */
                    <div key={index}>
                        <Collapse
                            title={info.title}
                            texte={info.text}
                        />
                    </div>
                ))}
            </div>

        </section>
    );
}

export default About;

