import React, { useContext } from "react";
import { Context } from "../context/context";

export default function User() {

    const { userData } = useContext(Context)

    return (
        <section>
            {userData.login}
        </section>
    )
}