function Home() {
    return (
        <div className="container py-4 d-flex flex-column gap-5">
            <div className="row align-items-center mb-5">
                <div className="col-md-6">
                    <h1>Welcome to Spin & Sound</h1>
                    <p>Discover the timeless sound...</p>
                </div>
                <div className="col-md-6 mb-4">
                    <img className="img-fluid rounded-4" width={600} src="https://images.unsplash.com/photo-1496293455970-f8581aae0e3b?q=80&w=2013&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
                </div>

                <p>Discover the timeless experience of vinyl at Spin & Sound. From iconic classics to modern favorites, our collection is curated for true music lovers who appreciate rich, authentic sound. Whether you're starting your record journey or expanding your collection, we bring you closer to the music you love — one record at a time.</p>
            </div>

            <div className="row align-items-center mt-5">
                <div className="col-md-6">
                    <img 
                        className="img-fluid rounded-4 shadow-sm"
                        src="https://images.unsplash.com/photo-1576525865260-9f0e7cfb02b3?q=80&w=1064&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
                        alt="Vinyl player" 
                    />
                </div>
                <div className="col-md-6">
                    <h2 className="fw-bold">Why Vinyl?</h2>
                    <p className="text-muted">Vinyl records offer a warm, rich sound that digital formats simply can't replicate. Each pop and crackle tells a story, making every listening session a unique experience.</p>
                    <ul className="list-unstyled">
                        <li className="mb-2"> Warm analog sound</li>
                        <li className="mb-2"> Collectible artwork</li>
                        <li className="mb-2"> Unique listening experience</li>
                    </ul>
                </div>
            </div>

        </div>



        

    )

    
}



export default Home;