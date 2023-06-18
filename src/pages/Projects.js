import Header from "../components/Header/Header";
import PageTransition from "../components/transitions/PageTransition";
// import PageTransition2 from "../components/transitions/PageTransition2";

const Projects = () => {
    return (
        <PageTransition>
            <Header />
            <div className="text-3xl font-bold flex flex-col items-center justify-center w-screen h-screen relative overflow-hidden">
                <img src="https://source.unsplash.com/1920x1080?london" alt="ll" className="absolute -z-10 top-0 left-0 w-screen h-screen object-cover"></img>
                <h1 className="py-2 px-4 bg-white">Projects page</h1>
            </div>
        </PageTransition>
    )
}

export default Projects;
