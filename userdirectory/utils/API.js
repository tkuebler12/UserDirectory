import axios from "axios";

export default {
    getEmployee: function() {
        return axios.get("https://randomuser.me/api/?results=100&inc=picture,name,email,phone,dob");
    },
    getCategory: function() {
        return axios.get("https://randomuser.me/api/?results=100&inc=picture,name,email,phone,dob");
    },
    getProperty: function() {
        return axios.get("https://randomuser.me/api/?results=100&inc=picture,name,email,phone,dob");
    }
};