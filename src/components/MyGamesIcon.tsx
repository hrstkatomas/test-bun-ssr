import React from "react";

type MyGamesIconProps = {
    id: number;
};

export const MyGamesIcon = ({ id }: MyGamesIconProps) => {
    return (
        <button
            type={"button"}
            className={"opacity-100 hover:opacity-75"}
            onClick={() => alert(`TODO: add ${id} to my games`)}
        >
            ⭐
        </button>
    );
};