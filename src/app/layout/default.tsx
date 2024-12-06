import React, {ReactNode} from 'react';


interface LayoutProps {
    children: ReactNode
}

const DefaultLayout: React.FC<LayoutProps> = ({children}) => {
    return (
        <div>
            {children}
        </div>
    );
};

export default DefaultLayout;