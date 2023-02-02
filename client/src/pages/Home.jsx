import {useState, useEffect} from 'react';

import { Card, FormField, Loader } from '../components';

function Home() {
    const [loading, setLoading] = useState(true);
    const [ allPosts, setAllPosts] = useState(null);

    return (
        <section>
            <div>
                <h1 className="font-bold text-[24px]">Creation of Dall-F</h1>
                <p>See what DALL-F can do while browsing examples image that this AI generated.</p>
            </div>

            <div>
                <FormField/>
            </div>

            <div className="w-[50px]">
                {loading ? (
                    <div>
                        <Loader />
                    </div>
                ) : (
                    <>
                    </>
                )}
            </div>
        </section>
    )
}

export default Home;