import React from 'react';
import Header from '../../components/Header/Header';
import MobileFooter from '../../components/MobileFooter/MobileFooter';
import MobileHeader from '../../components/MobileHeader/MobileHeader';

function HomeFeedPage(props) {
    return (
        <div>
            <Header/>
            <MobileHeader/>
            <MobileFooter/>
        </div>
    );
}

export default HomeFeedPage;