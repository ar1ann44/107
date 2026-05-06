import { IconTruckDelivery, IconDeviceProjector, IconMusicStar, IconVinyl } from '@tabler/icons-react';

function Home() {
    return (
        <div className="container py-5">

            <div className="row align-items-center mb-5">
                <div className="col-md-6">
                    <h1 className="">Welcome to Spin & Sound</h1>
                    <p className="lead">
                        Discover the timeless sound of vinyl records.
                    </p>
                </div>

                <div className="col-md-6">
                    <img 
                        className="img-fluid rounded-4 shadow"
                        src="https://images.unsplash.com/photo-1496293455970-f8581aae0e3b"
                        alt="vinyl"
                    />
                </div>
            </div>

            <div className="card mb-5">
                <div className="card-body text-center">
                    <h3>
                    <IconVinyl stroke={2} className='me-4'/>
                        Why Spin & Sound?
                    </h3>
                    <p className="text-muted">
                        We bring you closer to the music you love — one record at a time.
                        Whether you're starting your vinyl journey or expanding your collection,
                        we have something special for you.
                    </p>
                </div>
            </div>

            <div className="row text-center mb-5">
                <div className="col-md-4">
                    <div className="card h-100">
                        <div className="card-body">
                            <h5>
                            <IconDeviceProjector stroke={2} className='me-4'/>
                                Curated Collection
                            </h5>
                            <p className="text-muted">
                                Handpicked vinyl records from all genres.
                            </p>
                        </div>
                    </div>
                </div>

                <div className="col-md-4">
                    <div className="card h-100">
                        <div className="card-body">
                            <h5>
                            <IconMusicStar stroke={2} className='me-4'/>
                                Premium Quality
                            </h5>
                            <p className="text-muted">
                                Only the best pressings for the best sound.
                            </p>
                        </div>
                    </div>
                </div>

                <div className="col-md-4">
                    <div className="card h-100">
                        <div className="card-body">
                            <h5>
                            <IconTruckDelivery stroke={2} className='me-4'/>
                                Fast Delivery
                            </h5>
                            <p className="text-muted">
                                Get your records quickly and safely.
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="row align-items-center">
                <div className="col-md-6">
                    <img
                        className="img-fluid rounded-4 shadow"
                        src="https://images.unsplash.com/photo-1576525865260-9f0e7cfb02b3"
                        alt="record player"
                    />
                </div>

                <div className="col-md-6">
                    <h3>Feel the Music</h3>
                    <p className="text-muted">
                        Vinyl isn't just music — it's an experience. Feel the warmth,
                        the depth, and the authenticity of analog sound.
                    </p>
                </div>
            </div>

        </div>
    );
}

export default Home;