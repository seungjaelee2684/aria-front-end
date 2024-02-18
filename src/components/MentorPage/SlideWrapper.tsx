import React from 'react'
import { useQuery } from 'react-query';
import { getNewMentorBannerApi } from '../../api/banner';
import SlideShow from './SlideShow';

const SlideWrapper = () => {

    const { isLoading, isError, error, data } = useQuery("getMentorBanner", () => getNewMentorBannerApi(), {
        refetchOnWindowFocus: false,
        refetchOnMount: false
    });

    const NewMentorListData = data?.data.bannerData;

    return (
        <>
            <SlideShow NewMentorListData={NewMentorListData}/>
        </>
    )
};

export default SlideWrapper;