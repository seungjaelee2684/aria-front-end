import { mentorListData } from './MentorData';

export const NewMentorListData = mentorListData?.filter((item : any) => item?.isnew === true);