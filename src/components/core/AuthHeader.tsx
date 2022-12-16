import React from "react";

export default class AuthHeader extends React.Component<{ description: string, title: string }> {
    render() {
        return (
            <div id="title-description" className='text-center'>
                <div id="Title" className="m-auto pb-3">
                    <h4>{this.props.title}</h4>
                </div>

                <h6 id="description" className='font-weight-light'>{this.props.description}</h6>
            </div>
        )
    }
}
