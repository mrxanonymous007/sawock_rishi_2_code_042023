import AboutBanner from "../../components/AboutBanner/aboutbanner";
import AboutInfo from "../../data/about.json";
import Collapse from "../../components/Collapse/collapse";
import "./about.css";

function About() {
    return (
        <section className="about">
            <AboutBanner />

            <div className="about_collapse">
                {AboutInfo.map((info, index) => (
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

