import React from 'react'
import { useQuery } from 'react-query';
import { getNewMentorBannerApi } from '../../api/banner';
import SlideShow from './SlideShow';

const SlideWrapper = () => {

    const { isLoading, isError, error, data } = useQuery("getMentorBanner", () => getNewMentorBannerApi(), {
        refetchOnWindowFocus: false
    });

    console.log("새로운 강사 배너", data);

    const NewMentorListData = data?.data.bannerData;

    return (
        <>
            <SlideShow NewMentorListData={NewMentorListData}/>
        </>
    )
};

export default SlideWrapper;