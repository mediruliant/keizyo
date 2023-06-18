import Header from "../components/Header/Header";
import PageTransition from "../components/transitions/PageTransition";

const About = () => {
    return (
        <PageTransition>
            <Header />
            <div className="h-[2000px] w-96 bg-teal-600"></div>
        </PageTransition>
    )
}

export default About;