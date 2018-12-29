import React from "react"
import ReactDOM from "react-dom"

interface IProps {}

interface IState {
    liked: boolean
}

class LikeButton extends React.Component<IProps, IState> {
    constructor(props: IProps) {
        super(props)
        this.state = { liked: false }
    }

    onClick = () => {
        this.setState({ liked: true })
    }

    render() {
        if (this.state.liked) {
            return "You liked this."
        }
        return <button onClick={this.onClick}>Like</button>
    }
}

ReactDOM.render(<LikeButton />, document.getElementById("app"))
