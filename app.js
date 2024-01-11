function getRandomValue(max, min) {
    // max damage will be 15 & min wil be 8 and add the min again
    return Math.floor(Math.random() * (max - min)) + min;
}
const app = Vue.createApp({
    data() {
        return {
            playerHealth: 100,
            monsterHealth: 100,
            currentRound: 0,
            winner: null,
            logMessages: [],
        }
    },
    watch: {
        playerHealth(value) {
            if (value <= 0 && this.monsterHealth <= 0) {
                //  A Draw
                this.winner = 'draw'
            } else if (value <= 0) {
                // Player Lost
                this.winner = 'monster'
            }
        },
        monsterHealth(value) {
            if (value <= 0 && this.playerHealth <= 0) {
                //  A Draw
                this.winner = true
            } else if (value <= 0) {
                // Monster Lost & Player Won
                this.winner = 'player'
            }
        }
    },
    computed: {
        monsterBarStyle() {
            if (this.monsterHealth <= 0) {
                return { width: '0%' };
            }
            return { width: this.monsterHealth + '%' };
        },
        playerBarStyle() {
            if (this.playerHealth <= 0) {
                return { width: '0%' };
            }
            return { width: this.playerHealth + '%' };
        },
        enableSpecialAttack() {
            return this.currentRound % 3 !== 0
        }
    },
    methods: {
        startGame() {
            this.playerHealth = 100;
            this.monsterHealth = 100;
            this.currentRound = 0;
            this.winner = null;
            this.logMessages = [];
        },
        attackMonster() {
            this.currentRound++;
            const attackValue = getRandomValue(12, 5);
            this.monsterHealth -= attackValue;
            this.addLogMessage('player', 'attack' , attackValue);
            this.attackPlayer();
        },
        attackPlayer() {
            const attackValue = getRandomValue(15, 8);
            this.playerHealth -= attackValue;
            this.addLogMessage('monster', 'attack' , attackValue);
        },
        specialAttackMonster() {
            const attackValue = getRandomValue(25, 10);
            this.monsterHealth -= attackValue;
            this.addLogMessage('player', 'special attack' , attackValue);
            this.attackPlayer();
            this.currentRound++;
        },
        healPlayer() {
            this.currentRound++;
            const healValue = getRandomValue(20, 8);
            if (this.playerHealth + healValue > 100) {
                this.playerHealth = 100;
            } else {
                this.playerHealth += healValue;
                this.addLogMessage('player', 'heal' , healValue);
            }
            this.attackPlayer();
        },
        surrender() {
            this.winner = 'monster';
        },
        addLogMessage(who, what, value) {
            // array.push() adds new element at the end array.unshift() adds element at the start
            this.logMessages.unshift({
                actionBy: who,
                actionType: what,
                actionValue: value,
            });
        }
    }
});

app.mount('#game')