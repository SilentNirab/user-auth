import { Outlet } from 'react-router-dom';
import Header from '../Header/Header';

const Root = () => {
    return (
        <div>
            <Header></Header>
            <div className="max-w-6xl mx-auto">
                <Outlet></Outlet>
            </div>
            
        </div>
    );
};

export default Root;