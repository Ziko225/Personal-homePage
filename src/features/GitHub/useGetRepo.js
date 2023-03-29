import { Octokit } from "octokit";
import { useEffect, useState } from "react";

const useGetRepositories = () => {
    const [data, setData] = useState();
    const [status, setStatus] = useState("init");

    useEffect(() => {
        const octokit = new Octokit();
        try {
            octokit.request('GET /users/{username}/repos', {
                username: 'Ziko225'
            }).then((value) => {
                setData(value.data);
            })
        } catch {
            setStatus("error");
        };
    }, []);

    useEffect(() => {
        if (data) {
            const interval = setTimeout(() => {
                setStatus("ok");
                clearInterval(interval);
            }, 1500);
        };
    }, [data])
    return { data, status };
};

export default useGetRepositories;