import {useState, useEffect} from 'react';

import { Card, FormField, Loader } from '../components';

function Home() {
    const [loading, setLoading] = useState(false);
    const [ allPosts, setAllPosts] = useState(null);

    return (
        <section>
            <div>
                <h1>Creation of Dall-F</h1>
            </div>
        </section>
    )
}

export default Home;