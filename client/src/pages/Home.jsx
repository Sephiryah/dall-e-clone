import {useState, useEffect} from 'react';

import { Card, FormField, Loader } from '../components';

function RenderCards({ data, title }) {
    if(data?.length > 0) {
        return data.map((post) => <Card key={post._id} {...post}/>)
    }
    return (
        <h2 className="italic pt-4">{title}</h2>
    )
}

function Home() {
    const [loading, setLoading] = useState(false);
    const [ allPosts, setAllPosts] = useState(null);

    const [searchText, setSearchText] = useState('abc');

    return (
        <section className="bg-[#afb2b4] mx-3 pb-10 px-3  sm:px-6 md:mx-6 lg:mx-16 rounded-2xl">
            <div className="pt-6 pb-3">
                <h1 className="font-bold text-[24px] pb-3">Creation of Dall-F</h1>
                <p>See what DALL-F can do while browsing examples image that this AI generated.</p>
            </div>

            <div className="pb-3">
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
                            title="No result found. Dall-F is lazy today..."
                        />
                    ) : (
                        <RenderCards 
                            data={[]}
                            title="No post found. Dall-F is taking a coffee break ☕..."
                        />
                    )} 
                </div>
            </div>
        </section>
    )
}

export default Home;