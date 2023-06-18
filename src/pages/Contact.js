import Header from "../components/Header/Header";
import PageTransition from "../components/transitions/PageTransition";

const Contact = () => {
    return (
        <PageTransition>
            <Header />
            <div className="text-3xl font-bold flex items-center justify-center w-screen h-[4000px] relative overflow-hidden">
                <img src="https://source.unsplash.com/1920x1080?kitten" alt="ht" className="absolute -z-10 top-0 left-0 w-screen h-screen object-cover"></img>
                <h1 className="py-2 px-4 bg-white">Contact page</h1>
            </div>
        </PageTransition>
    )
}

export default Contact;
