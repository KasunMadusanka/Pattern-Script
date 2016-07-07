/////////////////////////////////////////////////////////////////////////////////
/// Pattern Script JS library for implement OOP disign patterns in javascript ///
///            By : K D Kasun Madusanka - kdk.madusanka@gmail.com             ///
/////////////////////////////////////////////////////////////////////////////////


var ps = (function(){
    
    //// SINGLETON ////
    ///////////////////
    var SingletonPattern = function(baseClass) {
        if(baseClass == undefined)
            throw "EXCEPTION : base class requiered for creating a singleton object!\nPlease use 'new SingletonPattern(base_class)'";
        var tempClass = (function() {
            var instance;
            var Class = baseClass;

            return {
                getInstance : function() {
                    if(!instance){
                        instance = Class();
                    }
                    return instance;
                }
            };
        })();
        return tempClass;
    };
    
    
    //// OBSERVER ////
    //////////////////
    var ObserverPattern = {
        Subject : function(baseClass){
            var addObserver = function(observer) {
                this.observers.push(observer);
            };
            var removeObserver = function(observer) {
                this.observers.splice(this.observers.indexOf(observer), 1);
            };
            var notify = function(notification) {
                for(var index in this.observers){
                    this.observers[index].update(notification);
                }
            };
            if(baseClass == undefined)
                throw "EXCEPTION : base class requiered for creating a Subject class!\nPlease use 'new ObserverPattern.Subject(base_class)'";
            if(!baseClass.prototype) {
                baseClass.observers = [];
                baseClass.addObserver = addObserver;
                baseClass.removeObserver = removeObserver;
                baseClass.notify = notify;
            } else {
                baseClass.prototype.observers = [];
                baseClass.prototype.addObserver = addObserver;
                baseClass.prototype.removeObserver = removeObserver;
                baseClass.prototype.notify = notify;
            }
            return baseClass;
        },
        Observer : function(baseClass, updateFunction) {
            if(baseClass == undefined)
                throw "EXCEPTION : base class requiered for creating a Observer class!\nPlease use 'new ObserverPattern.Observer(base_class)'";
            if(updateFunction == undefined)
                throw "EXCEPTION : function for update is compulsory!\nPlease use 'new ObserverPattern.Observer(baseClass, update_function)'";
            if(!baseClass.prototype) {
                baseClass.update = updateFunction;
            } else {
                baseClass.prototype.update = updateFunction;
            }
            return baseClass;
        }
    }
    
    
    //// PUBLISHER-SUBSCRIBER ////
    //////////////////////////////
    var PublisherSubscriberPattern = {
        Publisher : function(baseClass) {
            var subscribe = function(newSubscriber, key = 'default') {
                if(newSubscriber == undefined)
                    throw "EXCEPTION : subscriber object required for make a subscription!\nPlease use 'PublisherSubscriberPattern.Subscriber' to create a new subscriber";
                if (key in this.subscriptions){
                    this.subscriptions[key].push(newSubscriber);
                }else {
                    this.subscriptions[key] = [newSubscriber];
                }
            };
            var unsubscribe = function(subscriber, key = 'default') {
                this.subscriptions[key].splice(this.subscriptions[key].indexOf(subscriber), 1);
            };
            var publish = function(context, key = 'default') {
                for(k in this.subscriptions){
                    if(k == key){
                        for(sub in this.subscriptions[key]) {
                            this.subscriptions[key][sub].listen(context);
                        }
                    }
                }
            };
            if(baseClass == undefined)
                throw "EXCEPTION : base class requiered for creating a Publisher class!\nPlease use 'new PublisherSubscriberPattern.Publisher(base_class)'";
            if(!baseClass.prototype) {
                baseClass.subscriptions = {};
                baseClass.subscribe = subscribe;
                baseClass.unsubscribe = unsubscribe;
                baseClass.publish = publish;
            } else {
                baseClass.prototype.subscriptions = {};
                baseClass.prototype.subscribe = subscribe;
                baseClass.prototype.unsubscribe = unsubscribe;
                baseClass.prototype.publish = publish;
            }
            return baseClass;
        },
        
        Subscriber : function(baseClass, listenFunction) {
            if(baseClass == undefined)
                throw "EXCEPTION : base class requiered for creating a Observer class!\nPlease use 'new ObserverPattern.Observer(base_class)'";
            if(listenFunction == undefined)
                throw "EXCEPTION : function for update is compulsory!\nPlease use 'new ObserverPattern.Observer(baseClass, update_function)'";
            if(!baseClass.prototype) {
                baseClass.listen = listenFunction;
            } else {
                baseClass.prototype.listen = listenFunction;
            }
            return baseClass;
        }
    }
    
    
    
    
    return {
        SingletonPattern : SingletonPattern,
        ObserverPattern : ObserverPattern,
        PublisherSubscriberPattern : PublisherSubscriberPattern
    };
})();