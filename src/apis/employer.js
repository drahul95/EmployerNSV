import axios from "../config/axios";
import { store } from "../Redux/store";

export const getSuggestedCandidateApi = async (
    ) => {
        const url = "/employer/suggested/candidates";
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

    
    export const getJobsDetailApi = async (
        ) => {
            const url = "/jobDetails/job_id";
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

        export const unlockCandidateApi = async (
            ) => {
                const url = "/employer/contactReveal";
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



        export const inviteCandidateApi = async (
            ) => {
                const url = "/employer/invite/multipleCandidate";
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

            export const saveCandidateApi = async (
                ) => {
                    const url = "/employer/save/multipleCandidate";
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