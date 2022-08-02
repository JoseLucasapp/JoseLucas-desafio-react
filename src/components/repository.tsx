import '../styles/repository.css'

import { colors } from "../lang-colors";
import { RepositoryItens } from "../interfaces/repository-interface";
import { changeSvgColor, getDifferenceInDays } from "../helpers/utils";
import { ThemeContext } from '../context/ThemeContext';
import { useContext } from 'react';

export default function Repository(props: RepositoryItens) {

    const { theme } = useContext(ThemeContext)

    const svgStyle = changeSvgColor(theme)

    return (
        <section className="repository-main">
            <div className="title">
                <a href={props.url} target="blank">
                    <p>{props.name}</p>
                </a>
            </div>
            <p className="description">{props.description}</p>
            <div className="topics">
                {
                    props.topics ? props.topics.map((topic: string) =>
                        <p>{topic}</p>
                    ) : ''
                }
            </div>
            <div className="details">
                {
                    props.language ?
                        <div className="language">
                            <span className="repo-language-color" style={{ backgroundColor: colors[`${props.language}`].color }}></span>
                            <p>{props.language}</p>
                        </div> : ''
                }
                {
                    props.stargazers_count ?
                        <div className='star'>
                            <svg viewBox="1 0 15 15" version="1.1">
                                <path fill={svgStyle} fill-rule="evenodd" d="M8 .25a.75.75 0 01.673.418l1.882 3.815 4.21.612a.75.75 0 01.416 1.279l-3.046 2.97.719 4.192a.75.75 0 01-1.088.791L8 12.347l-3.766 1.98a.75.75 0 01-1.088-.79l.72-4.194L.818 6.374a.75.75 0 01.416-1.28l4.21-.611L7.327.668A.75.75 0 018 .25zm0 2.445L6.615 5.5a.75.75 0 01-.564.41l-3.097.45 2.24 2.184a.75.75 0 01.216.664l-.528 3.084 2.769-1.456a.75.75 0 01.698 0l2.77 1.456-.53-3.084a.75.75 0 01.216-.664l2.24-2.183-3.096-.45a.75.75 0 01-.564-.41L8 2.694v.001z"></path>
                            </svg>
                            <p>{props.stargazers_count}</p>
                        </div> : ''
                }
                {
                    props.forks ?
                        <div>
                            <svg viewBox="2 0 15 15" version="1.1">
                                <path fill={svgStyle} fill-rule="evenodd" d="M5 3.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm0 2.122a2.25 2.25 0 10-1.5 0v.878A2.25 2.25 0 005.75 8.5h1.5v2.128a2.251 2.251 0 101.5 0V8.5h1.5a2.25 2.25 0 002.25-2.25v-.878a2.25 2.25 0 10-1.5 0v.878a.75.75 0 01-.75.75h-4.5A.75.75 0 015 6.25v-.878zm3.75 7.378a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm3-8.75a.75.75 0 100-1.5.75.75 0 000 1.5z"></path>
                            </svg>
                            <p>{props.forks}</p>
                        </div> : ''
                }
                {
                    props.license ?
                        <div>
                            <svg viewBox="2 0 15 15" version="1.1">
                                <path fill={svgStyle} fill-rule="evenodd" d="M5 3.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm0 2.122a2.25 2.25 0 10-1.5 0v.878A2.25 2.25 0 005.75 8.5h1.5v2.128a2.251 2.251 0 101.5 0V8.5h1.5a2.25 2.25 0 002.25-2.25v-.878a2.25 2.25 0 10-1.5 0v.878a.75.75 0 01-.75.75h-4.5A.75.75 0 015 6.25v-.878zm3.75 7.378a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm3-8.75a.75.75 0 100-1.5.75.75 0 000 1.5z"></path>
                            </svg>
                            <p>{props.license.name}</p>
                        </div> : ''
                }
                {
                    props.updated_at ?
                        <div className='updated-at'>
                            <p>Updated {getDifferenceInDays(props.updated_at)} days ago</p>
                        </div> : ''
                }
            </div>
        </section >
    )
}