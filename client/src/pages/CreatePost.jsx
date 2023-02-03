import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { preview } from '../assets';
import { getRandomPrompt } from '../utils';
import { FormField, Loader } from '../components';

function CreatePost() {
    const navigate = useNavigate();
    const [form, setForm] = useState({
        name: '',
        prompt: '',
        photo: '',
    });
    const [generatingImg, setGeneratingImg] = useState(false);
    const [loading, setLoading] = useState(false);

    return (
        <section>
            <div>
                <h1>Create</h1>
                <p>Say something to Dall-F, and he will drawing what you just said. It could be anything, so give it a try !</p>
            </div>
        </section>
    )
}

export default CreatePost;