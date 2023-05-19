import {toast } from 'react-toastify';
let EmailRegx = /\S+@\S+\.\S+/;
let MobileRegx = /(^(\+88|0088)?(01){1}[3456789]{1}(\d){8})$/;

class FormHelper {

    IsEmpty(value) {
        return value.length === 0;
    }

    IsMobile(value){
        return MobileRegx.test(value);
    }

    IsEmail(value) {
        return !EmailRegx.test(value);
    }

    ErrorToast(msg) {
        toast.error(msg, {
            position: "bottom-center",
            autoClose:2000,
            hideProgressBar: true,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
        });
    }
    SuccessToast(msg) {
        toast.success(msg, {
            position: "bottom-center",
            autoClose: 2000,
            hideProgressBar: true,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
        });
    }

}
export const {
    IsEmpty,
    IsMobile,
    IsEmail,
    ErrorToast,
    SuccessToast,
} = new FormHelper();




