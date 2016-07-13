describe('Pattern Script', function() {
    
    describe('test availability', function() {
        it('of SingletonPattern function', function() {
            expect(jQuery.isFunction(ps.SingletonPattern)).toBe(true);
        });
        it('of ObserverPattern.Subject function', function() {
            expect(jQuery.isFunction(ps.ObserverPattern.Subject)).toBe(true);
        });
        it('of ObserverPattern.Observer function', function() {
            expect(jQuery.isFunction(ps.ObserverPattern.Observer)).toBe(true);
        });
        it('of PublisherSubscriberPattern.Publisher function', function() {
            expect(jQuery.isFunction(ps.PublisherSubscriberPattern.Publisher)).toBe(true);
        });
        it('of PublisherSubscriberPattern.Subscriber function', function() {
            expect(jQuery.isFunction(ps.PublisherSubscriberPattern.Subscriber)).toBe(true);
        });
    }); // end availability suite
    
    describe('test Singleton', function() {
        var func, sin, ins_1, ins_2;
        beforeEach(function() {
            func = function() {
                this.id = 0;
            }
            sin = ps.SingletonPattern(func);
            ins_1 = sin.getInstance();
            ins_2 = sin.getInstance();
        });
        it('throwing EXCEPTION when no baseClass', function() {
            expect(ps.SingletonPattern).toThrow();
        });
        it('return baseClass type object when baseClass given', function() {
            expect(ins_1 instanceof func && ins_2 instanceof func).toBe(true);
            expect(ins_1.id).toEqual(0);
        });
        it('test functionality', function() {
            expect(ins_1.id).toEqual(0);
            expect(ins_2.id).toEqual(0);
            ins_1.id++;
            expect(ins_1.id).toEqual(1);
            expect(ins_2.id).toEqual(1);
            ins_2.id++
            expect(ins_1.id).toEqual(2);
            expect(ins_2.id).toEqual(2);
        });
    }); // end singleton suite
    
    describe('test Observer', function() {
        
    }); // end observer suite
    
    describe('test PublisherSubscriber', function() {
        
    }); // end publisher subscriber suite
    
}); // end pattern script suite