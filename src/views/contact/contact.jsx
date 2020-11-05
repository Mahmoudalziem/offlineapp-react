import React, {Fragment } from 'react';
import Banner from '../default/banner';
import ContactForm from  './contactForm';

import { ToastContainer, toast, Flip } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.min.css';

/// Image Banner

import banner from '../../assets/images/banner/banner1.jpg';

const Contact = () => {
    return (
        <Fragment>
            <Banner title="Contact Us" image={banner} /> 
            <ContactForm />
        </Fragment>
    )
}
// class Contact extends Component{

//     toastId;

//     ToastFun = () => {
//         this.toastId = toast.error('🦄 Wow so easy!', {
//             position: "top-right",
//             transition: Flip,
//             autoClose: 5000,
//             hideProgressBar: false,
//             closeOnClick: true,
//             pauseOnHover: true,
//             draggable: true,
//             progress: undefined,
//         });
        
//         setTimeout(() => (
//             this.updateToast()
//         ), 1000);

//     }

//     updateToast = () => (
//         toast.update(this.toastId, {
//             render: () => '🦄 Thanks For Uploads!',
//             type: toast.TYPE.SUCCESS,
//             autoClose: 5000
//         })
//     )
//     render() {
//         return (
//             <Fragment>
//                 <button className="toast-test" style={{ marginTop: '150px' }} onClick={this.ToastFun}>Toast</button>
//                 <ToastContainer />
//             </Fragment>
//         )
//     }
// }

export default Contact;