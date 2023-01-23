import React from "react";
import i18n from '@dhis2/d2-i18n';
import {DetailArea} from "../DetailArea";
import {AreaContainer} from "../AreaContainer";
import {useData} from "../../hooks/data";


export function Profile() {
    const {profileData} = useData();
    return (<AreaContainer heading={i18n.t("Profile")}>
        <div className="column gap-8">
            {
                profileData?.getProfileData()?.map(data => (
                    <DetailArea key={`${data.id}-profile-details`} {...data} />))
            }
        </div>
    </AreaContainer>)

}

export function Enrollment() {
    const {profileData} = useData();
    return (
        <AreaContainer heading={i18n.t("Enrollment")}>
            <div className="column gap-8">
                {
                    profileData?.getEnrollmentData()?.map(data => (
                        <DetailArea key={`${data.id}-profile-details`} {...data}/>))
                }
            </div>
        </AreaContainer>
    )
}

export function Relationships() {
    return (
        <AreaContainer heading={i18n.t("Relationships")}>

        </AreaContainer>
    )
}

export function ProfileArea() {

    return (
        <div className="column gap-16 w-100 h-100">
            <Profile/>
            <Enrollment/>
            <Relationships/>
        </div>
    )
}
