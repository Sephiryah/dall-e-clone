import {useState, useEffect} from 'react';

import { Card, FormField, Loader } from '../components';

function RenderCards({ data, title }) {
    if(data?.length > 0) {
        return data.map((post) => <Card key={post._id} {...post}/>)
    }
    return (
        <h2>{title}</h2>
    )
}

function Home() {
    const [loading, setLoading] = useState(false);
    const [ allPosts, setAllPosts] = useState(null);

    const [searchText, setSearchText] = useState('');

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

                <div>
                    {searchText ? (
                        <RenderCards
                            data={[]}
                            title="There is nothing to find..."
                        />
                    ) : (
                        <RenderCards 
                            data={[]}
                            title="Dall-F is taking a coffee break ☕..."
                        />
                    )} 
                </div>
            </div>
        </section>
    )
}

export default Home;