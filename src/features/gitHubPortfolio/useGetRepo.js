import { Octokit } from "octokit"
import { useEffect, useState } from "react"

const useGetRepo = () => {
    const [result, setResult] = useState("")
    const [status, setStatus] = useState("loading")

    useEffect(() => {
        const octokit = new Octokit()
        async function getRepo() {
            try {
                const result = await octokit.request('GET /users/{username}/repos', {
                    username: 'Ziko225'
                })
                setResult(result.data)
                setStatus("ok")
            } catch {
                setStatus("error")
            }
        }
        setTimeout(() => getRepo(), 1000)

    }, [])
    return { result, status }
}

export default useGetRepo