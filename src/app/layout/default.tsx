import React, {ReactNode} from 'react';


interface LayoutProps {
    children: ReactNode
}

const DefaultLayout: React.FC<LayoutProps> = ({children}) => {
    return (
        <div className='w-full max-w-[1440px] mx-auto'>
            {children}
        </div>
    );
};

export default DefaultLayout;