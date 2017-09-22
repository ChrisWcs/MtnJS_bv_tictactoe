new Vue({
    el: '#app',
    data () {
        return {
            board: [
                ["_","_","_"],
                ["_","_","_"],
                ["_","_","_"]
            ],
            next: "X"
        }
    },
    methods: {
        markBoard: function ( r, c ) {
            let temp = [
                this.board[0].slice(),
                this.board[1].slice(),
                this.board[2].slice()
            ];
            temp[r][c] = this.next;
            this.board = temp;

            if( this.next == "X" ){
                this.next = "O"
            } else {
                this.next = "X"
            }
        },
        newGame: function () {
            let temp = [
                ["_","_","_"],
                ["_","_","_"],
                ["_","_","_"]
            ];
            this.board = temp;
        }
    }
});