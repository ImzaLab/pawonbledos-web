import MainLayout from '@/layouts/MainLayout/MainLayout';
import { FC } from 'react';

const Home: FC = () => {
    return (
        <MainLayout>
            <section className="p-8 flex flex-col h-full justify-center">
                <h1 className=''>It Works</h1>
            </section>
        </MainLayout>
    );
}

export default Home