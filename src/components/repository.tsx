import React from "react";
import '../styles/repository.css'

import { colors } from "../lang-colors";
import { RepositoryItens } from "../interfaces/repository-interface";

export default function Repository(props: RepositoryItens) {
    return (
        <section className="repository-main">
            <div className="title">
                <p>{props.name}</p>
            </div>
            <p className="description">{props.description}</p>
            <div className="topics">
                {
                    props.topics ? props.topics.map((topic: string) =>
                        (<p>{topic}</p>)
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
            </div>
        </section>
    )
}