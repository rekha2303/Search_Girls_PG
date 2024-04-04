import React from "react";
import InsightsIcon from '@mui/icons-material/Insights';

const ContactUs = () => {
    return (
        <div >
            <div className="d-flex flex-row flex-wrap justify-content-between p-3 h-100">
                <div className="w-50 d-flex flex-column align-items-center justify-content-center" style={{padding:'0% 5%'}}>
                    <h4>We we are</h4>
                    <p>You have Gradle installed on your system. Do you want to install the recommended 'Extension Pack for Java' extension from Microsoft for it?</p>
                    <p>You have Gradle installed on your system. Do you want to install the recommended 'Extension Pack for Java' extension from Microsoft for it?</p>
                     </div>
                <div className="w-50 d-flex flex-column align-items-center justify-content-center">
                    <div>
                        <InsightsIcon className="icon-size-big-red"/>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default ContactUs;