import React from "react";

type Props = {
    children: JSX.Element[],
    id: string
}

export default function ProposalComponent({children, id} : Props) {
    return <div id={`proposal_${id}`} className="border border-1 rounded rounded-2 m-3">
        {children}
    </div>
}