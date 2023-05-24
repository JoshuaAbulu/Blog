const Home = () => {
    return ( 
        <div className="h-screen max-w-screen flex justify-center bg-black text-white opacity-80 items-center">
            <div className="w-2/3 flex flex-col pb-48 details">
                <h1 className="text-3xl font-black">
                    {`<JOSHUA ABULU/>`}
                </h1>
                <h2 className="text-xl font-black my-1">
                    A Full Stack Developer
                </h2>
                <p className="mt-4 font-bold text-gray-200 text-justify">I specialize in delivering fuctional and user-friendly websites ad webapps which are responsive on all kinds of devices.</p>
            </div>
        </div>
     );
}
 
export default Home;