import React from 'react'
import { useQuery } from 'react-query';
import { getNewMentorBannerApi } from '../../api/banner';
import SlideShow from './SlideShow';
import LoadingSpinner from '../common/LoadingSpinner';

const SlideWrapper = () => {

    const { isLoading, isError, error, data } = useQuery("getMentorBanner", async () => await getNewMentorBannerApi(), {
        refetchOnWindowFocus: false,
        refetchOnMount: false
    });

    const NewMentorListData = data ? data?.data.bannerData : null;

    if (isLoading) return <LoadingSpinner />;

    return (
        <>
            <SlideShow NewMentorListData={NewMentorListData}/>
        </>
    )
};

export default SlideWrapper;