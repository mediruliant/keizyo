import Header from "../components/Header/Header";
import MouseFollowingOnHover from "../components/mouseFollowing/mouseFollowing";
import PageTransition from "../components/transitions/PageTransition";

const Contact = () => {
    return (
        <PageTransition>
            <Header />
            <div className="text-3xl font-bold flex items-center justify-center w-screen relative overflow-hidden">
                <MouseFollowingOnHover />
            </div>
        </PageTransition>
    )
}

export default Contact;
