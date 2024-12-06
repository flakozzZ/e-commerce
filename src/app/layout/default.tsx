import React, {ReactNode} from 'react';
import Header from "@/widgets/Header";
import Nav from "@/widgets/Nav/Nav.tsx";
import AboutUs from '@/widgets/AboutUs/AboutUs';
import Footer from '@/widgets/Footer';

interface LayoutProps {
    children: ReactNode
}

const DefaultLayout: React.FC<LayoutProps> = ({children}) => {
    return (
        <div className='w-full max-w-[1440px] mx-auto'>
            <Header />
            <div className={'mt-[53px]'}>
                <Nav/>
            </div>
            <AboutUs/>
            {children}
            <Footer/>
        </div>
    );
};

export default DefaultLayout;