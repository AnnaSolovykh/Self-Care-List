import { Component } from 'react';

export class Care extends Component {
    state = {
        userInput: "",
        deedsList: []
    }

    onChangeEvent(e) {
        this.setState({userInput: e})
        console.log(e)
    }

    addItem(input) {
        if (input === '') {
            alert("Please enter a deed")
        }
        else {
            let deedsArray = this.state.deedsList;
            deedsArray.push(input);
            this.setState({deedsList: deedsArray, userInput: " "})
        }
        console.log(input)
    }

    deleteItem() {
        let deedsArray = this.state.deedsList;
        deedsArray = [];
        this.setState({deedsList: deedsArray})
    }

    crossedWord(event) {
        const word = event.target;
        word.classList.toggle("crossed")
    }

    onFormSubmit(e) {
        e.preventDefault();
    }

    render() {
        return(
            <div>
                <form onSubmit={this.onFormSubmit}>
                    <div className="wrapper">
                        <div className="container">
                            <input type="text"
                            placeholder="How have you cherished yourself today?"
                            onChange={(e) => (this.onChangeEvent(e.target.value))}
                            value={this.state.userInput}
                            />
                        </div>

                        <div className="container">
                            <button onClick={() => this.addItem(this.state.userInput)} className="btn">Add</button>
                        </div>

                        <ul>
                            {this.state.deedsList.map((item, index) => (
                                <li onClick={this.crossedWord} key={index}>{item}</li>
                            ))}
                        </ul>

                        <div className="container">
                            <button onClick={() => this.deleteItem()} className="btn">Delete</button>
                        </div>
                    </div>
                </form>
            </div>
        )
    }
}