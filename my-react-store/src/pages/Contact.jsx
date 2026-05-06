import { useContext } from "react";
import GlobalContext from "../state/globalContext"; 
import { IconMail, IconPhone, IconClockHour5 } from '@tabler/icons-react';

function Contact() {
    const user = useContext(GlobalContext).user;

    return (
        <div className="container py-5">

            <div className="text-center mb-5">
                <h1 className="display-4">Contact Spin & Sound</h1>
                <p className="lead">
                    We'd love to hear from you
                </p>
            </div>

            <div className="row align-items-center">

                <div className="col-md-6 mb-4">
                    <img 
                        src="https://images.unsplash.com/photo-1582923450330-4a0fabe83971?q=80&w=2039&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                        className="img-fluid rounded shadow"
                        alt="vinyl"
                    />
                </div>

                <div className="col-md-6">

                    <div className="card mb-3">
                        <div className="card-body">
                            <h5 className="card-title">
                                <IconMail className="me-2"/> Email
                            </h5>
                            <p className="card-text">{user.email}</p>
                        </div>
                    </div>

                    <div className="card mb-3">
                        <div className="card-body">
                            <h5 className="card-title">
                                <IconPhone className="me-2"/> Phone
                            </h5>
                            <p className="card-text">+52 665 456 7890</p>
                        </div>
                    </div>

                    <div className="card">
                        <div className="card-body">
                            <h5 className="card-title">
                                <IconClockHour5 className="me-2"/> Store Hours
                            </h5>
                            <p className="card-text">
                                Monday - Friday: 10:00 AM - 7:00 PM <br/>
                                Saturday: 11:00 AM - 6:00 PM <br/>
                                Sunday: Closed
                            </p>
                        </div>
                    </div>

                </div>
            </div>

            <div className="text-center mt-5">
                <p className="text-muted">
                    Hi {user.name}, thanks for visiting Spin & Sound 
                </p>
            </div>

        </div>
    );
}

export default Contact;