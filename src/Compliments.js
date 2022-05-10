import React from "react"
import './Compliments.css';


class Compliments extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            compliments: [
                { "id": 1, "text": "Kocham Cię 😘 ❤️ " },
                { "id": 2, "text": "Masz cudowny uśmiech" },
                { "id": 3, "text": "Jesteś bardzo inteligentny 🧠" },
                { "id": 4, "text": "Lubię z Tobą gadać o polityce 😉" },
                { "id": 5, "text": "Lubię spędzać z Tobą czas" },
                { "id": 6, "text": "Masz bardzo ładny i męski głos 🥰" },
                { "id": 7, "text": "Uwielbiam uprawiać z Tobą sporty" },
                { "id": 8, "text": "Sex z Tobą jest fantastyczny! 🤤" },
                { "id": 9, "text": "Uwielbiam Twój wzrok Pantery" },
                { "id": 10, "text": "Kocham Twój dotyk na moim ciele 🤤" },
                { "id": 11, "text": "Uwielbiam chodzić z Tobą za rękę" },
                { "id": 12, "text": "Cudownie całujesz 💋" },
                { "id": 13, "text": "Każda rozmowa z Tobą to przyjemność" },
                { "id": 14, "text": "Uwielbiam Cię gryźć w szyję 🧛🏻‍♀️" },
                { "id": 15, "text": "Lubię robić Ci malinki" },
                { "id": 16, "text": "Lubię Cię całować w nosek" },
                { "id": 17, "text": "Uwielbiam jak mnie całujesz w bródkę" },
                { "id": 18, "text": "Masz dobre serduszko ❤️ " },
                { "id": 19, "text": "Jesteś super przystojny 🥰" },
                { "id": 20, "text": "Masz bardzo fajnego 🍆 😉" },
                { "id": 21, "text": "Masz boskie ciało, od którego ciężko oderwać wzrok 🤤" },
                { "id": 22, "text": "Uwielbiam nasze wielogodzinne rozmowy" },
                { "id": 23, "text": "Uwielbiam Twoje duże, silne dłonie i ramiona" },
                { "id": 24, "text": "Lubię to, że jesteś nerdem 🤓" },
                { "id": 25, "text": "Uwielbiam, zasypiać w Twoich ramionach" },
                { "id": 26, "text": "Uwielbiam, gdy mnie przytulasz" },
                { "id": 27, "text": "Kocham sposób w jaki się poruszasz (tak ogólnie...ale we mnie też 😈)" },
                { "id": 28, "text": "Masz cudowne usta 😘" },
                { "id": 29, "text": "Bardzo podoba mi się sposób w jaki myślisz i działasz" },
                { "id": 30, "text": "Bardzo podoba mi się Twój styl ubierania" },
                { "id": 31, "text": "Jesteś super sexi 🥰" },
                { "id": 32, "text": "Lubię gdy mnie dominujesz 🥰 🤤" },
                { "id": 33, "text": "Lubię Cię dominować, patrzeć jak się poddajesz i sprawiać Ci przyjemność 🤤" },
                { "id": 34, "text": "Uwielbiam Twoje poczucie humoru" },
                { "id": 35, "text": "Uwielbiam to, że możemy uczyć się od siebie nowych rzeczy i wzajemnie się odkrywać" },
                { "id": 36, "text": "Uwielbiam dźwięk Twojego głosu, gdy wypowiadasz pierwsze słowa na naszym spotkaniu" },
                { "id": 37, "text": "Sprawiasz, że czuję się wyjątkowa i kochana" },
                { "id": 38, "text": "Lubię nasz sexting 🤤 😉" },
                { "id": 39, "text": "Uwielbiam, gdy każdego dnia piszesz Dzień Dobry i Dobranoc 🥰" },
                { "id": 40, "text": "Każda wiadomość od Ciebie, wywołuje mój uśmiech" },
                { "id": 41, "text": "Kocham się z Tobą wspinać. Dajesz mi dużo motywacji. 💪 🧗" },
                { "id": 42, "text": "Masz bardzo zgrabny tyłeczek 😈 ❤️" },
                { "id": 43, "text": "Uwielbiam to, że jesteś zawsze zadbany i pachnący ❤️" },
                { "id": 44, "text": "Kocham gdy mnie gryziesz i drapiesz ❤️" },
                { "id": 45, "text": "Lubię jak mruczysz z rozkoszy ❤️" },
                { "id": 46, "text": "Lubię to, że mamy wiele wspólnych cech" },
                { "id": 47, "text": "Jesteś uroczy 🥰" },
                { "id": 48, "text": "Bardzo lubię Cię słuchać 🥰" },
                { "id": 49, "text": "Lubię Twój gust muzyczny 🥰" },
                { "id": 50, "text": "Bardzo lubię Twoje bezpośrednie pytania" },
                { "id": 51, "text": "Dzięki Tobie wychodzę, ze swojej strefy komfortu i pokonuje swoje lęki 💪" },
                { "id": 52, "text": "Dziękuję, że mnie wspierasz i rozśmieszasz" },
                { "id": 53, "text": "Dziękuję, że jesteś w moim życiu 😘" },
                { "id": 54, "text": "Uwielbiam, gdy chwilę przed pocałunkiem wodzisz wzrokiem po moich ustach naprzemian z patrzeniem mi się w oczy 🤤 🥰" },
                { "id": 55, "text": "Uwielbiam, gdy przeciągasz chwilę, gdy patrzysz mi się w oczy 🥰" },
                { "id": 55, "text": "Uwielbiam, to jak na mnie patrzysz 🥰" },
                { "id": 56, "text": "Lubię być dla Ciebie brat'em i się z Tobą droczyć 🥰" },
                { "id": 57, "text": "Lubię jak dajesz mi klapsy 🍑 👋 😈" },
                { "id": 58, "text": "Uwielbiam jak mówisz, że mnie kochasz ❤️" },
                { "id": 59, "text": "Bardzo lubię zadawać Ci bezpośrednie albo dziwne pytania i obserwować w jaki sposób zareagujesz 😂 😈" },
                { "id": 60, "text": "Uwielbiam gdy trzymasz mnie w pasie swoimi dużymi dłońmi, czuję się wtedy taka drobniutka 🤤 😈" },
                { "id": 61, "text": "Uwielbiam podziwiać Twoje kocie ruchy gdy się wspinasz, Twój proces myślowy i oczywiście Twój tyłeczek, bo mam wtedy doskonały widok 🍑 🤤" },
                { "id": 62, "text": "Uwielbiam to jak jęczysz gdy dochodzisz 🤤" },
                { "id": 63, "text": "Uwielbiam eksperymentować z Tobą w łożku 🤤 😈" },
                { "id": 64, "text": "Uwielbiam gdy mnie wiążesz i robisz ze mną co Ci się podoba 🤤 😈" },
                { "id": 65, "text": "Uwielbiam nasze przepychanki w łóżku 😈" },
                { "id": 66, "text": "Strasznie słodko ziewasz 🥱" },
                { "id": 67, "text": "Uwielbiam, gdy mnie przytulasz w nocy" },
                { "id": 68, "text": "Uwielbiam, Cię rozśmieszać 😂" },
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
