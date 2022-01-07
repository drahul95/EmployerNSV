import axios from "../config/axios";
import { store } from "../Redux/store";

export const institutionTypesApi = async (
    payload
) => {
    const url = "/employer/common/institutionTypes";

    try {
        let { data } = await axios.post(url, payload, {
            headers: {
                token: store.getState().common.token,
            },
        });

        return data;
    } catch (error) {
        throw error.response.data;
    }
};

export const institutionSubTypesApi = async (
    payload
) => {
    const url = "/employer/common/institutionSubTypes";

    try {
        let { data } = await axios.post(url, payload, {
            headers: {
                token: store.getState().common.token,
            },
        });

        return data;
    } catch (error) {
        throw error.response.data;
    }
};

export const institutionSubTypeLabelApi = async (
    payload
) => {
    const url = "/employer/common/institutionSubTypeLabel";

    try {
        let { data } = await axios.post(url, payload, {
            headers: {
                token: store.getState().common.token,
            },
        });

        return data;
    } catch (error) {
        throw error.response.data;
    }
};

export const institutionMinorTypesApi = async (
    payload
) => {
    const url = "/employer/common/institutionMinorTypes";

    try {
        let { data } = await axios.post(url, payload, {
            headers: {
                token: store.getState().common.token,
            },
        });

        return data;
    } catch (error) {
        throw error.response.data;
    }
};

export const institutionMinorTypeLabelApi = async (
    payload
) => {
    const url = "/employer/common/institutionMinorTypeLabel";

    try {
        let { data } = await axios.post(url, payload, {
            headers: {
                token: store.getState().common.token,
            },
        });

        return data;
    } catch (error) {
        throw error.response.data;
    }
};

export const checkInstituteNameApi = async (
    payload
) => {
    const url = "/employer/institution/check_institute_name";

    try {
        let { data } = await axios.post(url, payload, {
            headers: {
                token: store.getState().common.token,
            },
        });

        return data;
    } catch (error) {
        throw error.response.data;
    }
};

export const checkGroupNameApi = async (
    payload
) => {
    const url = "/employer/institution/check_group_name";

    try {
        let { data } = await axios.post(url, payload, {
            headers: {
                token: store.getState().common.token,
            },
        });

        return data;
    } catch (error) {
        throw error.response.data;
    }
};

export const getInstituteHeirachyApi = async (
) => {
    const url = "/employer/common/get_institution_heirachy";

    try {
        let { data } = await axios.get(url, {
            headers: {
                token: store.getState().common.token,
            },
        });

        return data;
    } catch (error) {
        throw error.response.data;
    }
};

export const addInstituteApi = async (
    payload
) => {
    const url = "/employer/institution/add_institution_details";

    try {
        let { data } = await axios.post(url,payload, {
            headers: {
                token: store.getState().common.token,
            },
        });

        return data;
    } catch (error) {
        throw error.response.data;
    }
};
export const getInstituteJobsApi = async (
) => {
    const url = "/employer/posted/jobs_byInstitution";
console.log(store.getState().common.token,'tokeenenn')
    try {
        let { data } = await axios.get(url, {
            headers: {
                token: store.getState().common.token,
            },
        });

        return data;
    } catch (error) {
        throw error.response.data;
    }
};


        
