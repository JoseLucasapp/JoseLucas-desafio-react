import React, { useContext, useEffect, useState } from "react";
import { Context } from "../context/context";
import axios from "axios";
import Repository from "../components/repository";
import "../styles/user.css"
import UserTopBar from "../components/userTopBar";

export default function User() {

    const { userData } = useContext(Context)
    const [repos, setRepos]: any = useState([''])

    useEffect(() => {
        const getRepos = async () => {
            const userRepos = await axios.get(`https://api.github.com/users/${userData.login}/repos`)
            setRepos(userRepos.data)
        }

        getRepos()
    }, [])

    return (
        <section>
            <div className="user-main">
                <UserTopBar repositories={repos.length} />
                <div className="user-and-repos-details">
                    <div className="user-canvas">
                        <div className="profile-pic">
                            <img src={userData.avatar_url} alt="" />
                        </div>
                        <div className="user-text-details">
                            <div className="user-login">
                                <p className="name">{userData.name}</p>
                                <p className="username">{userData.login}</p>
                            </div>
                            <a href={userData.html_url} target="blank" className="follow-button"><button>Follow</button></a>
                            <p className="bio">{userData.bio}</p>
                            <div className="follow">
                                <svg height="16" viewBox="-2 -1 20 20" version="1.1" width="16">
                                    <path fill-rule="evenodd" d="M5.5 3.5a2 2 0 100 4 2 2 0 000-4zM2 5.5a3.5 3.5 0 115.898 2.549 5.507 5.507 0 013.034 4.084.75.75 0 11-1.482.235 4.001 4.001 0 00-7.9 0 .75.75 0 01-1.482-.236A5.507 5.507 0 013.102 8.05 3.49 3.49 0 012 5.5zM11 4a.75.75 0 100 1.5 1.5 1.5 0 01.666 2.844.75.75 0 00-.416.672v.352a.75.75 0 00.574.73c1.2.289 2.162 1.2 2.522 2.372a.75.75 0 101.434-.44 5.01 5.01 0 00-2.56-3.012A3 3 0 0011 4z"></path>
                                </svg>
                                <p className="followers">{userData.followers} followers</p>
                                ·
                                <p className="following">{userData.following} following</p>
                            </div>
                            <div className="user-personal-details">
                                {
                                    userData.company ?
                                        <div>
                                            <svg viewBox="-2 -1 20 20" version="1.1" width="16" height="16">
                                                <path fill-rule="evenodd" d="M1.5 14.25c0 .138.112.25.25.25H4v-1.25a.75.75 0 01.75-.75h2.5a.75.75 0 01.75.75v1.25h2.25a.25.25 0 00.25-.25V1.75a.25.25 0 00-.25-.25h-8.5a.25.25 0 00-.25.25v12.5zM1.75 16A1.75 1.75 0 010 14.25V1.75C0 .784.784 0 1.75 0h8.5C11.216 0 12 .784 12 1.75v12.5c0 .085-.006.168-.018.25h2.268a.25.25 0 00.25-.25V8.285a.25.25 0 00-.111-.208l-1.055-.703a.75.75 0 11.832-1.248l1.055.703c.487.325.779.871.779 1.456v5.965A1.75 1.75 0 0114.25 16h-3.5a.75.75 0 01-.197-.026c-.099.017-.2.026-.303.026h-3a.75.75 0 01-.75-.75V14h-1v1.25a.75.75 0 01-.75.75h-3zM3 3.75A.75.75 0 013.75 3h.5a.75.75 0 010 1.5h-.5A.75.75 0 013 3.75zM3.75 6a.75.75 0 000 1.5h.5a.75.75 0 000-1.5h-.5zM3 9.75A.75.75 0 013.75 9h.5a.75.75 0 010 1.5h-.5A.75.75 0 013 9.75zM7.75 9a.75.75 0 000 1.5h.5a.75.75 0 000-1.5h-.5zM7 6.75A.75.75 0 017.75 6h.5a.75.75 0 010 1.5h-.5A.75.75 0 017 6.75zM7.75 3a.75.75 0 000 1.5h.5a.75.75 0 000-1.5h-.5z"></path></svg>
                                            <p>{userData.company}</p>
                                        </div> : ''
                                }
                                {
                                    userData.location ?
                                        <div>
                                            <svg viewBox="-1 -2 20 20" version="1.1" width="16" height="16"><path fill-rule="evenodd" d="M11.536 3.464a5 5 0 010 7.072L8 14.07l-3.536-3.535a5 5 0 117.072-7.072v.001zm1.06 8.132a6.5 6.5 0 10-9.192 0l3.535 3.536a1.5 1.5 0 002.122 0l3.535-3.536zM8 9a2 2 0 100-4 2 2 0 000 4z"></path></svg>
                                            <p>{userData.location}</p>
                                        </div>
                                        : ''
                                }
                                {
                                    userData.email ?
                                        <div>
                                            <svg viewBox="-2 -2 20 20" version="1.1" width="16" height="16"><path fill-rule="evenodd" d="M1.75 2A1.75 1.75 0 000 3.75v.736a.75.75 0 000 .027v7.737C0 13.216.784 14 1.75 14h12.5A1.75 1.75 0 0016 12.25v-8.5A1.75 1.75 0 0014.25 2H1.75zM14.5 4.07v-.32a.25.25 0 00-.25-.25H1.75a.25.25 0 00-.25.25v.32L8 7.88l6.5-3.81zm-13 1.74v6.441c0 .138.112.25.25.25h12.5a.25.25 0 00.25-.25V5.809L8.38 9.397a.75.75 0 01-.76 0L1.5 5.809z"></path></svg>
                                            <p>{userData.email}</p>
                                        </div> : ''
                                }
                                {
                                    userData.blog ?
                                        <div className="blog">
                                            <svg viewBox="-2 -2 20 20" width="16" height="16" version="1.1" ><path fill-rule="evenodd" d="M7.775 3.275a.75.75 0 001.06 1.06l1.25-1.25a2 2 0 112.83 2.83l-2.5 2.5a2 2 0 01-2.83 0 .75.75 0 00-1.06 1.06 3.5 3.5 0 004.95 0l2.5-2.5a3.5 3.5 0 00-4.95-4.95l-1.25 1.25zm-4.69 9.64a2 2 0 010-2.83l2.5-2.5a2 2 0 012.83 0 .75.75 0 001.06-1.06 3.5 3.5 0 00-4.95 0l-2.5 2.5a3.5 3.5 0 004.95 4.95l1.25-1.25a.75.75 0 00-1.06-1.06l-1.25 1.25a2 2 0 01-2.83 0z"></path></svg>
                                            <a href={userData.blog} target="blank"><p>{userData.blog}</p></a>
                                        </div> : ''
                                }
                            </div>
                        </div>
                    </div>
                    <div className="repos-canvas">
                        {repos.map((repo: any) => (
                            <Repository name={repo.name} description={repo.description} topics={repo.topics} language={repo.language} />
                        ))}
                    </div>
                </div>
            </div>
        </section >
    )
}