"use strict";

class AsyncTracker{
    #state = 'pending';
    value = undefined;
    reason = undefined;
    onFulfilledCallbacks = [];
    onRejectedCallbacks = [];
    onFinallyCallbacks =[];
    constructor(func) {
        try{
            func(this.resolve, this.reject);
        }catch(error) {
            this.reject(error);
        }
    }

    handleState(state, value){
        if(this.#state === 'pending'){
            this.#state = state;
            this[state === 'fulfilled' ? 'value' : 'reason'] = value;
            const callback = state === 'fulfilled' ? this.onFulfilledCallbacks : this.onRejectedCallbacks;
            callback.forEach(callback => callback(value));
        }
    }
    resolve = (value) =>{
        this.handleState('fulfilled', value);
    }

    reject = (reason) =>{
        this.handleState('rejected', reason);
    }

    then(onFulfilled, onRejected) {
        const promise = new AsyncTracker((resolve, reject) => {

            const handleCallback = (callback, value) => {
                try{
                    if(typeof callback === 'function'){
                        const result = callback(value);
                        if(result instanceof AsyncTracker){
                            result.then(resolve, reject)
                        }else{
                            resolve(result);
                        }
                    }else{
                        resolve(value);
                    }
                }catch (error){
                    reject(error);
                }
            }
                const onFulfilledCallback = (value) => {
               handleCallback(onFulfilled, value);
            };

            const onRejectedCallback = (reason) => {
                handleCallback(onRejected, reason);
            };

            switch (this.#state) {
                case 'pending':
                    this.onFulfilledCallbacks.push(onFulfilledCallback);
                    this.onRejectedCallbacks.push(onRejectedCallback);
                    break;
                case 'fulfilled':
                    onFulfilledCallback(this.value);
                    break;
                case 'rejected':
                    onRejectedCallback(this.reason);
                    break;
            }
        });

        return promise;
    }

    catch(onRejected) {
        return this.then(undefined, onRejected);
    }

    finally(onFinally){
        const promise = new AsyncTracker((resolve,reject) =>{
            const onFinallyCallback = () =>{
                try{
                    const result = onFinally();
                    if(result instanceof AsyncTracker){
                        result.then(resolve,reject);
                    }else{
                        resolve(this.value)
                    }
                }catch (error){
                    reject(error);
                }
            };
            switch (this.#state) {
                case 'pending':
                    this.onFinallyCallbacks.push(onFinallyCallback);
                    break;
                case 'fulfilled':
                case 'rejected':
                    onFinallyCallback();
                    break;
            }
        })
        return promise;
    }


}

// let result = new AsyncTracker((resolve, reject) => {
//         setTimeout(() => resolve("готово!"), 1000)
//     });
//
// result
//     .then(res =>{
//     console.log(50);
//     })
//     .then(r =>{
//         console.log('123')
//     })
//     .catch(e =>{
//         console.log(e, 'error');
//     })
//     .finally(r =>{
//         console.log(r);
//     })
//
//     console.log(result)