class CallController {
    currentCall = null
    #callHistory = [];

    constructor() {
        Call.onStateChange(this.#stateChangeHandler);
        // this.startCall('312312312321')
    }

    startCall(phone) {
        if(typeof phone !== 'string') throw new Error(`Phone number should be a string, ${typeof phone} provided`)
        this.currentCall = new Call(phone)
    }

    endCall() {
        console.log(1, this.currentCall);
        this.currentCall.state = Call.callStates.disconnect
    }

    #stateChangeHandler = (newState, oldState) => {
        console.log(oldState, '>', newState)
        if(newState === Call.callStates.reject || newState === Call.callStates.disconnect) {
            this.#addToHistory(this.currentCall)
            this.currentCall = null
            return
        }

        if(newState === Call.callStates.inProgress) {
            setTimeout(() => {
                this.endCall()
            }, 5000)
        }
    }

    #addToHistory(call) {
        if(!(call instanceof Call)) return;
        this.#callHistory.push(call)
    }

    get callHistory(){
        return structuredClone(this.#callHistory)
    }
}


const callController = new CallController()