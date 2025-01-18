/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { useEffect, useState } from 'react';
import { postApi } from '../services/services';
import { APIPATH } from '../api/urls';
import { useAuthStore } from '../store/auth/authStore';
import { toast } from 'react-toastify';
import LoaderWithBackground from '../components/LoaderWithBackground.tsx';
const Privacy = () => {
    const { token, logout } = useAuthStore();
    const [loading, setLoading] = useState(false);
    const [aboutData, setAboutData] = useState<any>('');
    useEffect(() => {
        getAbout();
    }, []);
    const getAbout = () => {
        setLoading(true);
        postApi(APIPATH.aboutUs, {}, token, logout)
            .then((resp) => {
                const { success, data, message } = resp;
                if (success) {
                    setAboutData(data);
                    // setOtherBlogs(other_blogs);
                } else {
                    toast.error(message);
                }
            })
            .catch((err) => console.log(err)).finally(() => {
                setLoading(false);
            });
    };
    return (
        <section>
            <LoaderWithBackground visible={loading} />
            <div className="about-page-section">
                <div className="container">
                    <div className="others-page-content">
                        <h3>{aboutData?.title}</h3>
                        <div dangerouslySetInnerHTML={{ __html: aboutData?.description }} />
                    </div>
                </div>
            </div>
        </section>

    );
}

export default Privacy;