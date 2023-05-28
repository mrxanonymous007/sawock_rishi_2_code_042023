//importation des composants
import Banner from '../../components/Banner/banner';
import Card from '../../components/Card/card';

//importation du CSS
import './home.css';

function Home() {
    return (
        <section className="home">
            <Banner />
            <Card />
        </section>
    );
}

export default Home;

