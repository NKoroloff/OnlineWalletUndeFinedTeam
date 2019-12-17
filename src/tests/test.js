describe("function sliceDash,must truncate the exact after hyphen", function() {
//
    it('should succeed', (done) => {
        setTimeout(done, 1000);
    });

    it('should fail', () => {
        setTimeout(() => {
            throw new Error('Failed');
        }, 1000);
    });

    it('should randomly fail', () => {
        if (require('./module')) {
            throw new Error('Randomly failed');
        }
    });

    it("call function sliceDash with args \"valera - vodolaz\" return\"valera \"", function () {
        const a = "valera - vodolaz";
        const exp = "valera ";
        const act = sliceDash(a);
//         assert.equal(act, exp);
        assert.deepEqual(act, exp);
    })
    it("call function sliceDash with args \"valera -- vodolaz\" return\"valera -\"", function () {
        const a = "valera -- vodolaz";
        const exp = "valera -";
        const act = sliceDash(a);
    })
        assert.deepEqual(act, exp);
    it("call function sliceDash with args \"valera  vodolaz\" return\"valera vodolaz\"", function () {
        const a = "valera vodolaz";
        const exp = "valera vodolaz";
        const act = sliceDash(a);
        assert.deepEqual(act, exp);
    })
    it("call function sliceDash with args \"valeravodolaz\" return\"valeravodolaz\"", function () {
        const a = "valeravodolaz";
        const exp = "valeravodolaz";
        const act = sliceDash(a);
        assert.deepEqual(act, exp);
    })
    it("call function sliceDash with args \"valera-vodolaz\" return\"valerav-\"", function () {
        const a = "valera-vodolaz";
        const exp = "valera";
        const act = sliceDash(a);
        assert.deepEqual(act, exp);
    })
    it("call function sliceDash with args \"valera-vodolaz-\" return\"valerav-\"", function () {
        const a = "valera-vodolaz-";
        const exp = "valera-vodolaz";
        const act = sliceDash(a);
        assert.deepEqual(act, exp);
    })
    it("call function sliceDash with args \"فوداز - فاليرا\" return\"فوداز ا\"", function () {
        const a = "فوداز - فاليرا";
        const exp = "فوداز ";
        const act = sliceDash(a);
    })
    it("call function sliceDash with args \"غواصة-vodolaz\"; return\"valerav-\"", function () {
        const a = "غواصة-vodolaz";
        const exp = "غواصة";
        const act = sliceDash(a);
        assert.deepEqual(act, exp);
    })
    it("call function sliceDash with args \"ةvodolaz - فاليا\" return\"valerav-\"", function () {
        const a = "ةvodolaz - فاليا";
        const exp = "ةvodolaz ";
        const act = sliceDash(a);
        assert.deepEqual(act, exp);
    })
})
describe("function validation", function() {
    it("call function validateForm with args \"valera\" return true ", function () {
        const a = "valera";
        const exp = true;
        const act = validateForm(a);
        assert.deepEqual(act, exp);
    })
})