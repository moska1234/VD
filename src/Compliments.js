import React from "react"
import './Compliments.css';


class Compliments extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            compliments: [
                { "id": 1, "text": "Kocham Cię" },
                { "id": 2, "text": "Masz cudowny uśmiech" },
                { "id": 3, "text": "Jesteś bardzo inteligentny" },
                { "id": 4, "text": "Lubię z Tobą gadać o polityce :D" },
                { "id": 5, "text": "Lubię spędzać z Tobą czas" },
                { "id": 6, "text": "Masz bardzo męski głos" },
                { "id": 7, "text": "Uwielbiam uprawiać z Tobą sporty" },
                { "id": 8, "text": "Sex z Tobą jest fantastyczny!" },
                { "id": 9, "text": "Uwielbiam Twój wzrok Pantery" },
                { "id": 10, "text": "Kocham Twój dotyk na moim ciele" },
                { "id": 11, "text": "Uwielbiam chodzić z Tobą za rękę" },
                { "id": 12, "text": "Cudownie całujesz" },
                { "id": 13, "text": "Kazda rozmowa z Tobą to przyjemność" },
                { "id": 14, "text": "Uwielbiam Cię gryźć w szyję" },
                { "id": 14, "text": "Lubię robić Ci malinki" },

            ],
            compliment: []
        };
        this.randomCompl = this.randomCompl.bind(this);
    }
    componentDidMount() {
        this.randomCompl();
    }
    randomCompl() {
        this.setState({
            compliment: this.state.compliments[Math.floor(Math.random() * this.state.compliments.length)]
        });
        console.log(this.state.compliment.text)

    }
    render() {
        return (
            <div className="complBox">
                <h3>
                    {this.state.compliment.text}
                </h3>
                <button
                    className="rainbow"
                    type="button"
                    onClick={this.randomCompl}

                >
                    Next
                </button>
            </div>
        );
    }
}

export default Compliments


