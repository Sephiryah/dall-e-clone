import {useState, useEffect} from 'react';

import { Card, FormField, Loader } from '../components';

function Home() {
    const [loading, setLoading] = useState(false);
    const [ allPosts, setAllPosts] = useState(null);

    const [searchText, setSearchText] = useState('test');

    return (
        <section>
            <div>
                <h1 className="font-bold text-[24px]">Creation of Dall-F</h1>
                <p>See what DALL-F can do while browsing examples image that this AI generated.</p>
            </div>

            <div>
                <FormField/>
            </div>

            <div>
                {loading ? (
                    <div  className="w-[50px]">
                        <Loader />
                    </div>
                ) : (
                    <>
                    {searchText && (
                        <h2 className="text-[18px] font-bold">Showing Result for <span>{searchText}</span></h2>
                    )}
                    </>
                )}
            </div>
        </section>
    )
}

export default Home;