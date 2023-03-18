import { Octokit } from "octokit";
import { useEffect, useState } from "react";

const useGetRepositories = () => {
    const [result, setResult] = useState("");
    const [status, setStatus] = useState("init");

    useEffect(() => {
        const octokit = new Octokit()
        async function getRepo() {
            try {
                const result = await octokit.request('GET /users/{username}/repos', {
                    username: 'Ziko225'
                })
                setResult(result.data);
                if (result) {
                    setStatus("ok");
                }
            } catch {
                setStatus("error");
            }
        };
        const interval = setTimeout(() => {
            getRepo();
            clearInterval(interval);
        }, 1500);

    }, [])
    return { result, status }
};

export default useGetRepositories;