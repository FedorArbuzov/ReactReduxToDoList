import React, {Component} from 'react'

class App extends Component {

    constructor(props) {
        super(props)
        this.state = {
            colors: []
        }
        this.addColor = this.addColor.bind(this)
    }

    addColor(color) {
        this.setState(prevState => ({
           colors: prevState.colors.concat(color)
        }))
    }

    render() {
        const { addColor } = this
        const { colors } = this.state
        return (
            <div className="app">
                <AddColorForm onNewColor={addColor} />
                <ColorList colors={colors} />
            </div>
        )
    }
}
const AddColorForm = ({onNewColor=f=>f}) => {

    let _title
    const submit = e => {
        e.preventDefault()
        onNewColor(_title.value)
        _title.value = ''
        _title.focus()
    }
    return (
        <form className="add-color" onSubmit={submit}>
            <input ref={input => _title = input}
                   type="text"
                   placeholder="color title..." required/>
            <button>ADD</button>
        </form>
    )
}



const ColorList = ({ colors=[]}) =>
    <div className="color-list">
        {(colors.length === 0) ?
            <p>No Colors Listed. (Add a Color)</p> :
            colors.map(color =>
                <p>{color}</p>
            )
        }
    </div>


export default App