import React, { useState } from 'react';
import Screen from '../../Components/Screen';
import { Link, useHistory } from 'react-router-dom';

const eng = 'http://www.mocky.io/v2/5ec29a292f000003b1c3546e';
const spa = 'http://www.mocky.io/v2/5ec29a162f000066cac3546d';

const Login = () => {
    let history = useHistory();
    const [loading, setLoading] = useState(false);

    const login = async endPoint => {
        setLoading(true);
        try {
            const response = await fetch(endPoint);
            const responseLang = await response.json();
            const { lang } = responseLang;

            history.push(`/dashboard?lang=${lang}`);
        } catch (e) {
            setLoading(false);
        }
    };

    return (
        <Screen>
            <h1>Login</h1>
            <div className="row">
                <input type="email" defaultValue="nicolasdanelon@gmail.com" />
            </div>
            <div className="row">
                <input type="password" defaultValue="123123123" />
            </div>
            <Link to="/dashboard">Go to dashboard</Link>
            <div className="row">
                <div className="col">
                    <button onClick={() => login(eng)} disabled={loading} className="button dark">
                        Login English
                    </button>
                </div>
                <div className="col">
                    <button onClick={() => login(spa)} disabled={loading} className="button dark">
                        Login Spanish
                    </button>
                </div>
            </div>
        </Screen>
    )
};

export default Login;
