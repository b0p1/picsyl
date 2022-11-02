import React from 'react';
import FeedPost from '../../components/FeedPost/FeedPost';
import Header from '../../components/Header/Header';
import MobileFooter from '../../components/MobileFooter/MobileFooter';
import MobileHeader from '../../components/MobileHeader/MobileHeader';

function HomeFeedPage(props) {
    return (
        <div>
            <Header/>
            <MobileHeader/>
            <FeedPost/>
            <MobileFooter/>
        </div>
    );
}

export default HomeFeedPage;