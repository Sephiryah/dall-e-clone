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

    const generateImage = () => {

    }

    const handleSubmit = () => {

    }

    const handleChange = (e) => {

    }

    const handleSurpriseMe = () => {

    }
    
    return (
        <section>
            <div>
                <h1>Create</h1>
                <p>Say something to Dall-F, and he will drawing what you just said. It could be anything, so give it a try !</p>
            </div>

            <form action={handleSubmit}>
                <div>
                    <FormField
                        labelName="Your name"
                        type="text"
                        name="name"
                        placeholder="John Doe"
                        value={form.name}
                        handleChange={handleChange}
                    />
                    <FormField
                        labelName="Prompt"
                        type="text"
                        name="prompt"
                        placeholder=""
                        value={form.prompt}
                        handleChange={handleChange}
                        isSurpriseMe
                        handleSurpriseMe={handleSurpriseMe}
                    />

                    <div>
                        {form.photo ? (
                            <img
                                src={form.photo}
                                alt={form.prompt}
                            />
                        ) : (
                            <img
                                src={preview}
                                alt="preview"
                            />
                        )}

                        {generatingImg && (
                            <div>
                                <Loader/>
                            </div>
                        )}
                    </div>
                </div>

                <div>
                    <button
                        type="button"
                        onClick={generateImage}
                    >
                        {generatingImg ? 'Generating...' : 'Generate'}
                    </button>
                </div>
            </form>
        </section>
    )
}

export default CreatePost;